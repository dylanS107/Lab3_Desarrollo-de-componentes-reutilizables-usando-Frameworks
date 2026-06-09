# Práctica de Laboratorio: Aplicación Web con React y Vite

Este proyecto consiste en el desarrollo de una aplicación web de página única (SPA) estructurada de forma modular y eficiente. El objetivo principal de la práctica es implementar pantallas visuales interactivas que consumen datos en tiempo real desde un servicio externo, asegurando un diseño limpio, organizado y fácil de mantener.

---

## 📋 Características del Proyecto

* **Navegación Instantánea:** Cambio entre diferentes pantallas del sitio de forma inmediata, sin que el navegador web tenga que recargar la página por completo.
* **Diseño Modular:** Todo el contenido visual está dividido en piezas pequeñas y reutilizables que funcionan de manera independiente.
* **Estilos Aislados:** Cada sección del sitio cuenta con sus propias reglas de diseño protegidas, evitando que se alteren o afecten otros componentes por accidente.
* **Conexión Externa:** Obtención de información actualizada sobre personajes desde un servicio de datos público, optimizando las consultas para que ocurran solo una vez al mostrar la pantalla.
* **Estructura Escalable:** Código organizado de forma limpia en carpetas específicas para elementos visuales, vistas principales y archivos de comunicación.

---

## 📂 Estructura de Carpetas

La organización de los archivos dentro del proyecto se distribuye de la siguiente manera:

* `src/components/`: Contiene las piezas visuales pequeñas que se repiten en el sitio (Encabezado, Pie de página, Contenedor global, Tarjetas).
* `src/pages/`: Aloja las pantallas completas del sitio web accesibles desde la barra de direcciones.
* `src/services/`: Incluye el archivo encargado exclusivamente de solicitar y gestionar la información del exterior.
