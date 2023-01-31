import MarkdownIt from 'markdown-it'
import { expect, test } from 'vitest'
import dedent from 'ts-dedent'
import { tabsPlugin } from '../markdownPlugin'

const setup = () => {
  const md = MarkdownIt()
  md.use(tabsPlugin)
  return md
}

test('render correctly', () => {
  const md = setup()
  const result = md.render(dedent`
    :::=tabs
    ::a
    a
    ::b
    b
    :::
  `)
  expect(result).toMatchSnapshot()
})
