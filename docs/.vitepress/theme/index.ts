import DefaultTheme from 'vitepress/theme'
import './custom.css'
import BlockBuilder from './BlockBuilder.vue'

export default {
  ...DefaultTheme,
  enhanceApp({ app }) {
    app.component('BlockBuilder', BlockBuilder)
  }
}
