# Frontend de VigilCity

Este proyecto fue generado con [Angular CLI](https://github.com/angular/angular-cli) versión 18.2.12.

## 🚀 Servidor de Desarrollo

Para iniciar el servidor de desarrollo, ejecuta:

```bash
npm run start
```

Navega a `http://localhost:4200/`. La aplicación se recargará automáticamente si cambias alguno de los archivos fuente.

## 🛠️ Configuración del API de Google Maps

Para utilizar Google Maps en tu aplicación, necesitas incluir la API de Google Maps en tu archivo `index.html`. Asegúrate de tener una clave de API válida y que esté configurada para permitir el acceso desde tu dirección IP.

1. Abre el archivo `src/index.html`.
2. Añade el siguiente script dentro de la etiqueta `<head>`:

   ```html
   <script async defer src="https://maps.googleapis.com/maps/api/js?key=TU_CLAVE_API&callback=initMap"></script>
   ```

   Reemplaza `TU_CLAVE_API` con tu clave de API de Google Maps.

## 🔐 Protección del Token

Asegúrate de que tu clave de API de Google Maps esté configurada para aceptar solicitudes solo desde direcciones IP específicas. Esto se puede hacer desde la consola de Google Cloud Platform, en la sección de restricciones de IP de la clave de API.

## 🏗️ Construcción

Para construir el proyecto, ejecuta:

```bash
npm run build
```

Los artefactos de construcción se almacenarán en el directorio `dist/`.

## 🧪 Pruebas Unitarias

Para ejecutar las pruebas unitarias a través de [Karma](https://karma-runner.github.io), utiliza:

```bash
ng test
```

## 🧪 Pruebas de Extremo a Extremo

Para ejecutar pruebas de extremo a extremo, primero necesitas agregar un paquete que implemente capacidades de pruebas de extremo a extremo.

## 📚 Ayuda Adicional

Para obtener más ayuda sobre el Angular CLI, usa `ng help` o consulta la [página de referencia de comandos y visión general del Angular CLI](https://angular.dev/tools/cli).

## Error de compilación

- Si encuentras un error de compilación, asegúrate de que el backend esté funcionando correctamente.
- Si el error persiste, asegúrate de que las variables de entorno estén correctamente configuradas en el archivo `.env`.
- Si se te presenta este error:

    "Se produjo un error. 
    Esta página no cargó bien Google Maps. Consulta la consola de JavaScript para obtener los detalles técnicos"

Asegúrate de que la clave de API de Google Maps esté correctamente configurada en el archivo `index.html`. y que esté configurada para permitir el acceso desde tu dirección IP, lo cual hoy 2024 se realiza mediante este enlace https://console.cloud.google.com/apis/credentials?project={TU_PROYECTO}