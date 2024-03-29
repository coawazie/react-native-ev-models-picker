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
} from "../types/evData";
import {CarMake, CarMakeModelsForInputItems, CarModelsArray} from "../types/evDataTypes";


type GetMakeModelsProps = {
	carMake: CarMake;
};

const getMakeModelsHelper = ({currentModels}: { currentModels: CarModelsArray }): CarMakeModelsForInputItems[] =>
	currentModels.sort(function (a, b) {return a.model.localeCompare(b.model)})
		.map((model) => {
			return {
				label: model.model,
				value: model.model
			};
		});


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
		
		case "Others":
		default:
			return [];
	}
};

export {getMakeModels};
