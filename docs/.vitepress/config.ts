import { defineConfig } from 'vitepress'
import { createDetypePlugin } from '@elonehoo/vitepress-plugin-detype'
import { tabsMarkdownPlugin } from '@elonehoo/vitepress-plugin-tabs'
import { npmCommandsMarkdownPlugin } from '@elonehoo/vitepress-plugin-npm-commands'
import { version } from '../../package.json'
import {
  description,
  discord,
  font,
  github,
  name,
  releases,
  twitter,
} from './meta'

const { detypeMarkdownPlugin, detypeVitePlugin } = createDetypePlugin()

export default defineConfig({
  lang: 'en-US',
  title: name,
  description,
  head: [
    ['meta', { name: 'theme-color', content: '#ffffff' }],
    ['link', { rel: 'icon', href: '/logo.svg', type: 'image/svg+xml' }],
    ['meta', { property: 'og:title', content: name }],
    ['meta', { property: 'og:description', content: description }],
    ['meta', { name: 'twitter:title', content: name }],
    ['meta', { name: 'twitter:description', content: description }],
    ['meta', { name: 'twitter:card', content: 'summary_large_image' }],
    ['link', { href: font, rel: 'stylesheet' }],
    ['link', { rel: 'mask-icon', href: '/logo.svg', color: '#ffffff' }],
  ],
  lastUpdated: true,
  markdown: {
    config(md) {
      md.use(tabsMarkdownPlugin)
      md.use(detypeMarkdownPlugin)
      md.use(npmCommandsMarkdownPlugin)
    },
    theme: {
      light: 'vitesse-light',
      dark: 'vitesse-dark',
    },
  },
  themeConfig: {
    logo: '/logo.svg',
    editLink: {
      pattern: 'https://github.com/elonehoo/vitepress-plugins/tree/main/docs/:path',
      text: 'Suggest changes to this page',
    },
    socialLinks: [
      { icon: 'twitter', link: twitter },
      { icon: 'discord', link: discord },
      { icon: 'github', link: github },
    ],
    footer: {
      message: 'Released under the MIT License.',
      copyright: 'Copyright © 2023-PRESENT Elone Hoo',
    },
    nav: [
      { text: 'detype', link: '/detype:/' },
      { text: 'tabs', link: '/tabs/' },
      { text: 'npm-commands', link: '/npm-commands/' },
      {
        text: `v${version}`,
        items: [
          {
            text: 'Release Notes',
            link: releases,
          },
        ],
      },
    ],
  },
  vite: {
    plugins: [detypeVitePlugin()]
  }
})
