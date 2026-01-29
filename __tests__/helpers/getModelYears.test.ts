/**
 * @fileoverview Tests for getModelYears helper function.
 * Tests the retrieval of available years for specific car make and model combinations.
 */

import { getModelYears } from '../../src/helpers/getModelYears';
import { getMakeModels } from '../../src/helpers/getMakeModels';
import { CarMake } from '../../src/typesEnumsInterfacesConsts/types';

describe('getModelYears', () => {
  describe('returns years for valid make and model combinations', () => {
    it('should return years for Tesla Model 3 sorted alphabetically', () => {
      const result = getModelYears({ make: 'Tesla', model: 'Model 3' });

      expect(result).toBeInstanceOf(Array);
      expect(result.length).toBeGreaterThan(0);

      // Verify structure of returned items
      result.forEach((item) => {
        expect(item).toHaveProperty('label');
        expect(item).toHaveProperty('value');
        expect(typeof item.label).toBe('string');
        expect(typeof item.value).toBe('string');
        expect(item.label).toBe(item.value);
      });

      // Verify alphabetical sorting
      const labels = result.map((item) => item.label);
      const sortedLabels = [...labels].sort((a, b) => a.localeCompare(b));
      expect(labels).toEqual(sortedLabels);
    });

    it('should return years for Tesla Model S', () => {
      const result = getModelYears({ make: 'Tesla', model: 'Model S' });

      expect(result).toBeInstanceOf(Array);
      expect(result.length).toBeGreaterThan(0);
    });

    it('should return years for Tesla Cybertruck', () => {
      const result = getModelYears({ make: 'Tesla', model: 'Cybertruck' });

      expect(result).toBeInstanceOf(Array);
      expect(result.length).toBeGreaterThan(0);
    });

    it('should return years for Rivian R1T', () => {
      const result = getModelYears({ make: 'Rivian', model: 'R1T' });

      expect(result).toBeInstanceOf(Array);
      expect(result.length).toBeGreaterThan(0);
    });

    it('should return years for Ford Mustang Mach-E', () => {
      const result = getModelYears({ make: 'Ford', model: 'Mustang Mach-E' });

      expect(result).toBeInstanceOf(Array);
      expect(result.length).toBeGreaterThan(0);
    });

    it('should return years for BMW iX', () => {
      const result = getModelYears({ make: 'BMW', model: 'iX' });

      expect(result).toBeInstanceOf(Array);
      expect(result.length).toBeGreaterThan(0);
    });

    it('should return years for Porsche Taycan', () => {
      const result = getModelYears({ make: 'Porsche', model: 'Taycan' });

      expect(result).toBeInstanceOf(Array);
      expect(result.length).toBeGreaterThan(0);
    });
  });

  describe('returns empty array for special cases', () => {
    it('should return empty array for "Others" make', () => {
      const result = getModelYears({ make: 'Others', model: 'Any Model' });

      expect(result).toBeInstanceOf(Array);
      expect(result).toHaveLength(0);
    });

    it('should return empty array for "none" make', () => {
      const result = getModelYears({ make: 'none', model: 'Any Model' });

      expect(result).toBeInstanceOf(Array);
      expect(result).toHaveLength(0);
    });
  });

  describe('year data integrity', () => {
    it('should have label equal to value for all years', () => {
      const result = getModelYears({ make: 'Tesla', model: 'Model 3' });

      result.forEach((item) => {
        expect(item.label).toBe(item.value);
      });
    });

    it('should not have duplicate years', () => {
      const result = getModelYears({ make: 'Tesla', model: 'Model 3' });
      const values = result.map((item) => item.value);
      const uniqueValues = new Set(values);

      expect(values.length).toBe(uniqueValues.size);
    });

    it('should have valid year format (4 digits)', () => {
      const result = getModelYears({ make: 'Tesla', model: 'Model 3' });
      const yearRegex = /^\d{4}$/;

      result.forEach((item) => {
        expect(item.label).toMatch(yearRegex);
        expect(item.value).toMatch(yearRegex);
      });
    });

    it('should have years in reasonable range', () => {
      const result = getModelYears({ make: 'Tesla', model: 'Model 3' });
      const minYear = 2010;
      const maxYear = 2030;

      result.forEach((item) => {
        const year = parseInt(item.value, 10);
        expect(year).toBeGreaterThanOrEqual(minYear);
        expect(year).toBeLessThanOrEqual(maxYear);
      });
    });
  });

  describe('integration with getMakeModels', () => {
    const testMakes: CarMake[] = ['Tesla', 'Rivian', 'Ford', 'BMW', 'Porsche'];

    it.each(testMakes)(
      'should return years for all models of %s',
      (make) => {
        const models = getMakeModels({ carMake: make });

        models.forEach((modelItem) => {
          const years = getModelYears({ make, model: modelItem.value });

          expect(years).toBeInstanceOf(Array);
          expect(years.length).toBeGreaterThan(0);

          // Verify structure
          years.forEach((yearItem) => {
            expect(yearItem).toHaveProperty('label');
            expect(yearItem).toHaveProperty('value');
          });
        });
      }
    );
  });
});
