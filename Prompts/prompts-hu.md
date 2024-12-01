# Mapa de Seguridad Urbana - Diego Fernando Orozco (DFO)
> Modelo - ChatGPT

## Índice

1. [Descripción general del producto](prompts-descripcion.md#1-descripción-general-del-producto)
2. [Arquitectura del sistema](prompts-arquitectura.md#2-arquitectura-del-sistema)
3. [Modelo de datos](prompts-modelo-datos.md#3-modelo-de-datos)
4. [Especificación de la API](prompts-especificacioapi.md#4-especificación-de-la-api)
5. [Historias de usuario](prompts-hu.md#5-historias-de-usuario)
6. [Tickets de trabajo](prompts-tickets.md#6-tickets-de-trabajo)
7. [Pull requests](#7-pull-requests)

---

## 5. Historias de Usuario

**Prompt 1:**

Actúa como un "Product Maganer" encargado de llevar a cabo el MVP del Mapa de Seguridad Urbana y genera todas las historias de usuario necesarias en formato "Como [perfil], [quiero] [para]." incluyendo entre 3 y 5 criterios de aceptación para cada historia.

## 6. Tickets de Trabajo

**Prompt 1:**

Vas a trabajar con cada una de las historias de usuario que me has dado y vas a hacer lo siguiente:

### Tecnologías de Desarrollo

1. Frontend: Angular
2. Backend: Node.js y Express.js
3. Base de datos: ORM Sequelize para PostgreSQL

- Calcular el número de tickets necesarios para cada historia y generar cada "Ticket de Trabajo".
- Un "Ticket de Trabajo Técnico" puede o no tener en cuenta las "Tecnologías de Desarrollo", tú lo decides según las tareas técnicas del ticket.
- Un "Ticket de Trabajo Técnico" debe ser del frontend o del backend, en el backend se incluyen tareas de base de datos. 
- Un "Ticket de Trabajo Técnico" debe incluir:
  - ID del Ticket:
  - Título del Ticket:
  - Descripción:
  - Criterios de aceptación:
  - Prioridad:
  - Estimación de esfuerzo (en horas):
  - Tareas Técnicas:
  - Notas

Inicia con los tickets de trabajo para la primera historia de usuario y espera hasta que te solicite la siguiente.