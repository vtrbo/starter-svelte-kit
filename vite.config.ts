import { defineConfig } from 'vite'
import { sveltekit } from '@sveltejs/kit/vite'
import UnoCss from 'unocss/vite'
import UnpluginIcons from 'unplugin-icons/vite'
import { collectionIcons } from './src/lib/icons'

export default defineConfig({
  plugins: [
    sveltekit(),
    UnoCss(),
    UnpluginIcons({
      compiler: 'svelte',
      scale: 1.2,
      defaultClass: 'svg-icon',
      defaultStyle: 'display: inline-block; vertical-align: middle;',
      customCollections: {
        vtr: collectionIcons(),
      },
    }),
  ],
  server: {
    port: 9528,
    host: true,
    open: true,
  },
})
