import Theme from 'vitepress/theme'
import { enhanceAppWithTabs } from '@elonehoo/vitepress-plugin-tabs/client'
import './styles/vars.css'

export default {
  ...Theme,
  enhanceApp({ app }) {
    enhanceAppWithTabs(app)
  }
}
