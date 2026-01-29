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
} from "../typesEnumsInterfacesConsts/constants/carModelsInputItems";
import {CarMakeModelsForInputItems} from "../typesEnumsInterfacesConsts/interfaces/inputInterfaces";
import {CarMake} from "../typesEnumsInterfacesConsts/types";
import {CarModelsArray} from "../typesEnumsInterfacesConsts/types/inputTypes";


/**
 * @description Props for the getMakeModels function.
 * @property {CarMake} carMake - The car manufacturer/make to retrieve models for (e.g., "Tesla", "Ford", "BMW").
 */
type GetMakeModelsProps = {
	carMake: CarMake;
};

/**
 * @description Helper type for getMakeModelsHelper function parameters.
 * @property {CarModelsArray} currentModels - Array of car models for a specific manufacturer.
 */
type GetMakeModelsHelperProps = {
	currentModels: CarModelsArray;
};

/**
 * @description Sorts and formats car models for dropdown/picker input items.
 * Takes an array of car models, sorts them alphabetically by model name,
 * and transforms them into a format suitable for input components.
 * @param {GetMakeModelsHelperProps} params - The helper function parameters.
 * @param {CarModelsArray} params.currentModels - Array of car models to process.
 * @returns {CarMakeModelsForInputItems[]} Array of model items formatted for input components with label and value
 *   properties.
 */
const getMakeModelsHelper = ({currentModels}: GetMakeModelsHelperProps): CarMakeModelsForInputItems[] =>
	currentModels.sort(function (a, b) {return a.model.localeCompare(b.model)})
		.map((model) => {
			return {
				label: model.model,
				value: model.model
			};
		});


/**
 * @description Retrieves all available EV models for a specific car manufacturer.
 * Maps the car make to its corresponding models data and formats them for use
 * in picker/dropdown components. Models are sorted alphabetically by name.
 * @param {GetMakeModelsProps} x - The function parameters.
 * @param {CarMake} x.carMake - The car manufacturer/make to retrieve models for.
 * @returns {CarMakeModelsForInputItems[]} Array of model items formatted for picker/dropdown components.
 * Returns an empty array if the make is "Others" or not recognized.
 * @example
 * // Get all Tesla models
 * const models = getMakeModels({ carMake: "Tesla" });
 * // Returns: [{ label: "Model 3", value: "Model 3" }, { label: "Model S", value: "Model S" }, ...]
 * @example
 * // Get all Ford EV models
 * const models = getMakeModels({ carMake: "Ford" });
 * // Returns: [{ label: "F-150 Lightning", value: "F-150 Lightning" }, { label: "Mustang Mach-E", value: "Mustang
 *   Mach-E" }, ...]
 */
