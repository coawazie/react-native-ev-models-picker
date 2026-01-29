# Testing Strategy Implementation Plan

## react-native-ev-models-picker

**Created**: 2026-01-27
**Status**: Ready for Implementation

---

## 1. Goal

Design and implement a comprehensive testing strategy for the React Native EV models picker package, targeting 80% code coverage with tests for helper functions, data integrity validation, and React Native component testing.

---

## 2. Analysis & Research

### Current State
- Package has Jest 30.2.0 in devDependencies but no test configuration
- Test script is a placeholder: `"test": "test"`
- No `__tests__/` folder exists
- No jest.config.js exists

### Package Structure Analysis
- **Helper Functions (Pure, Easiest to Test)**:
  - `getMakeModels.ts` - Returns models for a given car make
  - `getModelYears.ts` - Returns years for a given make/model
  - `getYearTrims.ts` - Returns trims for a given make/model/year
  - `translations.ts` - Returns UI labels for supported languages

- **Constants (Data Integrity Testing)**:
  - `carMakeConstants.ts` - 48 car makes + "Others" + "none"
  - `carModelsInputItems.ts` - All models, years, and trims data

- **React Native Component**:
  - `EVSelector.tsx` - Main component with 4 cascading dropdowns

### Research Findings
- React 19+ requires `@testing-library/react-native` (react-test-renderer deprecated)
- Jest 30 upgraded jsdom from 21 to 26
- Need `jest-environment-jsdom` for component tests
- TypeScript support via `ts-jest` or `babel-jest`

