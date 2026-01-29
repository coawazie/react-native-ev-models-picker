/**
 * @fileoverview Tests for carModelsInputItems data integrity.
 * Validates the structure and content of car model data used in the EV picker.
 */

import {
  teslaModels,
  rivianModels,
  fordModels,
  bmwModels,
  audiModels,
  acuraModels,
  porscheModels,
  hyundaiModels,
  kiaModels,
  lucidModels,
  chevroletModels,
  mercedesBenzModels,
} from '../../src/typesEnumsInterfacesConsts/constants/carModelsInputItems';

/** Type for a single model item with year and trim data */
interface ModelItem {
  model: string;
  yearTrims: Array<{
    year: string;
    trims: string[];
  }>;
}

/**
 * Helper function to validate model array structure.
 * @param models - Array of model items to validate
 * @param makeName - Name of the make for error messages
 */
const validateModelArrayStructure = (
  models: ModelItem[],
  makeName: string
): void => {
  expect(models).toBeInstanceOf(Array);
  expect(models.length).toBeGreaterThan(0);

  models.forEach((modelItem, modelIndex) => {
    // Validate model has required properties
    expect(modelItem).toHaveProperty('model');
    expect(modelItem).toHaveProperty('yearTrims');

    // Validate model name
    expect(typeof modelItem.model).toBe('string');
    expect(modelItem.model.trim()).not.toBe('');

    // Validate yearTrims array
    expect(modelItem.yearTrims).toBeInstanceOf(Array);
    expect(modelItem.yearTrims.length).toBeGreaterThan(0);

    modelItem.yearTrims.forEach((yearTrim, yearIndex) => {
      // Validate year
      expect(yearTrim).toHaveProperty('year');
      expect(typeof yearTrim.year).toBe('string');
      expect(yearTrim.year).toMatch(/^\d{4}$/);

      // Validate trims array
      expect(yearTrim).toHaveProperty('trims');
      expect(yearTrim.trims).toBeInstanceOf(Array);
      expect(yearTrim.trims.length).toBeGreaterThan(0);

      yearTrim.trims.forEach((trim) => {
        expect(typeof trim).toBe('string');
        expect(trim.trim()).not.toBe('');
      });
    });
  });
};

