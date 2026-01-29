import {
	acuraModels,
	afeelaModels,
	audiModels,
	bmwModels,
	buickModels,
	bytonModels,
	cadillacModels,
	chevroletModels,
	chryslerModels,
	dodgeModels,
	fiatModels,
	fiskerModels,
	fordModels,
	genesisModels,
	gmcModels,
	hondaModels,
	hyundaiModels,
	jaguarModels,
	jeepModels,
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
	subaruModels,
	teslaModels,
	toyotaModels,
	vinFastModels,
	volkswagenModels,
	volvoModels
} from "../typesEnumsInterfacesConsts/constants/carModelsInputItems";
import {CarYearsForInputItems} from "../typesEnumsInterfacesConsts/interfaces/inputInterfaces";
import {CarMake} from "../typesEnumsInterfacesConsts/types";
import {CarModelsArray} from "../typesEnumsInterfacesConsts/types/inputTypes";
import {CarModelsType} from "../typesEnumsInterfacesConsts/types/modelTypes";


/**
 * @description Props for the getModelYears function.
 * @property {CarMake} make - The car manufacturer/make (e.g., "Tesla", "Ford", "BMW").
 * @property {CarModelsType} model - The specific car model name (e.g., "Model 3", "Mustang Mach-E").
 */
interface GetModelYearsProps {
	make: CarMake;
	model: CarModelsType;
}

/**
 * @description Helper interface for getModelYearsHelper function parameters.
 * @property {CarModelsArray} currentCarModels - Array of car models for a specific manufacturer.
 * @property {CarModelsType} currentModel - The specific model to find years for.
 */
interface GetModelYearsHelperProps {
	currentCarModels: CarModelsArray;
	currentModel: CarModelsType;
}

/**
 * @description Extracts and formats available years for a specific car model.
 * Finds the matching model in the models array, extracts its year/trim data,
 * sorts the years alphabetically, and formats them for dropdown/picker input items.
 * @param {GetModelYearsHelperProps} params - The helper function parameters.
 * @param {CarModelsArray} params.currentCarModels - Array of car models for the manufacturer.
 * @param {CarModelsType} params.currentModel - The specific model to find years for.
 * @returns {CarYearsForInputItems[]} Array of year items formatted for input components with label and value properties.
 */
const getModelYearsHelper = ({currentCarModels, currentModel}: GetModelYearsHelperProps): CarYearsForInputItems[] => currentCarModels.find((modelItem) => modelItem.model === currentModel)
	?.yearTrims
	.sort(function (a, b) {return a.year.localeCompare(b.year)})
	.map((yearItem) => {
		return {
			label: yearItem.year,
			value: yearItem.year
		};
	}) as CarYearsForInputItems[];


/**
 * @description Retrieves available model years for a specific EV make and model combination.
 * Maps the car make to its corresponding models data and delegates to the helper function
 * to extract and format the years for that specific model.
 * @param {GetModelYearsProps} x - The function parameters.
 * @param {CarMake} x.make - The car manufacturer/make.
 * @param {CarModelsType} x.model - The specific car model name.
 * @returns {CarYearsForInputItems[]} Array of year items formatted for picker/dropdown components.
 * Returns an empty array if the make is "Others" or not recognized.
 * @example
 * // Get available years for Tesla Model 3
 * const years = getModelYears({ make: "Tesla", model: "Model 3" });
 * // Returns: [{ label: "2019", value: "2019" }, { label: "2020", value: "2020" }, ...]
 * @example
 * // Get available years for Ford Mustang Mach-E
 * const years = getModelYears({ make: "Ford", model: "Mustang Mach-E" });
 */
