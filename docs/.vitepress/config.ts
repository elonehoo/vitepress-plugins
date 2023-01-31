import { defineConfig } from 'vitepress'
import { createDetypePlugin } from '@elonehoo/vitepress-plugin-detype'
import { tabsMarkdownPlugin } from '@elonehoo/vitepress-plugin-tabs'
import { npmCommandsMarkdownPlugin } from '@elonehoo/vitepress-plugin-npm-commands'

const { detypeMarkdownPlugin, detypeVitePlugin } = createDetypePlugin()

export default defineConfig({
  title: 'Vitepress Plugins',
  markdown: {
    config(md) {
      md.use(tabsMarkdownPlugin)
      md.use(detypeMarkdownPlugin)
      md.use(npmCommandsMarkdownPlugin)
    }
  },
  vite: {
    plugins: [detypeVitePlugin()]
  }
})
