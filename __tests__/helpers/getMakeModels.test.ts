/**
 * @fileoverview Tests for getMakeModels helper function.
 * Tests the retrieval of car models for different manufacturers.
 */

import { getMakeModels } from '../../src/helpers/getMakeModels';
import { CarMake } from '../../src/typesEnumsInterfacesConsts/types';

describe('getMakeModels', () => {
  describe('returns models for valid car makes', () => {
    it('should return Tesla models sorted alphabetically', () => {
      const result = getMakeModels({ carMake: 'Tesla' });

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

    it('should return Ford models sorted alphabetically', () => {
      const result = getMakeModels({ carMake: 'Ford' });

      expect(result).toBeInstanceOf(Array);
      expect(result.length).toBeGreaterThan(0);

      // Verify alphabetical sorting
      const labels = result.map((item) => item.label);
      const sortedLabels = [...labels].sort((a, b) => a.localeCompare(b));
      expect(labels).toEqual(sortedLabels);
    });

    it('should return Rivian models', () => {
      const result = getMakeModels({ carMake: 'Rivian' });

      expect(result).toBeInstanceOf(Array);
      expect(result.length).toBeGreaterThan(0);
    });

    it('should return BMW models', () => {
      const result = getMakeModels({ carMake: 'BMW' });

      expect(result).toBeInstanceOf(Array);
      expect(result.length).toBeGreaterThan(0);
    });

    it('should return Audi models', () => {
      const result = getMakeModels({ carMake: 'Audi' });

      expect(result).toBeInstanceOf(Array);
      expect(result.length).toBeGreaterThan(0);
    });

    it('should return Mercedes-Benz models', () => {
      const result = getMakeModels({ carMake: 'Mercedes-Benz' });

      expect(result).toBeInstanceOf(Array);
      expect(result.length).toBeGreaterThan(0);
    });

    it('should return Porsche models', () => {
      const result = getMakeModels({ carMake: 'Porsche' });

      expect(result).toBeInstanceOf(Array);
      expect(result.length).toBeGreaterThan(0);
    });

    it('should return Hyundai models', () => {
      const result = getMakeModels({ carMake: 'Hyundai' });

      expect(result).toBeInstanceOf(Array);
      expect(result.length).toBeGreaterThan(0);
    });

    it('should return Kia models', () => {
      const result = getMakeModels({ carMake: 'Kia' });

      expect(result).toBeInstanceOf(Array);
      expect(result.length).toBeGreaterThan(0);
    });

    it('should return Lucid models', () => {
      const result = getMakeModels({ carMake: 'Lucid' });

      expect(result).toBeInstanceOf(Array);
      expect(result.length).toBeGreaterThan(0);
    });
  });

  describe('returns empty array for special cases', () => {
    it('should return empty array for "Others"', () => {
      const result = getMakeModels({ carMake: 'Others' });

      expect(result).toBeInstanceOf(Array);
      expect(result).toHaveLength(0);
    });

    it('should return empty array for "none"', () => {
      const result = getMakeModels({ carMake: 'none' });

      expect(result).toBeInstanceOf(Array);
      expect(result).toHaveLength(0);
    });
  });

  describe('handles all supported makes', () => {
    const supportedMakes: CarMake[] = [
      'Acura',
      'Afeela',
      'Audi',
      'BMW',
      'Buick',
      'Byton',
      'Cadillac',
      'Chevrolet',
      'Chrysler',
      'Dodge',
      'Fiat',
      'Fisker',
      'Ford',
      'Genesis',
      'GMC',
      'Honda',
      'Hyundai',
      'Jaguar',
      'Jeep',
      'Kia',
      'Lamborghini',
      'Land Rover',
      'Lexus',
      'Lincoln',
      'Lordstown',
      'Lotus',
      'Lucid',
      'Maserati',
      'Mazda',
      'Mercedes-AMG',
      'Mercedes-Benz',
      'Mercedes-Maybach',
      'Mini',
      'Mitsubishi',
      'Nissan',
      'Polestar',
      'Porsche',
      'Ram',
      'Rivian',
      'Rolls-Royce',
      'Scout',
      'Smart',
      'Subaru',
      'Tesla',
      'Toyota',
      'VinFast',
      'Volkswagen',
      'Volvo',
    ];

    it.each(supportedMakes)(
      'should return models for %s',
      (make) => {
        const result = getMakeModels({ carMake: make });

        expect(result).toBeInstanceOf(Array);
        expect(result.length).toBeGreaterThan(0);

        // Verify each item has correct structure
        result.forEach((item) => {
          expect(item).toHaveProperty('label');
          expect(item).toHaveProperty('value');
        });
      }
    );
  });

  describe('model data integrity', () => {
    it('should have label equal to value for all models', () => {
      const result = getMakeModels({ carMake: 'Tesla' });

      result.forEach((item) => {
        expect(item.label).toBe(item.value);
      });
    });

    it('should not have duplicate models', () => {
      const result = getMakeModels({ carMake: 'Tesla' });
      const values = result.map((item) => item.value);
      const uniqueValues = new Set(values);

      expect(values.length).toBe(uniqueValues.size);
    });

    it('should not have empty model names', () => {
      const result = getMakeModels({ carMake: 'Ford' });

      result.forEach((item) => {
        expect(item.label.trim()).not.toBe('');
        expect(item.value.trim()).not.toBe('');
      });
    });
  });
});
