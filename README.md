# CV - Portfolio Personal con Astro

Este proyecto es un sitio web de portafolio personal construido con Astro.js, diseñado para mostrar información profesional, habilidades y certificaciones.

## Tecnologías utilizadas

- [Astro.js](https://astro.build/) - Framework web de alto rendimiento
- [astro-eleventy-img](https://github.com/Princesseuh/astro-eleventy-img) - Optimización de imágenes
- [TypeScript](https://www.typescriptlang.org/) - Tipado estático para JavaScript
- [CSS3](https://developer.mozilla.org/es/docs/Web/CSS) - Estilos y animaciones
- [Fetch API](https://developer.mozilla.org/es/docs/Web/API/Fetch_API) - Integración con servicios externos

## Características destacadas

### Integración con Credly

El componente `Certificacion.astro` consume la API de Credly para obtener automáticamente las certificaciones del usuario y mostrarlas en una galería interactiva:

```typescript
// Obtener datos de certificaciones desde Credly
const response = await fetch('https://www.credly.com/users/michael-tomaylla/badges.json');
const data = await response.json();
```

### Categorización automática

Las certificaciones se clasifican automáticamente según el emisor:

```typescript
function getBrand(name) {
    if (name.toLowerCase().includes('microsoft')) {
        return 'microsoft';
    } else if (name.toLowerCase().includes('aws')) {
        return 'aws';
    }
    // ...otras categorías
```

## 🚀 Estructura del proyecto

# Welcome to [Astro](https://astro.build)

[![Open in StackBlitz](https://developer.stackblitz.com/img/open_in_stackblitz.svg)](https://stackblitz.com/github/withastro/astro/tree/latest/examples/basics)

> 🧑‍🚀 **Seasoned astronaut?** Delete this file. Have fun!

![basics](https://user-images.githubusercontent.com/4677417/186188965-73453154-fdec-4d6b-9c34-cb35c248ae5b.png)


## 🚀 Project Structure

Inside of your Astro project, you'll see the following folders and files:

```
/
├── public/
│   └── favicon.svg
├── src/
│   ├── assets/       # Recursos estáticos como fuentes e iconos
│   ├── components/   # Componentes reutilizables de Astro
│   ├── images/       # Imágenes y recursos visuales del sitio
│   ├── layouts/      # Plantillas de página
│   ├── pages/        # Páginas del sitio web
│   ├── styles/       # Archivos CSS y estilos
│   └── env.d.ts      # Definiciones de TypeScript
└── package.json
```

Astro looks for `.astro` or `.md` files in the `src/pages/` directory. Each page is exposed as a route based on its file name.

There's nothing special about `src/components/`, but that's where we like to put any Astro/React/Vue/Svelte/Preact components.

Any static assets, like images, can be placed in the `public/` directory.

## 🧞 Comandos

Todos los comandos se ejecutan desde la raíz del proyecto, desde una terminal:

| Comando                | Acción                                             |
| :--------------------- | :------------------------------------------------- |
| `npm install`          | Instala dependencias                               |
| `npm run dev`          | Inicia servidor de desarrollo en `localhost:4321`  |
| `npm run build`        | Construye el sitio para producción en `./dist/`    |
| `npm run preview`      | Vista previa local antes de desplegar              |
| `npm run astro ...`    | Ejecuta comandos CLI como `astro add`              |

## Personalización

Para personalizar el portafolio con tus propias certificaciones, modifica la URL de la API de Credly en `src/components/Certificacion.astro` con tu nombre de usuario:

```typescript
const response = await fetch('https://www.credly.com/users/TU-USUARIO/badges.json');
```

## Licencia

MIT

---

*Este proyecto es parte de mi portafolio personal como desarrollador web*

## 👀 Want to learn more?

Feel free to check [our documentation](https://docs.astro.build) or jump into our [Discord server](https://astro.build/chat).