const getMakeModels = (x: GetMakeModelsProps): CarMakeModelsForInputItems[] => {
	const {carMake} = x;
	switch (carMake) {
		case "Tesla":
			return getMakeModelsHelper({currentModels: teslaModels});
		
		case "Rivian":
			return getMakeModelsHelper({currentModels: rivianModels});
		
		case "Ford":
			return getMakeModelsHelper({currentModels: fordModels});
		
		case 'Hyundai':
			return getMakeModelsHelper({currentModels: hyundaiModels});
		
		case 'Volvo':
			return getMakeModelsHelper({currentModels: volvoModels});
		
		case 'Volkswagen':
			return getMakeModelsHelper({currentModels: volkswagenModels});
		
		case 'VinFast':
			return getMakeModelsHelper({currentModels: vinFastModels});
		case 'Toyota':
			return getMakeModelsHelper({currentModels: toyotaModels});
		
		case 'Scout':
			return getMakeModelsHelper({currentModels: scoutModels});
		
		case 'Subaru':
			return getMakeModelsHelper({currentModels: subaruModels});
		
		
		case 'Smart':
			return getMakeModelsHelper({currentModels: smartModels});
		
		case 'Rolls-Royce':
			return getMakeModelsHelper({currentModels: rollsRoyceModels});
		
		case 'Ram':
			return getMakeModelsHelper({currentModels: ramModels});
		
		case 'Porsche':
			return getMakeModelsHelper({currentModels: porscheModels});
		
		case 'Polestar':
			return getMakeModelsHelper({currentModels: polestarModels});
		
		case 'Nissan':
			return getMakeModelsHelper({currentModels: nissanModels});
		
		case 'Mitsubishi':
			return getMakeModelsHelper({currentModels: mitsubishiModels});
		
		case 'Mini':
			return getMakeModelsHelper({currentModels: miniModels});
		
		case 'Mercedes-Maybach':
			return getMakeModelsHelper({currentModels: mercedesMaybachModels});
		
		case 'Mercedes-Benz':
			return getMakeModelsHelper({currentModels: mercedesBenzModels});
		
		case 'Mercedes-AMG':
			return getMakeModelsHelper({currentModels: mercedesAMGModels});
		
		case 'Mazda':
			return getMakeModelsHelper({currentModels: mazdaModels});
		
		case 'Maserati':
			return getMakeModelsHelper({currentModels: maseratiModels});
		
		case "Lucid":
			return getMakeModelsHelper({currentModels: lucidModels});
		
		case 'Lotus':
			return getMakeModelsHelper({currentModels: lotusModels});
		
		case 'Lordstown':
			return getMakeModelsHelper({currentModels: lordstownModels});
		
		case 'Lincoln':
			return getMakeModelsHelper({currentModels: lincolnModels});
		
		case 'Lexus':
			return getMakeModelsHelper({currentModels: lexusModels});
		
		case 'Land Rover':
			return getMakeModelsHelper({currentModels: landRoverModels});
		
		case 'Lamborghini':
			return getMakeModelsHelper({currentModels: lamborghiniModels});
		
		case 'Kia':
			return getMakeModelsHelper({currentModels: kiaModels});
		
		case 'Jeep':
			return getMakeModelsHelper({currentModels: jeepModels});
		
		case 'Jaguar':
			return getMakeModelsHelper({currentModels: jaguarModels});
		
		case 'Honda':
			return getMakeModelsHelper({currentModels: hondaModels});
		
		case 'GMC':
			return getMakeModelsHelper({currentModels: gmcModels});
		
		case 'Genesis':
			return getMakeModelsHelper({currentModels: genesisModels});
		
		case 'Fisker':
			return getMakeModelsHelper({currentModels: fiskerModels});
		
		case 'Fiat':
			return getMakeModelsHelper({currentModels: fiatModels});
		
		case 'Dodge':
			return getMakeModelsHelper({currentModels: dodgeModels});
		
		case 'Chrysler':
			return getMakeModelsHelper({currentModels: chryslerModels});
		
		case 'Chevrolet':
			return getMakeModelsHelper({currentModels: chevroletModels});
		
		case 'Cadillac':
			return getMakeModelsHelper({currentModels: cadillacModels});
		
		case 'Byton':
			return getMakeModelsHelper({currentModels: bytonModels});
		
		case "Buick":
			return getMakeModelsHelper({currentModels: buickModels});
		
		case "BMW":
			return getMakeModelsHelper({currentModels: bmwModels});
		
		case "Acura":
			return getMakeModelsHelper({currentModels: acuraModels});
		
		case "Audi":
			return getMakeModelsHelper({currentModels: audiModels});
		
		case "Afeela":
			return getMakeModelsHelper({currentModels: afeelaModels});
		
		case "Alfa Romeo":
			return getMakeModelsHelper({currentModels: alfaRomeoModels});
		
		case "Bentley":
			return getMakeModelsHelper({currentModels: bentleyModels});
		
		case "Bugatti Rimac":
			return getMakeModelsHelper({currentModels: bugattiRimacModels});
		
		case "BYD Motors":
			return getMakeModelsHelper({currentModels: bydMotorsModels});
		
		case "Ferrari":
			return getMakeModelsHelper({currentModels: ferrariModels});
		case "Kandi":
			return getMakeModelsHelper({currentModels: kandiModels});
		case "Karma":
			return getMakeModelsHelper({currentModels: karmaModels});
		case "McLaren":
			return getMakeModelsHelper({currentModels: mclarenModels});
		case "Solectria":
			return getMakeModelsHelper({currentModels: solectriaModels});
		
		case "Others":
		default:
			return [];
	}
};

export {getMakeModels};
