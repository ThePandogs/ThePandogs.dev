# thepandogs.dev

Portfolio personal de **Carlos Fraile (ThePandogs)** — desarrollador de software en Vigo.

🔗 https://thepandogs.github.io/ThePandogs.dev/

## Stack

- [Astro 7](https://astro.build) — sitio estático, sin JavaScript de framework en cliente
- [Tailwind CSS 4](https://tailwindcss.com) vía `@tailwindcss/vite`
- Tipografías Geist y Geist Mono
- Imágenes optimizadas con `astro:assets` (WebP, varios tamaños)
- Despliegue automático en GitHub Pages con GitHub Actions

## Desarrollo

Requiere Node.js 22.12+ y pnpm.

```bash
pnpm install
pnpm dev       # http://localhost:4321/ThePandogs.dev/
pnpm build     # astro check + build en dist/
pnpm preview
```

## Editar contenido

Todo el texto (perfil, experiencia, proyectos y stack) vive en [`src/data/profile.ts`](src/data/profile.ts).
Las capturas de proyectos van en `src/assets/projects/` y los GIF de previsualización en `public/projects/`.

## Licencia

El código está bajo licencia [MIT](LICENSE). Los textos, la fotografía y las capturas son © Carlos Fraile y no están incluidos en esa licencia.