describe('carModelsInputItems', () => {
  describe('teslaModels', () => {
    it('should have valid structure', () => {
      validateModelArrayStructure(teslaModels, 'Tesla');
    });

    it('should contain Model 3', () => {
      const model3 = teslaModels.find((m) => m.model === 'Model 3');
      expect(model3).toBeDefined();
    });

    it('should contain Model S', () => {
      const modelS = teslaModels.find((m) => m.model === 'Model S');
      expect(modelS).toBeDefined();
    });

    it('should contain Model Y', () => {
      const modelY = teslaModels.find((m) => m.model === 'Model Y');
      expect(modelY).toBeDefined();
    });

    it('should contain Cybertruck', () => {
      const cybertruck = teslaModels.find((m) => m.model === 'Cybertruck');
      expect(cybertruck).toBeDefined();
    });

    it('should not have duplicate model names', () => {
      const modelNames = teslaModels.map((m) => m.model);
      const uniqueNames = new Set(modelNames);
      expect(uniqueNames.size).toBe(modelNames.length);
    });
  });

  describe('rivianModels', () => {
    it('should have valid structure', () => {
      validateModelArrayStructure(rivianModels, 'Rivian');
    });

    it('should contain R1T', () => {
      const r1t = rivianModels.find((m) => m.model === 'R1T');
      expect(r1t).toBeDefined();
    });

    it('should contain R1S', () => {
      const r1s = rivianModels.find((m) => m.model === 'R1S');
      expect(r1s).toBeDefined();
    });
  });

  describe('fordModels', () => {
    it('should have valid structure', () => {
      validateModelArrayStructure(fordModels, 'Ford');
    });

    it('should contain Mustang Mach-E', () => {
      const machE = fordModels.find((m) => m.model === 'Mustang Mach-E');
      expect(machE).toBeDefined();
    });

    it('should contain F-150 Lightning', () => {
      const lightning = fordModels.find((m) => m.model === 'F-150 Lightning');
      expect(lightning).toBeDefined();
    });
  });

  describe('bmwModels', () => {
    it('should have valid structure', () => {
      validateModelArrayStructure(bmwModels, 'BMW');
    });

    it('should contain iX', () => {
      const ix = bmwModels.find((m) => m.model === 'iX');
      expect(ix).toBeDefined();
    });

    it('should contain i4', () => {
      const i4 = bmwModels.find((m) => m.model === 'i4');
      expect(i4).toBeDefined();
    });
  });

  describe('audiModels', () => {
    it('should have valid structure', () => {
      validateModelArrayStructure(audiModels, 'Audi');
    });

    it('should contain e-tron models', () => {
      const etronModels = audiModels.filter((m) =>
        m.model.toLowerCase().includes('e-tron')
      );
      expect(etronModels.length).toBeGreaterThan(0);
    });
  });

  describe('acuraModels', () => {
    it('should have valid structure', () => {
      validateModelArrayStructure(acuraModels, 'Acura');
    });

    it('should contain ZDX', () => {
      const zdx = acuraModels.find((m) => m.model === 'ZDX');
      expect(zdx).toBeDefined();
    });
  });

  describe('porscheModels', () => {
    it('should have valid structure', () => {
      validateModelArrayStructure(porscheModels, 'Porsche');
    });

    it('should contain Taycan', () => {
      const taycan = porscheModels.find((m) => m.model === 'Taycan');
      expect(taycan).toBeDefined();
    });
  });

  describe('hyundaiModels', () => {
    it('should have valid structure', () => {
      validateModelArrayStructure(hyundaiModels, 'Hyundai');
    });

    it('should contain IONIQ models', () => {
      const ioniqModels = hyundaiModels.filter((m) =>
        m.model.toLowerCase().includes('ioniq')
      );
      expect(ioniqModels.length).toBeGreaterThan(0);
    });
  });

  describe('kiaModels', () => {
    it('should have valid structure', () => {
      validateModelArrayStructure(kiaModels, 'Kia');
    });

    it('should contain EV models', () => {
      const evModels = kiaModels.filter(
        (m) => m.model.includes('EV') || m.model.includes('Niro')
      );
      expect(evModels.length).toBeGreaterThan(0);
    });
  });

  describe('lucidModels', () => {
    it('should have valid structure', () => {
      validateModelArrayStructure(lucidModels, 'Lucid');
    });

    it('should contain Air', () => {
      const air = lucidModels.find((m) => m.model === 'Air');
      expect(air).toBeDefined();
    });
  });

  describe('chevroletModels', () => {
    it('should have valid structure', () => {
      validateModelArrayStructure(chevroletModels, 'Chevrolet');
    });

    it('should contain Bolt models', () => {
      const boltModels = chevroletModels.filter((m) =>
        m.model.toLowerCase().includes('bolt')
      );
      expect(boltModels.length).toBeGreaterThan(0);
    });
  });

  describe('mercedesBenzModels', () => {
    it('should have valid structure', () => {
      validateModelArrayStructure(mercedesBenzModels, 'Mercedes-Benz');
    });

    it('should contain EQ models', () => {
      const eqModels = mercedesBenzModels.filter((m) =>
        m.model.startsWith('EQ')
      );
      expect(eqModels.length).toBeGreaterThan(0);
    });
  });

  describe('year data integrity across all models', () => {
    const allModels = [
      { name: 'Tesla', models: teslaModels },
      { name: 'Rivian', models: rivianModels },
      { name: 'Ford', models: fordModels },
      { name: 'BMW', models: bmwModels },
      { name: 'Audi', models: audiModels },
      { name: 'Porsche', models: porscheModels },
    ];

    it.each(allModels)(
      '$name models should have years in reasonable range (2010-2030)',
      ({ models }) => {
        const minYear = 2010;
        const maxYear = 2030;

        models.forEach((modelItem) => {
          modelItem.yearTrims.forEach((yearTrim) => {
            const year = parseInt(yearTrim.year, 10);
            expect(year).toBeGreaterThanOrEqual(minYear);
            expect(year).toBeLessThanOrEqual(maxYear);
          });
        });
      }
    );

    it.each(allModels)(
      '$name models should not have duplicate years within a model',
      ({ models }) => {
        models.forEach((modelItem) => {
          const years = modelItem.yearTrims.map((yt) => yt.year);
          const uniqueYears = new Set(years);
          expect(uniqueYears.size).toBe(years.length);
        });
      }
    );
  });
});
