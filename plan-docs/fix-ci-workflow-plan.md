# Fix CI Workflow Plan

## Goal

Fix ALL GitHub Actions CI failures for the React Native EV Models Picker package by addressing Yarn Berry 4 setup, lockfile synchronization, and TypeScript type resolution issues.

## Analysis

### Root Causes Identified

| Issue | Root Cause | Impact |
|-------|------------|--------|
| `--immutable` failure | Uncommitted changes to `package.json` and `yarn.lock` | CI cannot install dependencies |
| TypeScript module errors | Peer dependencies not in devDependencies (fixed locally but not committed) | `tsc --noEmit` fails |
| Corepack version mismatch | Order of operations - `corepack enable` must come before `actions/setup-node` with cache | Sporadic CI failures |

### Current State

1. **Local changes not committed:**
   - `package.json`: Added `react`, `react-native-dropdown-picker`, `react-native-safe-area-context` as devDependencies
   - `yarn.lock`: Updated with these new packages

2. **CI Workflow Issues:**
   - `corepack enable` happens after checkout but before setup-node without prepare step
   - No explicit corepack prepare to pin exact yarn version
   - Missing proper caching configuration

### Research Sources

- [Yarn Corepack Documentation](https://yarnpkg.com/corepack)
- [actions/setup-node Issue #899](https://github.com/actions/setup-node/issues/899)
- [Yarn Modern and GitHub Actions](https://blog.dylants.com/posts/20240129/yarn-modern-2-and-git-hub-actions)

## Solution

### Strategy: Optimized Corepack-based Setup

```
checkout → corepack enable → corepack prepare → setup-node (with cache) → yarn install --immutable
```

## File Changes

### Modified Files

1. `.github/workflows/ci.yml`
2. `.gitignore`

### Files to Commit (already modified locally)

1. `package.json`
2. `yarn.lock`

## Implementation Steps

### Step 1: Update CI Workflow

**File:** `.github/workflows/ci.yml`

**Changes:**
- Reorder steps: `corepack enable` and `corepack prepare` BEFORE `setup-node`
- Add yarn caching to `setup-node`
- Use consistent step naming

**New Content:**

```yaml
name: CI

on:
  push:
    branches: [main]
  pull_request:
    branches: [main]

jobs:
  test:
    runs-on: ubuntu-latest

    strategy:
      matrix:
        node-version: [18, 20, 22]

    steps:
      - name: Checkout repository
        uses: actions/checkout@v4

      - name: Enable Corepack
        run: corepack enable

      - name: Prepare Yarn version
        run: corepack prepare yarn@4.12.0 --activate

      - name: Setup Node.js ${{ matrix.node-version }}
        uses: actions/setup-node@v4
        with:
          node-version: ${{ matrix.node-version }}
          cache: 'yarn'

      - name: Install dependencies
        run: yarn install --immutable

      - name: Type check
        run: yarn tsc --noEmit

      - name: Run tests
        run: yarn test

  build:
    runs-on: ubuntu-latest
    needs: test

    steps:
      - name: Checkout repository
        uses: actions/checkout@v4

      - name: Enable Corepack
        run: corepack enable

      - name: Prepare Yarn version
        run: corepack prepare yarn@4.12.0 --activate

      - name: Setup Node.js
        uses: actions/setup-node@v4
        with:
          node-version: 20
          cache: 'yarn'

      - name: Install dependencies
        run: yarn install --immutable

      - name: Build
        run: yarn build
```

### Step 2: Update .gitignore

**File:** `.gitignore`

**Change:** Add `.yarn/install-state.gz` to ignored files explicitly (it changes on every install and should not be committed).

**Current relevant section:**
```
# Yarn
.yarn/*
!.yarn/patches
!.yarn/plugins
!.yarn/releases
!.yarn/sdks
!.yarn/versions
.pnp.*
```

**New section:**
```
# Yarn
.yarn/*
!.yarn/patches
!.yarn/plugins
!.yarn/releases
!.yarn/sdks
!.yarn/versions
.pnp.*
.yarn/install-state.gz
```

Note: The current `.gitignore` already excludes `.yarn/*` then un-excludes specific subdirectories. The `install-state.gz` is already implicitly ignored by `.yarn/*`. No change needed here.

### Step 3: Commit Local Changes

The following files have been modified locally and must be committed:

1. `package.json` - Added peer dependencies as devDependencies:
   - `react: ^19.0.0`
   - `react-native-dropdown-picker: ^5.4.6`
   - `react-native-safe-area-context: ^5.4.0`

2. `yarn.lock` - Updated with new dependency resolutions

### Step 4: Verify Installation Works Locally

Run the following to verify the setup:
```bash
yarn install --immutable
yarn tsc --noEmit
yarn test
```

## Summary of All Changes

| File | Change Type | Description |
|------|-------------|-------------|
| `.github/workflows/ci.yml` | Modify | Add corepack prepare step, add yarn caching |
| `package.json` | Commit existing changes | Peer deps added as devDependencies |
| `yarn.lock` | Commit existing changes | Updated lockfile |

## Verification Checklist

- [ ] `corepack enable` runs before `setup-node`
- [ ] `corepack prepare yarn@4.12.0 --activate` pins exact version
- [ ] `cache: 'yarn'` added to `setup-node` for faster CI
- [ ] `package.json` and `yarn.lock` committed with devDependencies
- [ ] `yarn install --immutable` succeeds locally
- [ ] `yarn tsc --noEmit` succeeds locally
- [ ] `yarn test` succeeds locally
