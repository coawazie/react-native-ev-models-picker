/**
 * @fileoverview Tests for carMakeConstants data integrity.
 * Validates the structure and content of car make constants used in the EV picker.
 */

import {
  CarMakes,
  evMakes,
} from '../../src/typesEnumsInterfacesConsts/constants/carMakeConstants';

describe('carMakeConstants', () => {
  describe('CarMakes array', () => {
    it('should be a non-empty array', () => {
      expect(CarMakes).toBeInstanceOf(Array);
      expect(CarMakes.length).toBeGreaterThan(0);
    });

    it('should contain "Tesla"', () => {
      expect(CarMakes).toContain('Tesla');
    });

    it('should contain "Others" option', () => {
      expect(CarMakes).toContain('Others');
    });

    it('should contain "none" option', () => {
      expect(CarMakes).toContain('none');
    });

    it('should contain major EV manufacturers', () => {
      const majorMakes = [
        'Tesla',
        'Rivian',
        'Ford',
        'BMW',
        'Audi',
        'Mercedes-Benz',
        'Porsche',
        'Hyundai',
        'Kia',
        'Volkswagen',
        'Chevrolet',
        'Lucid',
      ];

      majorMakes.forEach((make) => {
        expect(CarMakes).toContain(make);
      });
    });

    it('should not have duplicate entries', () => {
      const uniqueMakes = new Set(CarMakes);
      expect(uniqueMakes.size).toBe(CarMakes.length);
    });

    it('should have all string entries', () => {
      CarMakes.forEach((make) => {
        expect(typeof make).toBe('string');
      });
    });

    it('should not have empty string entries', () => {
      CarMakes.forEach((make) => {
        expect(make.trim()).not.toBe('');
      });
    });
  });

  describe('evMakes array', () => {
    it('should be a non-empty array', () => {
      expect(evMakes).toBeInstanceOf(Array);
      expect(evMakes.length).toBeGreaterThan(0);
    });

    it('should have correct structure for each item', () => {
      evMakes.forEach((item) => {
        expect(item).toHaveProperty('label');
        expect(item).toHaveProperty('value');
        expect(item).toHaveProperty('disabled');
      });
    });

    it('should have label equal to value for all items', () => {
      evMakes.forEach((item) => {
        expect(item.label).toBe(item.value);
      });
    });

    it('should have disabled property as boolean', () => {
      evMakes.forEach((item) => {
        expect(typeof item.disabled).toBe('boolean');
      });
    });

    it('should have all items enabled (disabled: false)', () => {
      evMakes.forEach((item) => {
        expect(item.disabled).toBe(false);
      });
    });

    it('should contain Tesla item', () => {
      const teslaItem = evMakes.find((item) => item.value === 'Tesla');
      expect(teslaItem).toBeDefined();
      expect(teslaItem?.label).toBe('Tesla');
    });

    it('should contain Others item', () => {
      const othersItem = evMakes.find((item) => item.value === 'Others');
      expect(othersItem).toBeDefined();
    });

    it('should NOT contain "none" item (internal use only)', () => {
      const noneItem = evMakes.find((item) => item.value === 'none');
      expect(noneItem).toBeUndefined();
    });

    it('should not have duplicate values', () => {
      const values = evMakes.map((item) => item.value);
      const uniqueValues = new Set(values);
      expect(uniqueValues.size).toBe(values.length);
    });

    it('should have string type for label and value', () => {
      evMakes.forEach((item) => {
        expect(typeof item.label).toBe('string');
        expect(typeof item.value).toBe('string');
      });
    });

    it('should not have empty labels or values', () => {
      evMakes.forEach((item) => {
        expect(item.label.trim()).not.toBe('');
        expect(item.value.trim()).not.toBe('');
      });
    });
  });

  describe('consistency between CarMakes and evMakes', () => {
    it('evMakes values should be subset of CarMakes', () => {
      evMakes.forEach((item) => {
        expect(CarMakes).toContain(item.value);
      });
    });

    it('CarMakes should have exactly one more entry than evMakes (the "none" entry)', () => {
      // CarMakes includes "none" which evMakes does not
      expect(CarMakes.length).toBe(evMakes.length + 1);
    });
  });
});
