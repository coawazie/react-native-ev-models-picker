/**
 * @fileoverview Tests for carModelsInputItems data integrity.
 * Validates the structure and content of car model data used in the EV picker.
 */

import {
  acuraModels,
  afeelaModels,
  alfaRomeoModels,
  audiModels,
  bentleyModels,
  bmwModels,
  bugattiRimacModels,
  buickModels,
  bydMotorsModels,
  bytonModels,
  cadillacModels,
  chevroletModels,
  chryslerModels,
  dodgeModels,
  ferrariModels,
  fiatModels,
  fiskerModels,
  fordModels,
  genesisModels,
  gmcModels,
  hondaModels,
  hyundaiModels,
  jaguarModels,
  jeepModels,
  kandiModels,
  karmaModels,
  kiaModels,
  lamborghiniModels,
  landRoverModels,
  lexusModels,
  lincolnModels,
  lordstownModels,
  lotusModels,
  lucidModels,
  maseratiModels,
  mazdaModels,
  mclarenModels,
  mercedesAMGModels,
  mercedesBenzModels,
  mercedesMaybachModels,
  miniModels,
  mitsubishiModels,
  nissanModels,
  polestarModels,
  porscheModels,
  ramModels,
  rivianModels,
  rollsRoyceModels,
  scoutModels,
  smartModels,
  solectriaModels,
  subaruModels,
  teslaModels,
  toyotaModels,
  vinFastModels,
  volkswagenModels,
  volvoModels
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
	
	models.forEach((modelItem) => {
		// Validate model has required properties
		expect(modelItem).toHaveProperty(
			'model',
			expect.any(String)
		);
		expect(modelItem).toHaveProperty('yearTrims');
		
		// Validate model name
		expect(typeof modelItem.model).toBe('string');
		expect(modelItem.model.trim()).not.toBe('');
		
		// Validate yearTrims array
		expect(modelItem.yearTrims).toBeInstanceOf(Array);
		expect(modelItem.yearTrims.length).toBeGreaterThan(0);
		
		modelItem.yearTrims.forEach((yearTrim) => {
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
	
	// Log make name for debugging if tests fail
	if (models.length === 0) {
		console.error(`${makeName} has no models`);
	}
};

describe('carModelsInputItems', () => {
	describe('acuraModels', () => {
		it('should have valid structure', () => {
			validateModelArrayStructure(acuraModels, 'Acura');
		});
		
		it('should contain ZDX', () => {
			const zdx = acuraModels.find((m) => m.model === 'ZDX');
			expect(zdx).toBeDefined();
		});
	});
	
	describe('afeelaModels', () => {
		it('should have valid structure', () => {
			validateModelArrayStructure(afeelaModels, 'Afeela');
		});
	});
	
	describe('alfaRomeoModels', () => {
		it('should have valid structure', () => {
			validateModelArrayStructure(alfaRomeoModels, 'Alfa Romeo');
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
	
	describe('bentleyModels', () => {
		it('should have valid structure', () => {
			validateModelArrayStructure(bentleyModels, 'Bentley');
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
	
	describe('bugattiRimacModels', () => {
		it('should have valid structure', () => {
			validateModelArrayStructure(bugattiRimacModels, 'Bugatti Rimac');
		});
	});
	
	describe('buickModels', () => {
		it('should have valid structure', () => {
			validateModelArrayStructure(buickModels, 'Buick');
		});
	});
	
	describe('bydMotorsModels', () => {
		it('should have valid structure', () => {
			validateModelArrayStructure(bydMotorsModels, 'BYD Motors');
		});
	});
	
	describe('bytonModels', () => {
		it('should have valid structure', () => {
			validateModelArrayStructure(bytonModels, 'Byton');
		});
	});
	
	describe('cadillacModels', () => {
		it('should have valid structure', () => {
			validateModelArrayStructure(cadillacModels, 'Cadillac');
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
	
	describe('chryslerModels', () => {
		it('should have valid structure', () => {
			validateModelArrayStructure(chryslerModels, 'Chrysler');
		});
	});
	
	describe('dodgeModels', () => {
		it('should have valid structure', () => {
			validateModelArrayStructure(dodgeModels, 'Dodge');
		});
	});
	
	describe('ferrariModels', () => {
		it('should have valid structure', () => {
			validateModelArrayStructure(ferrariModels, 'Ferrari');
		});
	});
	
	describe('fiatModels', () => {
		it('should have valid structure', () => {
			validateModelArrayStructure(fiatModels, 'Fiat');
		});
	});
	
	describe('fiskerModels', () => {
		it('should have valid structure', () => {
			validateModelArrayStructure(fiskerModels, 'Fisker');
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
	
	describe('genesisModels', () => {
		it('should have valid structure', () => {
			validateModelArrayStructure(genesisModels, 'Genesis');
		});
	});
	
	describe('gmcModels', () => {
		it('should have valid structure', () => {
			validateModelArrayStructure(gmcModels, 'GMC');
		});
	});
	
	describe('hondaModels', () => {
		it('should have valid structure', () => {
			validateModelArrayStructure(hondaModels, 'Honda');
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
	
	describe('jaguarModels', () => {
		it('should have valid structure', () => {
			validateModelArrayStructure(jaguarModels, 'Jaguar');
		});
	});
	
	describe('jeepModels', () => {
		it('should have valid structure', () => {
			validateModelArrayStructure(jeepModels, 'Jeep');
		});
	});
	
	describe('kandiModels', () => {
		it('should have valid structure', () => {
			validateModelArrayStructure(kandiModels, 'Kandi');
		});
	});
	
	describe('karmaModels', () => {
		it('should have valid structure', () => {
			validateModelArrayStructure(karmaModels, 'Karma');
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
	
	describe('lamborghiniModels', () => {
		it('should have valid structure', () => {
			validateModelArrayStructure(lamborghiniModels, 'Lamborghini');
		});
	});
	
	describe('landRoverModels', () => {
		it('should have valid structure', () => {
			validateModelArrayStructure(landRoverModels, 'Land Rover');
		});
	});
	
	describe('lexusModels', () => {
		it('should have valid structure', () => {
			validateModelArrayStructure(lexusModels, 'Lexus');
		});
	});
	
	describe('lincolnModels', () => {
		it('should have valid structure', () => {
			validateModelArrayStructure(lincolnModels, 'Lincoln');
		});
	});
	
	describe('lordstownModels', () => {
		it('should have valid structure', () => {
			validateModelArrayStructure(lordstownModels, 'Lordstown');
		});
	});
	
	describe('lotusModels', () => {
		it('should have valid structure', () => {
			validateModelArrayStructure(lotusModels, 'Lotus');
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
	
	describe('maseratiModels', () => {
		it('should have valid structure', () => {
			validateModelArrayStructure(maseratiModels, 'Maserati');
		});
	});
	
	describe('mazdaModels', () => {
		it('should have valid structure', () => {
			validateModelArrayStructure(mazdaModels, 'Mazda');
		});
	});
	
	describe('mclarenModels', () => {
		it('should have valid structure', () => {
			validateModelArrayStructure(mclarenModels, 'McLaren');
		});
	});
	
	describe('mercedesAMGModels', () => {
		it('should have valid structure', () => {
			validateModelArrayStructure(mercedesAMGModels, 'Mercedes-AMG');
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
	
	describe('mercedesMaybachModels', () => {
		it('should have valid structure', () => {
			validateModelArrayStructure(mercedesMaybachModels, 'Mercedes-Maybach');
		});
	});
	
	describe('miniModels', () => {
		it('should have valid structure', () => {
			validateModelArrayStructure(miniModels, 'Mini');
		});
	});
	
	describe('mitsubishiModels', () => {
		it('should have valid structure', () => {
			validateModelArrayStructure(mitsubishiModels, 'Mitsubishi');
		});
	});
	
	describe('nissanModels', () => {
		it('should have valid structure', () => {
			validateModelArrayStructure(nissanModels, 'Nissan');
		});
	});
	
	describe('polestarModels', () => {
		it('should have valid structure', () => {
			validateModelArrayStructure(polestarModels, 'Polestar');
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
	
	describe('ramModels', () => {
		it('should have valid structure', () => {
			validateModelArrayStructure(ramModels, 'Ram');
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
	
	describe('rollsRoyceModels', () => {
		it('should have valid structure', () => {
			validateModelArrayStructure(rollsRoyceModels, 'Rolls-Royce');
		});
	});
	
	describe('scoutModels', () => {
		it('should have valid structure', () => {
			validateModelArrayStructure(scoutModels, 'Scout');
		});
	});
	
	describe('smartModels', () => {
		it('should have valid structure', () => {
			validateModelArrayStructure(smartModels, 'Smart');
		});
	});
	
	describe('solectriaModels', () => {
		it('should have valid structure', () => {
			validateModelArrayStructure(solectriaModels, 'Solectria');
		});
	});
	
	describe('subaruModels', () => {
		it('should have valid structure', () => {
			validateModelArrayStructure(subaruModels, 'Subaru');
		});
	});
	
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
	
	describe('toyotaModels', () => {
		it('should have valid structure', () => {
			validateModelArrayStructure(toyotaModels, 'Toyota');
		});
	});
	
	describe('vinFastModels', () => {
		it('should have valid structure', () => {
			validateModelArrayStructure(vinFastModels, 'VinFast');
		});
	});
	
	describe('volkswagenModels', () => {
		it('should have valid structure', () => {
			validateModelArrayStructure(volkswagenModels, 'Volkswagen');
		});
	});
	
	describe('volvoModels', () => {
		it('should have valid structure', () => {
			validateModelArrayStructure(volvoModels, 'Volvo');
		});
	});
	
	describe('year data integrity across all models', () => {
		const allModels = [
			{name: 'Acura', models: acuraModels},
			{name: 'Afeela', models: afeelaModels},
			{name: 'Alfa Romeo', models: alfaRomeoModels},
			{name: 'Audi', models: audiModels},
			{name: 'Bentley', models: bentleyModels},
			{name: 'BMW', models: bmwModels},
			{name: 'Bugatti Rimac', models: bugattiRimacModels},
			{name: 'Buick', models: buickModels},
			{name: 'BYD Motors', models: bydMotorsModels},
			{name: 'Byton', models: bytonModels},
			{name: 'Cadillac', models: cadillacModels},
			{name: 'Chevrolet', models: chevroletModels},
			{name: 'Chrysler', models: chryslerModels},
			{name: 'Dodge', models: dodgeModels},
			{name: 'Ferrari', models: ferrariModels},
			{name: 'Fiat', models: fiatModels},
			{name: 'Fisker', models: fiskerModels},
			{name: 'Ford', models: fordModels},
			{name: 'Genesis', models: genesisModels},
			{name: 'GMC', models: gmcModels},
			{name: 'Honda', models: hondaModels},
			{name: 'Hyundai', models: hyundaiModels},
			{name: 'Jaguar', models: jaguarModels},
			{name: 'Jeep', models: jeepModels},
			{name: 'Kandi', models: kandiModels},
			{name: 'Karma', models: karmaModels},
			{name: 'Kia', models: kiaModels},
			{name: 'Lamborghini', models: lamborghiniModels},
			{name: 'Land Rover', models: landRoverModels},
			{name: 'Lexus', models: lexusModels},
			{name: 'Lincoln', models: lincolnModels},
			{name: 'Lordstown', models: lordstownModels},
			{name: 'Lotus', models: lotusModels},
			{name: 'Lucid', models: lucidModels},
			{name: 'Maserati', models: maseratiModels},
			{name: 'Mazda', models: mazdaModels},
			{name: 'McLaren', models: mclarenModels},
			{name: 'Mercedes-AMG', models: mercedesAMGModels},
			{name: 'Mercedes-Benz', models: mercedesBenzModels},
			{name: 'Mercedes-Maybach', models: mercedesMaybachModels},
			{name: 'Mini', models: miniModels},
			{name: 'Mitsubishi', models: mitsubishiModels},
			{name: 'Nissan', models: nissanModels},
			{name: 'Polestar', models: polestarModels},
			{name: 'Porsche', models: porscheModels},
			{name: 'Ram', models: ramModels},
			{name: 'Rivian', models: rivianModels},
			{name: 'Rolls-Royce', models: rollsRoyceModels},
			{name: 'Scout', models: scoutModels},
			{name: 'Smart', models: smartModels},
			{name: 'Solectria', models: solectriaModels},
			{name: 'Subaru', models: subaruModels},
			{name: 'Tesla', models: teslaModels},
			{name: 'Toyota', models: toyotaModels},
			{name: 'VinFast', models: vinFastModels},
			{name: 'Volkswagen', models: volkswagenModels},
			{name: 'Volvo', models: volvoModels}
		];
		
		it.each(allModels)(
			'$name models should have years in reasonable range (1995-2030)',
			({models}) => {
				const minYear = 1995;
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
			({models}) => {
				models.forEach((modelItem) => {
					const years = modelItem.yearTrims.map((yt) => yt.year);
					const uniqueYears = new Set(years);
					expect(uniqueYears.size).toBe(years.length);
				});
			}
		);
	});
});
