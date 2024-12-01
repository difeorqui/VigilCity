const Rating = require('../models/ratingModel');
const Report = require('../models/reportModel');
const ReportRating = require('../models/reportRatingModel');
const sequelize = require('../database/db');

// Función auxiliar para actualizar el rating promedio
const actualizarRatingPromedio = async (reporteId) => {
    const ratings = await Rating.findAll({
        where: { reporteId }
    });

    const cantidadRatings = ratings.length;
    const ratingPromedio = cantidadRatings > 0
        ? ratings.reduce((acc, rating) => acc + rating.valor, 0) / cantidadRatings
        : 0;

    await ReportRating.upsert({
        reporteId,
        ratingPromedio,
        cantidadRatings
    });
};

const createRating = async (req, res) => {
    const transaction = await sequelize.transaction();
    try {
        const { reporteId, valor, comentario } = req.body;
        const usuarioId = req.userId;

        const report = await Report.findByPk(reporteId);
        if (!report) {
            return res.status(404).json({ message: 'Reporte no encontrado' });
        }

        const newRating = await Rating.create({
            reporteId,
            usuarioId,
            valor,
            comentario,
        }, { transaction });

        await actualizarRatingPromedio(reporteId);
        await transaction.commit();

        return res.status(201).json(newRating);
    } catch (error) {
        await transaction.rollback();
        return res.status(500).json({ message: 'Error al crear la calificación', error });
    }
};

const updateRating = async (req, res) => {
    try {
        const { id } = req.params; // ID de la calificación a actualizar
        const { valor, comentario } = req.body;
        const usuarioId = req.userId; // ID del usuario autenticado

        // Buscar la calificación por ID
        const rating = await Rating.findByPk(id);
        if (!rating) {
            return res.status(404).json({ message: 'Calificación no encontrada' });
        }

        // Verificar si el usuario es el creador de la calificación
        if (rating.usuarioId !== usuarioId) {
            return res.status(403).json({ message: 'No tienes permiso para modificar esta calificación' });
        }

        // Actualizar solo el valor y el comentario si se envían
        if (valor !== undefined) {
            rating.valor = valor;
        }
        if (comentario !== undefined) {
            rating.comentario = comentario;
        }

        await rating.save(); // Guardar los cambios

        return res.status(200).json(rating);
    } catch (error) {
        return res.status(500).json({ message: 'Error al actualizar la calificación', error });
    }
};

const getRatingsByReport = async (req, res) => {
    try {
        const { reporteId } = req.params; // ID del reporte

        // Consultar todos los ratings del reporte
        const ratings = await Rating.findAll({
            where: { reporteId },
        });

        return res.status(200).json(ratings);
    } catch (error) {
        return res.status(500).json({ message: 'Error al obtener las calificaciones', error });
    }
};

const getRatingsByUser = async (req, res) => {
    try {
        const usuarioId = req.userId; // ID del usuario autenticado

        // Consultar todos los reportes del usuario
        const reports = await Report.findAll({
            where: { usuarioId },
        });

        // Obtener ratings para cada reporte
        const reportsWithRatings = await Promise.all(reports.map(async (report) => {
            const ratings = await Rating.findAll({
                where: { reporteId: report.id },
            });
            return {
                ...report.toJSON(), // Convertir el reporte a JSON
                ratings, // Incluir los ratings en la respuesta
            };
        }));

        return res.status(200).json(reportsWithRatings);
    } catch (error) {
        return res.status(500).json({ message: 'Error al obtener las calificaciones del usuario', error });
    }
};

module.exports = { createRating, updateRating, getRatingsByReport, getRatingsByUser }; 
