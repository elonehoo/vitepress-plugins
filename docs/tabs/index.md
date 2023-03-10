---
title: vitepress-plugin-tabs
outline: deep
---

# vitepress-plugin-tabs

> A plugin that adds syntax for showing content in tabs.

[![NPM version](https://img.shields.io/npm/v/@elonehoo/vitepress-plugin-tabs?color=42d392&label=)](https://www.npmjs.com/package/@elonehoo/vitepress-plugin-tabs)

## Installation

```sh
npm i -D @elonehoo/vitepress-plugin-tabs // [!=npm auto]
```

## Usage

After installing the plugin, you'll need to edit both [App Config](https://vitepress.vuejs.org/config/app-configs) and [Theme Config](https://vitepress.vuejs.org/config/theme-configs).

```ts
// .vitepress/config.ts
import { defineConfig } from 'vitepress'
import { tabsMarkdownPlugin } from '@elonehoo/vitepress-plugin-tabs'

export default defineConfig({
  markdown: {
    config(md) {
      md.use(tabsMarkdownPlugin)
    }
  }
})
```

```ts
// .vitepress/theme/index.ts
import Theme from 'vitepress/theme'
import { enhanceAppWithTabs } from '@elonehoo/vitepress-plugin-tabs/client'

export default {
  ...Theme,
  enhanceApp({ app }) {
    enhanceAppWithTabs(app)
  }
}
```

## Syntax

### Tabs with non-shared selection state

```md
:::=tabs
::a
a content

::b
b content
:::

:::=tabs
::a
a content 2

::b
b content 2
:::
```

:::=tabs
::a
a content

::b
b content
:::

:::=tabs
::a
a content 2

::b
b content 2
:::

### Tabs with shared selection state

```md
:::=tabs=ab
::a
a content

::b
b content
:::

:::=tabs=ab
::a
a content 2

::b
b content 2
:::
```

:::=tabs=ab
::a
a content

::b
b content
:::

:::=tabs=ab
::a
a content 2

::b
b content 2
:::
