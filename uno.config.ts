import { defineConfig, presetAttributify, presetIcons, presetUno, transformerDirectives, transformerVariantGroup } from 'unocss'
import extractorSvelte from '@unocss/extractor-svelte'

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
      scale: 1,
      extraProperties: {
        'display': 'inline-block',
        'vertical-align': 'middle',
      },
      collections: {},
    }),
    presetAttributify(),
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
  shortcuts: {
    fxc: 'flex justify-center items-center',
    fxs: 'flex justify-center items-start',
    fxe: 'flex justify-center items-end',
  },
})
