import Theme from 'vitepress/theme'
import { enhanceAppWithTabs } from '@elonehoo/vitepress-plugin-tabs/client'

export default {
  ...Theme,
  enhanceApp({ app }) {
    enhanceAppWithTabs(app)
  }
}
