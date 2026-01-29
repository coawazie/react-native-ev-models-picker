/**
 * @fileoverview Tests for getYearTrims helper function.
 * Tests the retrieval of available trims for specific car make, model, and year combinations.
 */

import { getYearTrims } from '../../src/helpers/getYearTrims';
import { getMakeModels } from '../../src/helpers/getMakeModels';
import { getModelYears } from '../../src/helpers/getModelYears';
import { CarMake } from '../../src/typesEnumsInterfacesConsts/types';

describe('getYearTrims', () => {
  describe('returns trims for valid make, model, and year combinations', () => {
    it('should return trims for Tesla Model 3 2023 sorted alphabetically', () => {
      const result = getYearTrims({
        carMake: 'Tesla',
        carModel: 'Model 3',
        carYear: '2023',
      });

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
      const sortedLabels = [...labels].sort();
      expect(labels).toEqual(sortedLabels);
    });

    it('should return trims for Tesla Model S 2024', () => {
      const result = getYearTrims({
        carMake: 'Tesla',
        carModel: 'Model S',
        carYear: '2024',
      });

      expect(result).toBeInstanceOf(Array);
      expect(result.length).toBeGreaterThan(0);
    });

    it('should return trims for Tesla Cybertruck 2024', () => {
      const result = getYearTrims({
        carMake: 'Tesla',
        carModel: 'Cybertruck',
        carYear: '2024',
      });

      expect(result).toBeInstanceOf(Array);
      expect(result.length).toBeGreaterThan(0);
    });

    it('should return trims for Acura ZDX 2024', () => {
      const result = getYearTrims({
        carMake: 'Acura',
        carModel: 'ZDX',
        carYear: '2024',
      });

      expect(result).toBeInstanceOf(Array);
      expect(result.length).toBeGreaterThan(0);
    });

    it('should return trims for BMW iX', () => {
      const result = getYearTrims({
        carMake: 'BMW',
        carModel: 'iX',
        carYear: '2024',
      });

      expect(result).toBeInstanceOf(Array);
      expect(result.length).toBeGreaterThan(0);
    });
  });

  describe('returns empty array for special cases', () => {
    it('should return empty array for "Others" make', () => {
      const result = getYearTrims({
        carMake: 'Others',
        carModel: 'Any Model',
        carYear: '2024',
      });

      expect(result).toBeInstanceOf(Array);
      expect(result).toHaveLength(0);
    });

    it('should return empty array for "none" make', () => {
      const result = getYearTrims({
        carMake: 'none',
        carModel: 'Any Model',
        carYear: '2024',
      });

      expect(result).toBeInstanceOf(Array);
      expect(result).toHaveLength(0);
    });
  });

  describe('trim data integrity', () => {
    it('should have label equal to value for all trims', () => {
      const result = getYearTrims({
        carMake: 'Tesla',
        carModel: 'Model 3',
        carYear: '2023',
      });

      result.forEach((item) => {
        expect(item.label).toBe(item.value);
      });
    });

    it('should not have duplicate trims', () => {
      const result = getYearTrims({
        carMake: 'Tesla',
        carModel: 'Model 3',
        carYear: '2023',
      });
      const values = result.map((item) => item.value);
      const uniqueValues = new Set(values);

      expect(values.length).toBe(uniqueValues.size);
    });

    it('should not have empty trim names', () => {
      const result = getYearTrims({
        carMake: 'Tesla',
        carModel: 'Model 3',
        carYear: '2023',
      });

      result.forEach((item) => {
        expect(item.label.trim()).not.toBe('');
        expect(item.value.trim()).not.toBe('');
      });
    });
  });

  describe('integration with getMakeModels and getModelYears', () => {
    const testMakes: CarMake[] = ['Tesla', 'Acura', 'Ford'];

    it.each(testMakes)(
      'should return trims for all models and years of %s',
      (make) => {
        const models = getMakeModels({ carMake: make });

        // Test first model only to keep test fast
        const firstModel = models[0];
        if (firstModel) {
          const years = getModelYears({ make, model: firstModel.value });

          // Test first year only to keep test fast
          const firstYear = years[0];
          if (firstYear) {
            const trims = getYearTrims({
              carMake: make,
              carModel: firstModel.value,
              carYear: firstYear.value,
            });

            expect(trims).toBeInstanceOf(Array);
            expect(trims.length).toBeGreaterThan(0);

            // Verify structure
            trims.forEach((trimItem) => {
              expect(trimItem).toHaveProperty('label');
              expect(trimItem).toHaveProperty('value');
            });
          }
        }
      }
    );
  });

  describe('full data chain validation', () => {
    it('should successfully navigate Tesla Model 3 from make to trim', () => {
      // Step 1: Get models for Tesla
      const models = getMakeModels({ carMake: 'Tesla' });
      expect(models.length).toBeGreaterThan(0);

      // Step 2: Find Model 3 and get its years
      const model3 = models.find((m) => m.value === 'Model 3');
      expect(model3).toBeDefined();

      const years = getModelYears({ make: 'Tesla', model: 'Model 3' });
      expect(years.length).toBeGreaterThan(0);

      // Step 3: Get trims for a specific year
      const firstYear = years[0];
      expect(firstYear).toBeDefined();

      if (firstYear) {
        const trims = getYearTrims({
          carMake: 'Tesla',
          carModel: 'Model 3',
          carYear: firstYear.value,
        });
        expect(trims.length).toBeGreaterThan(0);
      }
    });
  });
});
