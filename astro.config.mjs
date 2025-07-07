import { defineConfig } from 'astro/config'
import tailwind from '@astrojs/tailwind'
import robotsTxt from 'astro-robots-txt'

export default defineConfig({
  site: 'https://ThePandogs.github.io/', // URL completa
  base: '/',                             // nombre del repo con /
  integrations: [tailwind(), robotsTxt()],
})

