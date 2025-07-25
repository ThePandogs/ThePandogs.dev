import { defineConfig } from 'astro/config'
import tailwind from '@astrojs/tailwind'
import robotsTxt from 'astro-robots-txt'

export default defineConfig({
  site: 'https://ThePandogs.github.io', // URL completa
  base: '/ThePandogs.dev/',                       // Base raíz porque tu sitio está en la raíz del dominio
  integrations: [tailwind(), robotsTxt()],
})
