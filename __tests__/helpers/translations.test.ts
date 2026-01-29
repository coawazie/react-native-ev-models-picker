/**
 * @fileoverview Tests for translations helper function.
 * Tests the retrieval of localized UI labels for the EV picker component.
 */

import { translations } from '../../src/helpers/translations';
import { SupportedLangues } from '../../src/typesEnumsInterfacesConsts/types';

describe('translations', () => {
  describe('returns correct translations for supported languages', () => {
    it('should return English translations for "en"', () => {
      const result = translations({ language: 'en' });

      expect(result).toHaveProperty('carMake');
      expect(result).toHaveProperty('carModel');
      expect(result).toHaveProperty('carYear');
      expect(result).toHaveProperty('carTrim');

      expect(result.carMake).toBe('Car Make');
      expect(result.carModel).toBe('Car Model');
      expect(result.carYear).toBe('Car Year');
      expect(result.carTrim).toBe('Car Trim');
    });

    it('should return French translations for "fr"', () => {
      const result = translations({ language: 'fr' });

      expect(result).toHaveProperty('carMake');
      expect(result).toHaveProperty('carModel');
      expect(result).toHaveProperty('carYear');
      expect(result).toHaveProperty('carTrim');

      // Note: Currently French returns same as English (placeholder)
      expect(result.carMake).toBe('Car Make');
      expect(result.carModel).toBe('Car Model');
      expect(result.carYear).toBe('Car Year');
      expect(result.carTrim).toBe('Car Trim');
    });
  });

  describe('translation structure', () => {
    const supportedLanguages: SupportedLangues[] = ['en', 'fr'];

    it.each(supportedLanguages)(
      'should return all required keys for language "%s"',
      (language) => {
        const result = translations({ language });

        const requiredKeys = ['carMake', 'carModel', 'carYear', 'carTrim'];
        requiredKeys.forEach((key) => {
          expect(result).toHaveProperty(key);
        });
      }
    );

    it.each(supportedLanguages)(
      'should return non-empty strings for all labels in language "%s"',
      (language) => {
        const result = translations({ language });

        expect(result.carMake.trim()).not.toBe('');
        expect(result.carModel.trim()).not.toBe('');
        expect(result.carYear.trim()).not.toBe('');
        expect(result.carTrim.trim()).not.toBe('');
      }
    );

    it.each(supportedLanguages)(
      'should return string type for all values in language "%s"',
      (language) => {
        const result = translations({ language });

        expect(typeof result.carMake).toBe('string');
        expect(typeof result.carModel).toBe('string');
        expect(typeof result.carYear).toBe('string');
        expect(typeof result.carTrim).toBe('string');
      }
    );
  });

  describe('consistency across languages', () => {
    it('should return same number of keys for all languages', () => {
      const enResult = translations({ language: 'en' });
      const frResult = translations({ language: 'fr' });

      const enKeys = Object.keys(enResult);
      const frKeys = Object.keys(frResult);

      expect(enKeys.length).toBe(frKeys.length);
      expect(enKeys.sort()).toEqual(frKeys.sort());
    });
  });
});
