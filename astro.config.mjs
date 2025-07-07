import { defineConfig } from 'astro/config'
import tailwind from '@astrojs/tailwind'
import robotsTxt from 'astro-robots-txt'
import staticAdapter from '@astrojs/adapter-static'

export default defineConfig({
  site: 'https://ThePandogs.github.io/ThePandogs.dev/', // URL completa con repo
  base: '/ThePandogs.dev/',                             // Nombre del repo con barra
  integrations: [tailwind(), robotsTxt()],
  adapter: staticAdapter(),
})
