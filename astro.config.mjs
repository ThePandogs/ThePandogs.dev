import { defineConfig } from 'astro/config'
import tailwind from '@astrojs/tailwind'
import robotsTxt from 'astro-robots-txt'

export default defineConfig({
  site: 'https://ThePandogs.github.io/ThePandogs.dev/', // URL completa
  base: '',                       // Base raíz porque tu sitio está en la raíz del dominio
  integrations: [tailwind(), robotsTxt()],
})
