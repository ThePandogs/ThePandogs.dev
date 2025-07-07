import { defineConfig } from 'astro/config'
import tailwind from '@astrojs/tailwind'
import robotsTxt from 'astro-robots-txt'

export default defineConfig({
  site: 'https://thepandogs.dev', // Tu dominio propio sin slash final
  base: '/',                     // Base raíz porque tu sitio está en la raíz del dominio
  integrations: [tailwind(), robotsTxt()],
})
