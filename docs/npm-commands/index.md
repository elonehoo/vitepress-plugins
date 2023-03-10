---
title: vitepress-plugin-npm-commands
---

# vitepress-plugin-npm-commands

> A plugin that adds syntax for showing `npm`, `yarn`, `pnpm` commands in tabs.

[![NPM version](https://img.shields.io/npm/v/@elonehoo/vitepress-plugin-npm-commands?color=42d392&label=)](https://www.npmjs.com/package/@elonehoo/vitepress-plugin-npm-commands)

## Installation

```sh
npm i -D @elonehoovitepress-plugin-npm-commands @elonehoovitepress-plugin-tabs // [!=npm auto]
```

`vitepress-plugin-npm-commands` requires [`vitepress-plugin-tabs`](../tabs/) to be installed.

## Usage

After installing the plugin, you'll need to edit both [App Config](https://vitepress.vuejs.org/config/app-configs) and [Theme Config](https://vitepress.vuejs.org/config/theme-configs).

```ts
// .vitepress/config.ts
import { defineConfig } from 'vitepress'
import { tabsMarkdownPlugin } from '@elonehoo/vitepress-plugin-tabs'
import { npmCommandsMarkdownPlugin } from '@elonehoo/vitepress-plugin-npm-commands'

export default defineConfig({
  markdown: {
    config(md) {
      md.use(tabsMarkdownPlugin)
      md.use(npmCommandsMarkdownPlugin)
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

### Auto conversion

Adding the `// [!=npm auto]` comment on a line will convert that npm command to other package manager commands.
Note that this is a simple string replacement and only works with simple cases.

````md{----npm-disable}
```sh
npm i // [!=npm auto]
npm run build // [!=npm auto]
npm run test // [!=npm auto]
```
````

```sh
npm i // [!=npm auto]
npm run build // [!=npm auto]
npm run test // [!=npm auto]
```

### Manual declaration

Adding the `// [!=npm npm]`/`// [!=npm yarn]`/`// [!=npm pnpm]` comment on a line will limit that line to be shown only in that package manager tab.

````md{2-4 ----npm-disable}
```sh{1}
npx degit user/project my-project // [!=npm npm]
yarn dlx degit user/project my-project // [!=npm yarn]
pnpm dlx degit user/project my-project // [!=npm pnpm]
cd my-project

npm install // [!=npm auto]
npm run dev // [!=npm auto]
```
````

```sh{1}
npx degit user/project my-project // [!=npm npm]
yarn dlx degit user/project my-project // [!=npm yarn]
pnpm dlx degit user/project my-project // [!=npm pnpm]
cd my-project

npm install // [!=npm auto]
npm run dev // [!=npm auto]
```