**Sources**:
- [Jest Official - Testing React Native Apps](https://jestjs.io/docs/tutorial-react-native)
- [Testing Library Setup](https://testing-library.com/docs/react-native-testing-library/setup/)
- [Jest 30 Release Notes](https://jestjs.io/blog/2025/06/04/jest-30)
- [@testing-library/react-native npm](https://www.npmjs.com/package/@testing-library/react-native)

---

## 3. Proposed Solution

### Architecture Overview

```
react-native-ev-models-picker/
├── __tests__/                          # Test root (mirrors src/)
│   ├── helpers/
│   │   ├── getMakeModels.test.ts       # Pure function tests
│   │   ├── getModelYears.test.ts       # Pure function tests
│   │   ├── getYearTrims.test.ts        # Pure function tests
│   │   └── translations.test.ts        # Pure function tests
│   ├── constants/
│   │   ├── carMakeConstants.test.ts    # Data integrity tests
│   │   └── carModelsInputItems.test.ts # Data integrity tests
│   ├── EVSelector.test.tsx             # Component tests
│   └── __mocks__/
│       ├── react-native-dropdown-picker.tsx
│       └── react-native-safe-area-context.tsx
├── jest.config.js                      # Jest configuration
├── jest.setup.ts                       # Jest setup file
└── package.json                        # Updated with test scripts
```

### Testing Strategy by Priority

| Priority | Module | Test Type | Complexity |
|----------|--------|-----------|------------|
| 1 | Helper Functions | Unit Tests | Low |
| 2 | Constants | Data Integrity | Low |
| 3 | EVSelector | Component Tests | Medium |

---

## 4. File Changes

### New Files

| File | Purpose |
|------|---------|
| `jest.config.js` | Jest configuration |
| `jest.setup.ts` | Test setup with matchers |
| `__tests__/helpers/getMakeModels.test.ts` | getMakeModels unit tests |
| `__tests__/helpers/getModelYears.test.ts` | getModelYears unit tests |
| `__tests__/helpers/getYearTrims.test.ts` | getYearTrims unit tests |
| `__tests__/helpers/translations.test.ts` | translations unit tests |
| `__tests__/constants/carMakeConstants.test.ts` | CarMakes data integrity |
| `__tests__/constants/carModelsInputItems.test.ts` | Models data integrity |
| `__tests__/EVSelector.test.tsx` | Component tests |
| `__tests__/__mocks__/react-native-dropdown-picker.tsx` | DropDownPicker mock |
| `__tests__/__mocks__/react-native-safe-area-context.tsx` | SafeAreaProvider mock |

### Modified Files

| File | Changes |
|------|---------|
| `package.json` | Add devDependencies, update test scripts |
| `.gitignore` | Add /coverage/ directory |
| `tsconfig.json` | Exclude __tests__ from build output |

---

## 5. New Types

No new types required. Tests use existing types from:
- `src/typesEnumsInterfacesConsts/types.ts`
- `src/typesEnumsInterfacesConsts/interfaces.ts`
- `src/typesEnumsInterfacesConsts/interfaces/inputInterfaces.ts`

---

## 6. External Dependencies

| Package | Version | Purpose |
|---------|---------|---------|
| `@testing-library/react-native` | `^13.0.0` | React Native testing utilities |
| `@testing-library/jest-native` | `^5.4.3` | Custom Jest matchers |
| `@types/jest` | `^30.0.0` | TypeScript definitions for Jest |
| `jest-environment-jsdom` | `^30.0.0` | JSDOM environment for component tests |
| `ts-jest` | `^29.2.0` | TypeScript preprocessor |
| `react-test-renderer` | `^19.0.0` | Peer dependency (matches React version) |

---

## 7. Implementation Details

### 7.1 jest.config.js

```javascript
/** @type {import('jest').Config} */
const config = {
  preset: 'react-native',
  testEnvironment: 'node',
  roots: ['<rootDir>/__tests__'],
  testMatch: ['**/*.test.ts', '**/*.test.tsx'],
  moduleFileExtensions: ['ts', 'tsx', 'js', 'jsx', 'json', 'node'],
  transform: {
    '^.+\\.(ts|tsx)$': 'ts-jest',
  },
  transformIgnorePatterns: [
    'node_modules/(?!(react-native|@react-native|react-native-dropdown-picker|react-native-safe-area-context)/)',
  ],
  setupFilesAfterEnv: ['<rootDir>/jest.setup.ts'],
  moduleNameMapper: {
    '^react-native-dropdown-picker$': '<rootDir>/__tests__/__mocks__/react-native-dropdown-picker.tsx',
    '^react-native-safe-area-context$': '<rootDir>/__tests__/__mocks__/react-native-safe-area-context.tsx',
  },
  collectCoverageFrom: [
    'src/**/*.{ts,tsx}',
    '!src/**/*.d.ts',
    '!src/typesEnumsInterfacesConsts/constants/carModelsInputItems.ts', // Large data file
    '!src/typesEnumsInterfacesConsts/constants/carMakeConstants.ts', // Data constants
  ],
  coverageThreshold: {
    global: {
      branches: 80,
      functions: 80,
      lines: 80,
      statements: 80,
    },
  },
  coverageDirectory: '<rootDir>/coverage',
  verbose: true,
};

module.exports = config;
```

### 7.2 jest.setup.ts

```typescript
import '@testing-library/jest-native/extend-expect';

// Global test utilities if needed
beforeEach(() => {
  jest.clearAllMocks();
});
```

### 7.3 Mock: react-native-dropdown-picker.tsx

```tsx
import React from 'react';
import { View, Text, TouchableOpacity } from 'react-native';

interface MockDropDownPickerProps {
  open: boolean;
  value: string;
  items: Array<{ label: string; value: string }>;
  setOpen: (open: boolean) => void;
  setValue: (callback: (value: string) => string) => void;
  placeholder?: string;
  disabled?: boolean;
  testID?: string;
}

const MockDropDownPicker: React.FC<MockDropDownPickerProps> = ({
  open,
  value,
  items,
  setOpen,
  setValue,
  placeholder,
  disabled,
  testID,
}) => {
  return (
    <View testID={testID}>
      <TouchableOpacity
        testID={`${testID}-toggle`}
        onPress={() => !disabled && setOpen(!open)}
        disabled={disabled}
      >
        <Text>{value || placeholder || 'Select...'}</Text>
      </TouchableOpacity>
      {open && (
        <View testID={`${testID}-list`}>
          {items.map((item) => (
            <TouchableOpacity
              key={item.value}
              testID={`${testID}-item-${item.value}`}
              onPress={() => {
                setValue(() => item.value);
                setOpen(false);
              }}
            >
              <Text>{item.label}</Text>
            </TouchableOpacity>
          ))}
        </View>
      )}
    </View>
  );
};

export default MockDropDownPicker;
```

### 7.4 Mock: react-native-safe-area-context.tsx

```tsx
import React from 'react';
import { View } from 'react-native';

interface SafeAreaProviderProps {
  children: React.ReactNode;
  accessibilityLabel?: string;
  style?: object;
}

export const SafeAreaProvider: React.FC<SafeAreaProviderProps> = ({
  children,
  accessibilityLabel,
  style,
}) => {
  return (
    <View accessibilityLabel={accessibilityLabel} style={style}>
      {children}
    </View>
  );
};

export const SafeAreaView = View;
export const useSafeAreaInsets = () => ({ top: 0, right: 0, bottom: 0, left: 0 });
```

### 7.5 getMakeModels.test.ts

```typescript
import { getMakeModels } from '../../src/helpers/getMakeModels';
import type { CarMake } from '../../src/typesEnumsInterfacesConsts/types';

describe('getMakeModels', () => {
  describe('returns correct models for valid makes', () => {
    it('should return 6 models for Tesla', () => {
      const result = getMakeModels({ carMake: 'Tesla' });
      expect(result).toHaveLength(6);
      const modelNames = result.map((m) => m.value);
      expect(modelNames).toContain('Model S');
      expect(modelNames).toContain('Model X');
      expect(modelNames).toContain('Model 3');
      expect(modelNames).toContain('Model Y');
      expect(modelNames).toContain('Roadster');
      expect(modelNames).toContain('Cybertruck');
    });

    it('should return 5 models for Rivian', () => {
      const result = getMakeModels({ carMake: 'Rivian' });
      expect(result).toHaveLength(5);
      const modelNames = result.map((m) => m.value);
      expect(modelNames).toContain('R1S');
      expect(modelNames).toContain('R1T');
      expect(modelNames).toContain('R2');
      expect(modelNames).toContain('R3');
      expect(modelNames).toContain('Commercial Van');
    });

    it('should return 3 models for Ford', () => {
      const result = getMakeModels({ carMake: 'Ford' });
      expect(result).toHaveLength(3);
    });

    it('should return models for all 48 car makes', () => {
      const makes: CarMake[] = [
        'Tesla', 'Rivian', 'Ford', 'Hyundai', 'Volvo', 'Volkswagen',
        'VinFast', 'Toyota', 'Scout', 'Subaru', 'Smart', 'Rolls-Royce',
        'Ram', 'Porsche', 'Polestar', 'Nissan', 'Mitsubishi', 'Mini',
        'Mercedes-Maybach', 'Mercedes-Benz', 'Mercedes-AMG', 'Mazda',
        'Maserati', 'Lucid', 'Lotus', 'Lordstown', 'Lincoln', 'Lexus',
        'Land Rover', 'Lamborghini', 'Kia', 'Jeep', 'Jaguar', 'Honda',
        'GMC', 'Genesis', 'Fisker', 'Fiat', 'Dodge', 'Chrysler',
        'Chevrolet', 'Cadillac', 'Byton', 'Buick', 'BMW', 'Audi',
        'Acura', 'Afeela',
      ];

      makes.forEach((make) => {
        const result = getMakeModels({ carMake: make });
        expect(result.length).toBeGreaterThan(0);
      });
    });
  });

  describe('return value structure', () => {
    it('should return items with label and value properties', () => {
      const result = getMakeModels({ carMake: 'Tesla' });
      result.forEach((item) => {
        expect(item).toHaveProperty('label');
        expect(item).toHaveProperty('value');
        expect(item.label).toBe(item.value);
      });
    });
  });

  describe('alphabetical sorting', () => {
    it('should return models sorted alphabetically', () => {
      const result = getMakeModels({ carMake: 'Tesla' });
      const labels = result.map((m) => m.label);
      const sorted = [...labels].sort((a, b) => a.localeCompare(b));
      expect(labels).toEqual(sorted);
    });
  });

  describe('edge cases', () => {
    it('should return empty array for "Others"', () => {
      const result = getMakeModels({ carMake: 'Others' });
      expect(result).toEqual([]);
    });

    it('should return empty array for "none"', () => {
      const result = getMakeModels({ carMake: 'none' });
      expect(result).toEqual([]);
    });
  });

  describe('single model makes', () => {
    it('should return 1 model for Lamborghini', () => {
      const result = getMakeModels({ carMake: 'Lamborghini' });
      expect(result).toHaveLength(1);
      expect(result[0]?.value).toBe('Lanzador');
    });

    it('should return 1 model for Chrysler', () => {
      const result = getMakeModels({ carMake: 'Chrysler' });
      expect(result).toHaveLength(1);
      expect(result[0]?.value).toBe('Airflow');
    });
  });
});
```

### 7.6 getModelYears.test.ts

```typescript
import { getModelYears } from '../../src/helpers/getModelYears';
import type { CarMake } from '../../src/typesEnumsInterfacesConsts/types';
import type { CarModelsType } from '../../src/typesEnumsInterfacesConsts/types/modelTypes';

describe('getModelYears', () => {
  describe('returns correct years for valid make/model', () => {
    it('should return years 2012-2024 for Tesla Model S', () => {
      const result = getModelYears({ make: 'Tesla', model: 'Model S' });
      expect(result.length).toBeGreaterThanOrEqual(13);
      const years = result.map((y) => y.value);
      expect(years).toContain('2012');
      expect(years).toContain('2024');
    });

    it('should return years 2017-2024 for Tesla Model 3', () => {
      const result = getModelYears({ make: 'Tesla', model: 'Model 3' });
      expect(result.length).toBeGreaterThanOrEqual(8);
      const years = result.map((y) => y.value);
      expect(years).toContain('2017');
      expect(years).toContain('2024');
    });

    it('should return years for Rivian R1S', () => {
      const result = getModelYears({ make: 'Rivian', model: 'R1S' });
      expect(result.length).toBeGreaterThanOrEqual(3);
      const years = result.map((y) => y.value);
      expect(years).toContain('2022');
      expect(years).toContain('2024');
    });
  });

  describe('return value structure', () => {
    it('should return items with label and value as year strings', () => {
      const result = getModelYears({ make: 'Tesla', model: 'Model S' });
      result.forEach((item) => {
        expect(item).toHaveProperty('label');
        expect(item).toHaveProperty('value');
        expect(item.label).toMatch(/^\d{4}$/);
        expect(item.value).toMatch(/^\d{4}$/);
      });
    });
  });

  describe('sorting', () => {
    it('should return years sorted in ascending order', () => {
      const result = getModelYears({ make: 'Tesla', model: 'Model S' });
      const years = result.map((y) => y.value);
      const sorted = [...years].sort((a, b) => a.localeCompare(b));
      expect(years).toEqual(sorted);
    });
  });

  describe('edge cases', () => {
    it('should return empty array for "Others" make', () => {
      const result = getModelYears({ make: 'Others', model: 'Any' as CarModelsType });
      expect(result).toEqual([]);
    });

    it('should return empty array for "none" make', () => {
      const result = getModelYears({ make: 'none', model: 'Any' as CarModelsType });
      expect(result).toEqual([]);
    });
  });

  describe('single year models', () => {
    it('should return only 2026 for VinFast VF3', () => {
      const result = getModelYears({ make: 'VinFast', model: 'VF3' });
      expect(result).toHaveLength(1);
      expect(result[0]?.value).toBe('2026');
    });
  });
});
```

### 7.7 getYearTrims.test.ts

```typescript
import { getYearTrims } from '../../src/helpers/getYearTrims';
import type { CarModelsType } from '../../src/typesEnumsInterfacesConsts/types/modelTypes';
import type { CarYearsType } from '../../src/typesEnumsInterfacesConsts/types/yearTypes';

describe('getYearTrims', () => {
  describe('returns correct trims for valid make/model/year', () => {
    it('should return trims for Tesla Model S 2024', () => {
      const result = getYearTrims({
        carMake: 'Tesla',
        carModel: 'Model S',
        carYear: '2024',
      });
      expect(result.length).toBeGreaterThan(0);
      const trims = result.map((t) => t.value);
      expect(trims).toContain('Plaid');
    });

    it('should return trims for Tesla Model 3 2024', () => {
      const result = getYearTrims({
        carMake: 'Tesla',
        carModel: 'Model 3',
        carYear: '2024',
      });
      expect(result.length).toBeGreaterThan(0);
    });

    it('should return 9 trims for Rivian R1T 2024', () => {
      const result = getYearTrims({
        carMake: 'Rivian',
        carModel: 'R1T',
        carYear: '2024',
      });
      expect(result).toHaveLength(9);
    });
  });

  describe('return value structure', () => {
    it('should return items with label and value properties', () => {
      const result = getYearTrims({
        carMake: 'Tesla',
        carModel: 'Model S',
        carYear: '2024',
      });
      result.forEach((item) => {
        expect(item).toHaveProperty('label');
        expect(item).toHaveProperty('value');
        expect(typeof item.label).toBe('string');
        expect(typeof item.value).toBe('string');
      });
    });
  });

  describe('sorting', () => {
    it('should return trims sorted alphabetically', () => {
      const result = getYearTrims({
        carMake: 'Tesla',
        carModel: 'Model S',
        carYear: '2024',
      });
      const trims = result.map((t) => t.value);
      const sorted = [...trims].sort();
      expect(trims).toEqual(sorted);
    });
  });

  describe('edge cases', () => {
    it('should return empty array for "Others" make', () => {
      const result = getYearTrims({
        carMake: 'Others',
        carModel: 'Any' as CarModelsType,
        carYear: '2024' as CarYearsType,
      });
      expect(result).toEqual([]);
    });

    it('should return empty array for "none" make', () => {
      const result = getYearTrims({
        carMake: 'none',
        carModel: 'Any' as CarModelsType,
        carYear: '2024' as CarYearsType,
      });
      expect(result).toEqual([]);
    });
  });

  describe('single trim models', () => {
    it('should return 1 trim for Rolls-Royce Spectre 2024', () => {
      const result = getYearTrims({
        carMake: 'Rolls-Royce',
        carModel: 'Spectre',
        carYear: '2024',
      });
      expect(result).toHaveLength(1);
      expect(result[0]?.value).toBe('Spectre');
    });
  });
});
```

### 7.8 translations.test.ts

```typescript
import { translations } from '../../src/helpers/translations';

describe('translations', () => {
  describe('English language', () => {
    it('should return correct English labels', () => {
      const result = translations({ language: 'en' });
      expect(result.carMake).toBe('Car Make');
      expect(result.carModel).toBe('Car Model');
      expect(result.carYear).toBe('Car Year');
      expect(result.carTrim).toBe('Car Trim');
    });
  });

  describe('French language', () => {
    it('should return labels for French', () => {
      const result = translations({ language: 'fr' });
      expect(result.carMake).toBe('Car Make');
      expect(result.carModel).toBe('Car Model');
      expect(result.carYear).toBe('Car Year');
      expect(result.carTrim).toBe('Car Trim');
    });
  });

  describe('return type structure', () => {
    it('should return TranslationCopy with all 4 properties', () => {
      const result = translations({ language: 'en' });
      expect(result).toHaveProperty('carMake');
      expect(result).toHaveProperty('carModel');
      expect(result).toHaveProperty('carYear');
      expect(result).toHaveProperty('carTrim');
    });

    it('should return non-empty strings for all properties', () => {
      const result = translations({ language: 'en' });
      expect(result.carMake.length).toBeGreaterThan(0);
      expect(result.carModel.length).toBeGreaterThan(0);
      expect(result.carYear.length).toBeGreaterThan(0);
      expect(result.carTrim.length).toBeGreaterThan(0);
    });
  });
});
```

### 7.9 carMakeConstants.test.ts

```typescript
import { CarMakes, evMakes } from '../../src/typesEnumsInterfacesConsts/constants/carMakeConstants';

describe('carMakeConstants', () => {
  describe('CarMakes array', () => {
    it('should contain 50 entries (48 makes + Others + none)', () => {
      expect(CarMakes).toHaveLength(50);
    });

    it('should have no duplicate values', () => {
      const uniqueValues = new Set(CarMakes);
      expect(uniqueValues.size).toBe(CarMakes.length);
    });

    it('should contain expected makes', () => {
      expect(CarMakes).toContain('Tesla');
      expect(CarMakes).toContain('Rivian');
      expect(CarMakes).toContain('Ford');
      expect(CarMakes).toContain('BMW');
    });

    it('should contain special values', () => {
      expect(CarMakes).toContain('Others');
      expect(CarMakes).toContain('none');
    });

    it('should have all non-empty strings', () => {
      CarMakes.forEach((make) => {
        expect(typeof make).toBe('string');
        expect(make.length).toBeGreaterThan(0);
      });
    });
  });

  describe('evMakes array', () => {
    it('should contain 49 entries (48 makes + Others, no none)', () => {
      expect(evMakes).toHaveLength(49);
    });

    it('should have correct structure for each item', () => {
      evMakes.forEach((item) => {
        expect(item).toHaveProperty('label');
        expect(item).toHaveProperty('value');
        expect(item).toHaveProperty('disabled');
        expect(item.label).toBe(item.value);
        expect(typeof item.disabled).toBe('boolean');
      });
    });

    it('should not contain "none" value', () => {
      const values = evMakes.map((item) => item.value);
      expect(values).not.toContain('none');
    });

    it('should have no duplicate labels', () => {
      const labels = evMakes.map((item) => item.label);
      const uniqueLabels = new Set(labels);
      expect(uniqueLabels.size).toBe(evMakes.length);
    });
  });

  describe('consistency check', () => {
    it('should have evMakes values that exist in CarMakes', () => {
      const evMakeValues = evMakes.map((item) => item.value);
      evMakeValues.forEach((value) => {
        expect(CarMakes).toContain(value);
      });
    });
  });
});
```

### 7.10 carModelsInputItems.test.ts

```typescript
import {
  teslaModels,
  rivianModels,
  fordModels,
  hyundaiModels,
  bmwModels,
} from '../../src/typesEnumsInterfacesConsts/constants/carModelsInputItems';

describe('carModelsInputItems', () => {
  describe('structure validation', () => {
    const validateModelStructure = (models: typeof teslaModels) => {
      models.forEach((modelItem) => {
        expect(modelItem).toHaveProperty('model');
        expect(modelItem).toHaveProperty('yearTrims');
        expect(typeof modelItem.model).toBe('string');
        expect(Array.isArray(modelItem.yearTrims)).toBe(true);

        modelItem.yearTrims.forEach((yearTrim) => {
          expect(yearTrim).toHaveProperty('year');
          expect(yearTrim).toHaveProperty('trims');
          expect(typeof yearTrim.year).toBe('string');
          expect(Array.isArray(yearTrim.trims)).toBe(true);
          expect(yearTrim.trims.length).toBeGreaterThan(0);
        });
      });
    };

    it('should have valid structure for Tesla models', () => {
      validateModelStructure(teslaModels);
    });

    it('should have valid structure for Rivian models', () => {
      validateModelStructure(rivianModels);
    });

    it('should have valid structure for Ford models', () => {
      validateModelStructure(fordModels);
    });
  });

  describe('Tesla models', () => {
    it('should have 6 models', () => {
      expect(teslaModels).toHaveLength(6);
    });

    it('should contain expected model names', () => {
      const modelNames = teslaModels.map((m) => m.model);
      expect(modelNames).toContain('Model S');
      expect(modelNames).toContain('Model X');
      expect(modelNames).toContain('Model 3');
      expect(modelNames).toContain('Model Y');
      expect(modelNames).toContain('Roadster');
      expect(modelNames).toContain('Cybertruck');
    });

    it('should have no duplicate model names', () => {
      const modelNames = teslaModels.map((m) => m.model);
      const uniqueNames = new Set(modelNames);
      expect(uniqueNames.size).toBe(teslaModels.length);
    });
  });

  describe('Rivian models', () => {
    it('should have 5 models', () => {
      expect(rivianModels).toHaveLength(5);
    });

    it('should contain expected model names', () => {
      const modelNames = rivianModels.map((m) => m.model);
      expect(modelNames).toContain('R1S');
      expect(modelNames).toContain('R1T');
      expect(modelNames).toContain('R2');
      expect(modelNames).toContain('R3');
      expect(modelNames).toContain('Commercial Van');
    });
  });

  describe('Ford models', () => {
    it('should have 3 models', () => {
      expect(fordModels).toHaveLength(3);
    });
  });

  describe('Hyundai models', () => {
    it('should have 7 models', () => {
      expect(hyundaiModels).toHaveLength(7);
    });
  });

  describe('BMW models', () => {
    it('should have 6 models', () => {
      expect(bmwModels).toHaveLength(6);
    });
  });

  describe('year format validation', () => {
    it('should have valid 4-digit year strings for Tesla models', () => {
      teslaModels.forEach((model) => {
        model.yearTrims.forEach((yearTrim) => {
          expect(yearTrim.year).toMatch(/^\d{4}$/);
          const yearNum = parseInt(yearTrim.year, 10);
          expect(yearNum).toBeGreaterThanOrEqual(2012);
          expect(yearNum).toBeLessThanOrEqual(2030);
        });
      });
    });
  });

  describe('no empty trims', () => {
    it('should have no empty trim strings in Tesla models', () => {
      teslaModels.forEach((model) => {
        model.yearTrims.forEach((yearTrim) => {
          yearTrim.trims.forEach((trim) => {
            expect(trim.length).toBeGreaterThan(0);
          });
        });
      });
    });
  });
});
```

### 7.11 EVSelector.test.tsx

```tsx
import React from 'react';
import { render, waitFor } from '@testing-library/react-native';
import EVSelector from '../../src/EVSelector';
import type { Car } from '../../src/typesEnumsInterfacesConsts/interfaces';

describe('EVSelector', () => {
  const mockOnValueChange = jest.fn();

  beforeEach(() => {
    jest.clearAllMocks();
  });

  describe('rendering', () => {
    it('should render without crashing', () => {
      const { getByText } = render(
        <EVSelector onValueChange={mockOnValueChange} />
      );
      expect(getByText('Car Make')).toBeTruthy();
    });

    it('should display all 4 dropdown labels by default', () => {
      const { getByText } = render(
        <EVSelector onValueChange={mockOnValueChange} />
      );
      expect(getByText('Car Make')).toBeTruthy();
      expect(getByText('Car Model')).toBeTruthy();
      expect(getByText('Car Year')).toBeTruthy();
      expect(getByText('Car Trim')).toBeTruthy();
    });

    it('should display only Car Make when optionsLevel is CarMake', () => {
      const { getByText, queryByText } = render(
        <EVSelector
          onValueChange={mockOnValueChange}
          optionsLevel="CarMake"
        />
      );
      expect(getByText('Car Make')).toBeTruthy();
      expect(queryByText('Car Model')).toBeNull();
      expect(queryByText('Car Year')).toBeNull();
      expect(queryByText('Car Trim')).toBeNull();
    });

    it('should display Make and Model when optionsLevel is CarModel', () => {
      const { getByText, queryByText } = render(
        <EVSelector
          onValueChange={mockOnValueChange}
          optionsLevel="CarModel"
        />
      );
      expect(getByText('Car Make')).toBeTruthy();
      expect(getByText('Car Model')).toBeTruthy();
      expect(queryByText('Car Year')).toBeNull();
      expect(queryByText('Car Trim')).toBeNull();
    });
  });

  describe('callback invocation', () => {
    it('should call onValueChange on mount with initial state', async () => {
      render(<EVSelector onValueChange={mockOnValueChange} />);

      await waitFor(() => {
        expect(mockOnValueChange).toHaveBeenCalled();
      });

      const lastCall = mockOnValueChange.mock.calls[mockOnValueChange.mock.calls.length - 1];
      const carValue = lastCall[0] as Car;
      expect(carValue).toHaveProperty('make');
      expect(carValue).toHaveProperty('model');
      expect(carValue).toHaveProperty('year');
      expect(carValue).toHaveProperty('trim');
    });
  });

  describe('props passing', () => {
    it('should apply accessibilityLabel', () => {
      const { getByLabelText } = render(
        <EVSelector
          onValueChange={mockOnValueChange}
          accessibilityLabel="EV Selector"
        />
      );
      expect(getByLabelText('EV Selector')).toBeTruthy();
    });
  });

  describe('language support', () => {
    it('should display English labels by default', () => {
      const { getByText } = render(
        <EVSelector onValueChange={mockOnValueChange} />
      );
      expect(getByText('Car Make')).toBeTruthy();
    });

    it('should display labels for French language', () => {
      const { getByText } = render(
        <EVSelector onValueChange={mockOnValueChange} language="fr" />
      );
      // Current implementation returns same labels for French
      expect(getByText('Car Make')).toBeTruthy();
    });
  });
});
```

### 7.12 package.json Updates

```json
{
  "scripts": {
    "test": "jest",
    "test:coverage": "jest --coverage",
    "test:watch": "jest --watch"
  },
  "devDependencies": {
    "@testing-library/jest-native": "^5.4.3",
    "@testing-library/react-native": "^13.0.0",
    "@tsconfig/react-native": "^3.0.9",
    "@types/jest": "^30.0.0",
    "@types/react": "^19.2.9",
    "@types/react-native": "^0.73.0",
    "jest": "^30.2.0",
    "jest-environment-jsdom": "^30.0.0",
    "react-test-renderer": "^19.0.0",
    "ts-jest": "^29.2.0",
    "typescript": "^5.9.3"
  }
}
```

---

## 8. Step-by-Step Todo List

See Task List in Claude Code for detailed implementation tasks (#8-#19).

**Execution Order:**
1. Task #8: Create jest.config.js
2. Task #9: Install devDependencies (blocked by #8)
3. Task #10: Create __tests__ folder structure (blocked by #9)
4. Task #18: Create Jest setup and mocks (blocked by #10)
5. Tasks #11-16: Implement helper and constants tests (blocked by #10)
6. Task #17: Implement EVSelector tests (blocked by #18)
7. Task #19: Update scripts and verify coverage (blocked by all tests)

---

## 9. Coverage Expectations

| Module | Expected Coverage |
|--------|-------------------|
| `getMakeModels.ts` | 95%+ |
| `getModelYears.ts` | 95%+ |
| `getYearTrims.ts` | 95%+ |
| `translations.ts` | 100% |
| `EVSelector.tsx` | 80%+ |
| **Overall** | **80%+** |

Note: Large data files (carModelsInputItems.ts, carMakeConstants.ts) are excluded from coverage calculation but have data integrity tests.

---

## 10. Risk Mitigation

| Risk | Mitigation |
|------|------------|
| React Native mock complexity | Use simple functional mocks, avoid complex state |
| Coverage threshold failures | Exclude large data constants from coverage |
| Jest 30 breaking changes | Pin specific versions, test locally first |
| ts-jest compatibility | Use babel-jest as fallback if needed |

---

## 11. Notes for Implementation

1. **Start with helper function tests** - They are pure functions with no external dependencies
2. **Data integrity tests catch data issues** - These validate the constants without increasing complexity
3. **Component tests need mocks** - Create mocks before writing component tests
4. **Run incrementally** - Run `npm test` after each test file is created
5. **Coverage report** - Use `npm run test:coverage` to verify 80% threshold
