# Architecture Plan: Enable TypeScript "TS" Indicator on npm

**Package:** `@coawazie/react-native-ev-models-picker`
**Date:** 2026-01-27
**Status:** Ready for Implementation

---

## 1. Goal

Enable the TypeScript "TS" blue box indicator on npm for the package by configuring proper TypeScript declaration file generation and npm package metadata.

**Acceptance Criteria:**
- [ ] `npm run build` generates `.d.ts` declaration files in `dist/`
- [ ] `package.json` contains `"types": "dist/index.d.ts"` field
- [ ] React Native bundlers (Metro) can still resolve source files
- [ ] After npm publish, the TypeScript "TS" indicator appears on npm page
- [ ] Package works correctly when installed in a consuming project

---

## 2. Analysis and Research

### Root Cause Analysis

| Issue | Current State | Required State |
|-------|--------------|----------------|
| `noEmit` | `true` (blocks ALL output) | `false` (enable output) |
| `types` field | Missing | Points to `dist/index.d.ts` |
| `main` field | `index.ts` (source) | `dist/index.js` (compiled) |
| `outDir` | Not set | `./dist` |
| `.gitignore` | Missing at root | Excludes `dist/` |
| `.npmignore` | Missing | Excludes dev files |

### Reference Package Pattern

`react-native-safe-area-context` uses:
```json
{
  "main": "lib/commonjs/index.js",
  "types": "lib/typescript/src/index.d.ts",
  "react-native": "src/index.tsx"
}
```

Our simplified approach:
```json
{
  "main": "dist/index.js",
  "types": "dist/index.d.ts",
  "react-native": "index.ts"
}
```

---

## 3. Proposed Solution

### Directory Structure (After Implementation)

```
react-native-ev-models-picker/
├── index.ts                    # Source entry point
├── src/                        # Source files
│   ├── EVSelector.tsx
│   ├── helpers/
│   └── typesEnumsInterfacesConsts/
├── dist/                       # Compiled output (NEW)
│   ├── index.js
│   ├── index.d.ts
│   ├── index.d.ts.map
│   └── src/
│       ├── EVSelector.js
│       ├── EVSelector.d.ts
│       └── ...
├── .gitignore                  # NEW - excludes dist/
├── .npmignore                  # NEW - excludes dev files
├── tsconfig.json               # MODIFIED
└── package.json                # MODIFIED
```

---

## 4. File Changes

### Modified Files

#### 4.1 tsconfig.json

**Before:**
```json
{
  "compilerOptions": {
    "noEmit": true,
    "declaration": true,
    "removeComments": true
    // ... other options
  },
  "exclude": ["node_modules", "babel.config.js", "metro.config.js", "jest.config.js"]
}
```

**After:**
```json
{
  "extends": "@tsconfig/react-native/tsconfig.json",
  "compilerOptions": {
    "allowSyntheticDefaultImports": true,
    "sourceMap": true,
    "esModuleInterop": true,
    "strict": true,
    "noEmit": false,
    "outDir": "./dist",
    "rootDir": ".",
    "noUnusedParameters": true,
    "noUnusedLocals": true,
    "noUncheckedIndexedAccess": true,
    "noPropertyAccessFromIndexSignature": true,
    "noImplicitReturns": true,
    "noFallthroughCasesInSwitch": true,
    "experimentalDecorators": true,
    "module": "commonjs",
    "moduleResolution": "node",
    "target": "es6",
    "declaration": true,
    "declarationMap": true,
    "resolveJsonModule": true,
    "jsx": "react-native",
    "lib": ["dom", "esnext"]
  },
  "include": ["index.ts", "src/**/*"],
  "exclude": ["node_modules", "dist", "babel.config.js", "metro.config.js", "jest.config.js"]
}
```

**Key Changes:**
- `noEmit: false` - Enable output
- `outDir: "./dist"` - Output directory
- `rootDir: "."` - Path resolution root
- `declarationMap: true` - IDE navigation support
- Removed `removeComments` - Preserve JSDoc
- Added `jsx: "react-native"`
- Added `include` array
- Added `dist` to exclude