const getModelYears = (x: GetModelYearsProps): CarYearsForInputItems[] => {
	
	const {make, model} = x;
	switch (make) {
		case "Rivian":
			return getModelYearsHelper({currentCarModels: rivianModels, currentModel: model});
		
		case "Tesla":
			return getModelYearsHelper({currentCarModels: teslaModels, currentModel: model});
		
		case 'Ford':
			return getModelYearsHelper({currentCarModels: fordModels, currentModel: model});
		
		case 'Hyundai':
			return getModelYearsHelper({currentCarModels: hyundaiModels, currentModel: model});
		
		case 'Volvo':
			return getModelYearsHelper({currentCarModels: volvoModels, currentModel: model});
		
		case 'Volkswagen':
			return getModelYearsHelper({currentCarModels: volkswagenModels, currentModel: model});
		
		case 'VinFast':
			return getModelYearsHelper({currentCarModels: vinFastModels, currentModel: model});
		
		case 'Toyota':
			return getModelYearsHelper({currentCarModels: toyotaModels, currentModel: model});
		
		case 'Scout':
			return getModelYearsHelper({currentCarModels: scoutModels, currentModel: model});
		
		case "Subaru":
			return getModelYearsHelper({currentCarModels: subaruModels, currentModel: model});
		
		case "Smart":
			return getModelYearsHelper({currentCarModels: smartModels, currentModel: model});
		
		case "Rolls-Royce":
			return getModelYearsHelper({currentCarModels: rollsRoyceModels, currentModel: model});
		
		case "Ram":
			return getModelYearsHelper({currentCarModels: ramModels, currentModel: model});
		
		case "Porsche":
			return getModelYearsHelper({currentCarModels: porscheModels, currentModel: model});
		
		case "Polestar":
			return getModelYearsHelper({currentCarModels: polestarModels, currentModel: model});
		
		case "Nissan":
			return getModelYearsHelper({currentCarModels: nissanModels, currentModel: model});
		
		case "Mitsubishi":
			return getModelYearsHelper({currentCarModels: mitsubishiModels, currentModel: model});
		
		case "Mini":
			return getModelYearsHelper({currentCarModels: miniModels, currentModel: model});
		
		case "Mercedes-Maybach":
			return getModelYearsHelper({currentCarModels: mercedesMaybachModels, currentModel: model});
		
		case "Mercedes-Benz":
			return getModelYearsHelper({currentCarModels: mercedesBenzModels, currentModel: model});
		
		case "Mercedes-AMG":
			return getModelYearsHelper({currentCarModels: mercedesAMGModels, currentModel: model});
		
		case "Mazda":
			return getModelYearsHelper({currentCarModels: mazdaModels, currentModel: model});
		
		
		case "Maserati":
			return getModelYearsHelper({currentCarModels: maseratiModels, currentModel: model});
		
		case "Lucid":
			return getModelYearsHelper({currentCarModels: lucidModels, currentModel: model});
		
		case "Lotus":
			return getModelYearsHelper({currentCarModels: lotusModels, currentModel: model});
		
		case "Lordstown":
			return getModelYearsHelper({currentCarModels: lordstownModels, currentModel: model});
		
		case "Lincoln":
			return getModelYearsHelper({currentCarModels: lincolnModels, currentModel: model});
		
		case "Lexus":
			return getModelYearsHelper({currentCarModels: lexusModels, currentModel: model});
		
		case "Land Rover":
			return getModelYearsHelper({currentCarModels: landRoverModels, currentModel: model});
		
		case "Lamborghini":
			return getModelYearsHelper({currentCarModels: lamborghiniModels, currentModel: model});
		
		case "Kia":
			return getModelYearsHelper({currentCarModels: kiaModels, currentModel: model});
		
		case "Jeep":
			return getModelYearsHelper({currentCarModels: jeepModels, currentModel: model});
		
		case "Jaguar":
			return getModelYearsHelper({currentCarModels: jaguarModels, currentModel: model});
		
		case "Honda":
			return getModelYearsHelper({currentCarModels: hondaModels, currentModel: model});
		
		case "GMC":
			return getModelYearsHelper({currentCarModels: gmcModels, currentModel: model});
		
		case "Genesis":
			return getModelYearsHelper({currentCarModels: genesisModels, currentModel: model});
		
		case "Fisker":
			return getModelYearsHelper({currentCarModels: fiskerModels, currentModel: model});
		
		case "Fiat":
			return getModelYearsHelper({currentCarModels: fiatModels, currentModel: model});
		
		case "Dodge":
			return getModelYearsHelper({currentCarModels: dodgeModels, currentModel: model});
		
		case "Chrysler":
			return getModelYearsHelper({currentCarModels: chryslerModels, currentModel: model});
		
		case "Chevrolet":
			return getModelYearsHelper({currentCarModels: chevroletModels, currentModel: model});
		
		case "Cadillac":
			return getModelYearsHelper({currentCarModels: cadillacModels, currentModel: model});
		
		case "Byton":
			return getModelYearsHelper({currentCarModels: bytonModels, currentModel: model});
		
		case "Buick":
			return getModelYearsHelper({currentCarModels: buickModels, currentModel: model});
		
		case "BMW":
			return getModelYearsHelper({currentCarModels: bmwModels, currentModel: model});
		
		case "Acura":
			return getModelYearsHelper({currentCarModels: acuraModels, currentModel: model});
		
		case "Audi":
			return getModelYearsHelper({currentCarModels: audiModels, currentModel: model});
		
		case "Afeela":
			return getModelYearsHelper({currentCarModels: afeelaModels, currentModel: model});
		
		case "Others":
		default:
			return [];
	}
};

export {getModelYears};
