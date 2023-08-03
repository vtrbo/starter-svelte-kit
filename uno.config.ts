import { defineConfig, presetIcons, presetUno, transformerDirectives, transformerVariantGroup } from 'unocss'
import extractorSvelte from '@unocss/extractor-svelte'
import { collectionIcons } from './src/lib/icons'

export default defineConfig({
  extractors: [
    extractorSvelte(),
  ],
  presets: [
    presetUno({
      dark: 'class',
    }),
    presetIcons({
      warn: true,
      scale: 1.2,
      extraProperties: {
        'display': 'inline-block',
        'vertical-align': 'middle',
      },
      collections: {
        vtr: collectionIcons(),
      },
    }),
  ],
  transformers: [
    transformerDirectives(),
    transformerVariantGroup(),
  ],
  variants: [
    (matcher) => {
      if (!matcher.startsWith('im-'))
        return matcher
      return {
        matcher: matcher.slice(3),
        body: (body) => {
          body.forEach(v => v[1] && (v[1] += ' !important'))
          return body
        },
      }
    },
  ],
  theme: {
    colors: {},
  },
  shortcuts: {},
})
