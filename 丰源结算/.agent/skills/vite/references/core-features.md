---
name: vite-features
description: Vite core features including glob imports, asset handling, and HMR
---

# Vite Core Features

## Glob Import

Import multiple modules dynamically:

```ts
// Eager load all .vue files in modules folder
const modules = import.meta.glob('./modules/*.vue', { eager: true })

// Lazy load (returns Promise)
const modules = import.meta.glob('./modules/*.vue')
for (const path in modules) {
  modules[path]().then((mod) => console.log(mod))
}

// With named imports
const modules = import.meta.glob('./modules/*.ts', {
  import: 'setup',
  eager: true,
})

// As raw strings
const modules = import.meta.glob('./modules/*.ts', {
  query: '?raw',
  import: 'default',
})

// Multiple patterns
const modules = import.meta.glob(['./dir/*.js', './another/*.js'])

// Negative patterns
const modules = import.meta.glob(['./dir/*.js', '!**/excluded.js'])
```

## Asset Handling

### Import as URL

```ts
import imgUrl from './img.png'
// imgUrl will be '/assets/img.2d8efhg.png' after build
```

### Special Queries

```ts
// Get URL
import imgUrl from './img.png?url'

// Get raw content
import content from './data.json?raw'

// Import as Web Worker
import Worker from './worker.js?worker'
const worker = new Worker()

// Inline as base64 data URL
import dataUrl from './small.svg?inline'
```

### Public Directory

Files in `/public` are served at root and copied unchanged to build output:

```html
<img src="/logo.png" />
```

## Environment Variables

### .env Files

```bash
# .env
VITE_API_URL=https://api.example.com
VITE_APP_TITLE=My App
```

Only `VITE_` prefixed variables are exposed to client code.

### Usage

```ts
console.log(import.meta.env.VITE_API_URL)
console.log(import.meta.env.MODE)        // 'development' or 'production'
console.log(import.meta.env.DEV)         // true in dev
console.log(import.meta.env.PROD)        // true in production
console.log(import.meta.env.SSR)         // true in SSR
console.log(import.meta.env.BASE_URL)    // base public path
```

### TypeScript Intellisense

```ts
// env.d.ts
/// <reference types="vite/client" />

interface ImportMetaEnv {
  readonly VITE_API_URL: string
  readonly VITE_APP_TITLE: string
}

interface ImportMeta {
  readonly env: ImportMetaEnv
}
```

### .env File Loading Order

1. `.env` - always loaded
2. `.env.local` - always loaded, gitignored
3. `.env.[mode]` - only for specified mode
4. `.env.[mode].local` - only for specified mode, gitignored

## HMR API

```ts
if (import.meta.hot) {
  // Accept self updates
  import.meta.hot.accept((newModule) => {
    // Handle updated module
  })

  // Accept dependency updates
  import.meta.hot.accept('./dep.js', (newDep) => {
    // Handle updated dep
  })

  // Cleanup side effects
  import.meta.hot.dispose((data) => {
    // Cleanup work
    data.someValue = state // Pass data to next version
  })

  // Persist data across updates
  import.meta.hot.data.count = import.meta.hot.data.count || 0

  // Full reload on failure
  import.meta.hot.decline()

  // Force page reload
  import.meta.hot.invalidate()
}
```

<!--
Source references:
- https://vite.dev/guide/features
- https://vite.dev/guide/assets
- https://vite.dev/guide/env-and-mode
- https://vite.dev/guide/api-hmr
-->
