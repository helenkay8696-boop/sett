---
name: migration-to-pnpm
description: Migrating from npm or Yarn to pnpm with minimal friction
---

# Migration to pnpm

Guide for migrating existing projects from npm or Yarn to pnpm.

## Quick Migration

### From npm
```bash
# Remove npm lockfile and node_modules
rm -rf node_modules package-lock.json

# Install with pnpm
pnpm install
```

### From Yarn
```bash
# Remove yarn lockfile and node_modules
rm -rf node_modules yarn.lock

# Install with pnpm
pnpm install
```

### Import Existing Lockfile
pnpm can import existing lockfiles:

```bash
# Import from npm or yarn lockfile
pnpm import

# This creates pnpm-lock.yaml from:
# - package-lock.json (npm)
# - yarn.lock (yarn)
# - npm-shrinkwrap.json (npm)
```

## Handling Common Issues

### Phantom Dependencies
pnpm is strict about dependencies. If code imports a package not in `package.json`, it will fail.

**Problem:**
```js
// Works with npm (hoisted), fails with pnpm
import lodash from 'lodash' // Not in dependencies, installed by another package
```

**Solution:** Add missing dependencies explicitly:
```bash
pnpm add lodash
```

### Missing Peer Dependencies
pnpm reports peer dependency issues by default.

**Option 1:** Let pnpm auto-install:
```ini
# .npmrc (default in pnpm v8+)
auto-install-peers=true
```

**Option 2:** Install manually:
```bash
pnpm add react react-dom
```

**Option 3:** Suppress warnings if acceptable:
```json
{
  "pnpm": {
    "peerDependencyRules": {
      "ignoreMissing": ["react"]
    }
  }
}
```

### Symlink Issues
Some tools don't work with symlinks. Use hoisted mode:

```ini
# .npmrc
node-linker=hoisted
```

Or hoist specific packages:

```ini
public-hoist-pattern[]=*eslint*
public-hoist-pattern[]=*babel*
```

### Native Module Rebuilds
If native modules fail, try:

```bash
# Rebuild all native modules
pnpm rebuild

# Or reinstall
rm -rf node_modules
pnpm install
```

## Monorepo Migration

### From npm Workspaces
1. Create `pnpm-workspace.yaml`:
   ```yaml
   packages:
     - 'packages/*'
   ```

2. Update internal dependencies to use workspace protocol:
   ```json
   {
     "dependencies": {
       "@myorg/utils": "workspace:^"
     }
   }
   ```

3. Install:
   ```bash
   rm -rf node_modules packages/*/node_modules package-lock.json
   pnpm install
   ```

### From Yarn Workspaces
1. Remove Yarn-specific files:
   ```bash
   rm yarn.lock .yarnrc.yml
   rm -rf .yarn
   ```

2. Create `pnpm-workspace.yaml` matching `workspaces` in package.json

3. Convert workspace references:
   ```json
   // From Yarn
   "@myorg/utils": "*"

   // To pnpm
   "@myorg/utils": "workspace:*"
   ```

## CI/CD Migration
Update CI configuration:

```yaml
# Before (npm)
- run: npm ci

# After (pnpm)
- uses: pnpm/action-setup@v4
- run: pnpm install --frozen-lockfile
```

Add to `package.json` for Corepack:
```json
{
  "packageManager": "pnpm@9.0.0"
}
```

## Rollback Plan
If migration causes issues:

```bash
# Remove pnpm files
rm -rf node_modules pnpm-lock.yaml pnpm-workspace.yaml

# Restore npm
npm install

# Or restore Yarn
yarn install
```

Keep old lockfile in git history for easy rollback.

<!-- 
Source references:
- https://pnpm.io/installation
- https://pnpm.io/cli/import
- https://pnpm.io/limitations
-->
