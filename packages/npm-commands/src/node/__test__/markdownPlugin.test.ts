import MarkdownIt from 'markdown-it'
import { expect, test } from 'vitest'
import dedent from 'ts-dedent'
import { npmCommandsPlugin } from '../markdownPlugin'

const setup = () => {
  const md = MarkdownIt()
  md.use(npmCommandsPlugin)
  return md
}

const s = '```'

test('render manual correctly', () => {
  const md = setup()
  const result = md.render(dedent`
    ${s}
    npm i vite // [!=npm npm]
    yarn add vite // [!=npm yarn]
    pnpm add vite // [!=npm pnpm]
    ${s}
  `)
  expect(result).toMatchSnapshot()
})

test('render auto correctly', () => {
  const md = setup()
  const result = md.render(dedent`
    ${s}
    npm i // [!=npm auto]
    ${s}
  `)
  expect(result).toMatchSnapshot()
})

test('escape hatch', () => {
  const md = setup()
  const result = md.render(dedent`
    ${s}{----npm-disable}
    npm i // [!=npm auto]
    ${s}
  `)
  expect(result).toMatchSnapshot()
})