---

#### 4.2 package.json

**Before:**
```json
{
  "main": "index.ts",
  "scripts": {
    "test": "test",
    "build": "tsc",
    "prepublishOnly": "npm run build"
  }
}
```

**After:**
```json
{
  "name": "@coawazie/react-native-ev-models-picker",
  "version": "0.1.28",
  "description": "A package to select EV makes, models, years, and trims from a large collection of options",
  "main": "dist/index.js",
  "types": "dist/index.d.ts",
  "react-native": "index.ts",
  "source": "index.ts",
  "files": ["dist", "src", "index.ts"],
  "scripts": {
    "test": "jest",
    "build": "tsc",
    "prepublishOnly": "npm run build",
    "clean": "rm -rf dist"
  },
  "peerDependencies": {
    "react": "*",
    "react-native": "*"
  }
  // ... rest unchanged
}
```

**Key Changes:**
- `main` -> `dist/index.js`
- Added `types: "dist/index.d.ts"`
- Added `react-native: "index.ts"` (for Metro bundler)
- Added `source: "index.ts"`
- Added `files` array
- Added `peerDependencies`
- Fixed `test` script
- Added `clean` script

---

### New Files

#### 4.3 .gitignore

```gitignore
# Dependencies
node_modules/

# Build output
dist/

# IDE
.idea/
.vscode/
*.swp
*.swo

# OS
.DS_Store
Thumbs.db

# Logs
*.log
npm-debug.log*
yarn-debug.log*
yarn-error.log*

# Testing
coverage/

# Misc
*.tgz
```

---

#### 4.4 .npmignore

```npmignore
# Source control
.git/
.github/
.gitignore

# IDE
.idea/
.vscode/

# Build config
tsconfig.json
jest.config.js
babel.config.js
metro.config.js

# Development
.yarn/
.yarnrc.yml
yarn.lock

# Misc
*.log
.DS_Store
coverage/
```

---

## 5. New Types

None required.

---

## 6. External Dependencies

None required.

---

## 7. Implementation Todo List

| # | Task | Description |
|---|------|-------------|
| 1 | Update tsconfig.json | Change noEmit, add outDir, rootDir, declarationMap, jsx, include, exclude |
| 2 | Update package.json | Add main, types, react-native, source, files, peerDependencies, fix scripts |
| 3 | Create .gitignore | Add standard Node.js ignores including dist/ |
| 4 | Create .npmignore | Exclude dev files from npm package |
| 5 | Build and verify | Run build, verify dist/ structure |
| 6 | Test locally | Run npm pack, verify tarball contents |
| 7 | Publish and verify | Bump version, publish, check npm for TS indicator |

---

## 8. Verification Checklist

After implementation:

- [ ] `npm run build` completes without errors
- [ ] `dist/index.d.ts` exists
- [ ] `dist/index.js` exists
- [ ] `dist/src/EVSelector.d.ts` exists
- [ ] `package.json` has `"types": "dist/index.d.ts"`
- [ ] `package.json` has `"react-native": "index.ts"`
- [ ] `.gitignore` excludes `dist/`
- [ ] `npm pack` includes dist/ but excludes node_modules, .git, etc.
- [ ] After publish, npm shows "TS" TypeScript indicator
- [ ] Package installs and works in a consuming React Native project

---

## 9. Notes

### Why This Approach Over react-native-builder-bob

While `react-native-builder-bob` is the industry standard for React Native packages, it adds:
- Additional dev dependency
- More complex build configuration
- CommonJS + ESM + TypeScript output

For this package, the simple TypeScript-only approach is sufficient because:
1. Package is React Native only (no Node.js server usage)
2. Metro bundler handles source files directly via `react-native` field
3. Only TypeScript declarations are needed for npm indicator

### Future Consideration

If the package grows or needs better tree-shaking support, consider migrating to `react-native-builder-bob`:
```bash
npx react-native-builder-bob@latest init
```
