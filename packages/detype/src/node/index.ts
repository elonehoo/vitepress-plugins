import type MarkdownIt from 'markdown-it'
import type { PrettierOptions } from 'detype'
import { detypePlugin as rawDetypeMarkdownPlugin } from './markdownPlugin'
import { detypePlugin as rawDetypeVitePlugin } from './vitePlugin'
import { createContentMap } from './contentMap'

export const createDetypePlugin = () => {
  const contentMap = createContentMap()

  const detypeMarkdownPlugin = (
    md: MarkdownIt,
    prettierOptions: PrettierOptions,
  ) => rawDetypeMarkdownPlugin(md, prettierOptions, contentMap)
  const detypeVitePlugin = () => rawDetypeVitePlugin(contentMap)

  return {
    detypeMarkdownPlugin,
    detypeVitePlugin,
  }
}
