// src/plugins/vuetify.js
import 'vuetify/styles'
import { createVuetify } from 'vuetify'
import * as components from 'vuetify/components'
import * as directives from 'vuetify/directives'
import { createBlueTheme } from '@/utils/palette' // palette helper (chroma-js)

export default createVuetify({
  components,
  directives,
  theme: {
    defaultTheme: 'light',
    themes: {
      // use the darkest blue (#0D47A1) as primary by default
      light: {
        dark: false,
        colors: createBlueTheme(undefined, 4)
      }
    }
  }
})