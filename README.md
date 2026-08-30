[![License: MIT](https://img.shields.io/badge/License-MIT-blue.svg)](LICENSE)
---

# Plantilla Portafolio - Bootcamp Ciberseguridad

 Este es un sitio web optimizado para presentar tus proyectos, y caso de estudio de ciberseguridad.


 [Demo](https://wonderful-lebkuchen-5fec60.netlify.app/)

---

## Stack Tecnológico

Este proyecto está construido con:

* **Nuxt 3**: Framework de Vue para aplicaciones.
* **Vue 3**: Librería reactiva para la interfaz de usuario.
* **Tailwind CSS**: Framework de estilos CSS.
* **Tailwind Typography**: Plugin para dar un estilos automáticos al texto Markdown.
* **Nuxt Content**: Módulo para gestionar archivos Markdown como base de datos local.
* **@antfu/eslint-config**: Configuración estricta de ESLint para garantizar un código limpio y sin errores.
* **Bun**: Entorno de ejecución y gestor de paquetes ultra rápido.

---

## Cómo personalizar tu información

La plantilla está diseñada para que solo tengas que modificar dos archivos y una carpeta para tener tu portafolio listo:

### 1. Clonar el repositorio
   ```bash
   git clone https://github.com/caramelriv/plantilla-portafolio-bootcamp-ciberseguridad.git
   ```

### 2. Instalar dependencias
Asegúrate de tener instalado [Bun](https://bun.sh) en tu equipo, luego ejecuta los siguientes comandos en tu terminal:

```bash
bun install
```


### 3. Levantar el servidor local de desarrollo
```bash
bun run dev
```
> Abre tu navegador en [http://localhost:3000](http://localhost:3000) para ver tus cambios en tiempo real.

### 4. Personalizar datos generales y listado de proyectos
Para actualizar tu nombre, perfil, los proyectos de tu portafolio, edita el siguiente archivo:

📂 Ruta: `app/constants/portafolio.ts`

### 5. Contenido del caso de estudio (Markdown)
Para documentar a fondo tu proyecto principal, las herramientas que usaste y aprendizajes, edita el archivo Markdown:

📂 Ruta: `content/caso-estudio.md`

### 6. Iconos personalizados (SVG)
Si las tecnologías o herramientas de tu proyecto necesitan iconos que no vienen por defecto los puedes agregar a la siguiente carpeta:

📂 Ruta: `/icons`

Los íconos deben ser .svg

Puedes usar [Iconify](https://icon-sets.iconify.design/)

### 7. Generar el sitio estático para producción
```bash
bun run generate
```
> Esto creará una carpeta `.output/public` lista para ser subida de forma gratuita a plataformas como GitHub Pages, Netlify o Vercel.


---