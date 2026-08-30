# Plantilla Portafolio - Bootcamp Ciberseguridad

 Este es un sitio web estático optimizado para presentar tus proyectos, y casos de estudio.

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

### 1. Datos Generales y Listado de Proyectos
Para actualizar tu nombre, perfil, los proyectos de tu portafolio, edita el siguiente archivo:

📂 Ruta: `app/constants/portafolio.ts`

### 2. Contenido del Caso de Estudio (Markdown)
Para documentar a fondo tu proyecto principal, las herramientas que usaste y aprendizajes, edita el archivo Markdown:

📂 Ruta: `content/caso-estudio.md`

### 3. Iconos Personalizados (SVG)
Si las tecnologías o herramientas de tu proyecto necesitan iconos que no vienen por defecto los puedes agregar a la siguiente carpeta:

📂 Ruta: `/icons`

Los íconos deben ser .svg

Puedes usar [Iconify](https://icon-sets.iconify.design/)

---

## Comandos de Desarrollo

Asegúrate de tener instalado [Bun](https://bun.sh) en tu equipo, luego ejecuta los siguientes comandos en tu terminal:

### 1. Instalar dependencias
```bash
bun install
```

### 2. Levantar el servidor local de desarrollo
```bash
bun run dev
```
> Abre tu navegador en [http://localhost:3000](http://localhost:3000) para ver tus cambios en tiempo real.

### 3. Generar el sitio estático para producción
```bash
bun run generate
```
> Esto creará una carpeta `.output/public` lista para ser subida de forma gratuita a plataformas como GitHub Pages, Netlify o Vercel.
