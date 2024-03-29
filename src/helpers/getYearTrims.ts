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
import {CarMake, CarModelsArray, CarModelsType, CarTrimsForInputType, CarYearsType} from "../types/evDataTypes";

type GetYearTrimsProps = {
	carMake: CarMake;
	carModel: CarModelsType;
	carYear: CarYearsType;
};

const getYearTrimsHelper = ({currentCarYear, currentModels, currentCarModel}: {
	currentCarYear: CarYearsType
	currentModels: CarModelsArray
	currentCarModel: CarModelsType
}): CarTrimsForInputType[] =>
	currentModels.find(
		(model) => model.model === currentCarModel
	)?.yearTrims
		?.find((yeaTrimItem) => yeaTrimItem.year === currentCarYear)
		?.trims
		.sort()
		.map((trim) => {
			return {
				label: trim,
				value: trim
			};
		}) as CarTrimsForInputType[]


const getYearTrims = (x: GetYearTrimsProps): CarTrimsForInputType[] => {
	const {carMake, carModel, carYear} = x;
	switch (carMake) {
		case "Rivian":
			return getYearTrimsHelper({
				currentModels: rivianModels,
				currentCarYear: carYear,
				currentCarModel: carModel
			});
		
		case "Tesla":
			return getYearTrimsHelper({
				currentModels: teslaModels,
				currentCarYear: carYear,
				currentCarModel: carModel
			})
		
		case "Ford":
			return getYearTrimsHelper({
				currentModels: fordModels,
				currentCarYear: carYear,
				currentCarModel: carModel
			})
		
		case "Hyundai":
			return getYearTrimsHelper({
				currentModels: hyundaiModels,
				currentCarYear: carYear,
				currentCarModel: carModel
			})
		
		case "Volvo":
			return getYearTrimsHelper({
				currentModels: volvoModels,
				currentCarYear: carYear,
				currentCarModel: carModel
			})
		
		case "Volkswagen":
			return getYearTrimsHelper({
				currentModels: volkswagenModels,
				currentCarYear: carYear,
				currentCarModel: carModel
			})
		
		case "VinFast":
			return getYearTrimsHelper({
				currentModels: vinFastModels,
				currentCarYear: carYear,
				currentCarModel: carModel
			})
		
		case "Toyota":
			return getYearTrimsHelper({
				currentModels: toyotaModels,
				currentCarYear: carYear,
				currentCarModel: carModel
			})
		
		case "Scout":
			return getYearTrimsHelper({
				currentModels: scoutModels,
				currentCarYear: carYear,
				currentCarModel: carModel
			})
		
		case "Subaru":
			return getYearTrimsHelper({
				currentModels: subaruModels,
				currentCarYear: carYear,
				currentCarModel: carModel
			})
		
		case "Smart":
			return getYearTrimsHelper({
				currentModels: smartModels,
				currentCarYear: carYear,
				currentCarModel: carModel
			})
		
		case "Rolls-Royce":
			return getYearTrimsHelper({
				currentModels: rollsRoyceModels,
				currentCarYear: carYear,
				currentCarModel: carModel
			})
		
		case "Ram":
			return getYearTrimsHelper({
				currentModels: ramModels,
				currentCarYear: carYear,
				currentCarModel: carModel
			})
		
		case "Porsche":
			return getYearTrimsHelper({
				currentModels: porscheModels,
				currentCarYear: carYear,
				currentCarModel: carModel
			})
		
		case "Polestar":
			return getYearTrimsHelper({
				currentModels: polestarModels,
				currentCarYear: carYear,
				currentCarModel: carModel
			})
		
		case "Nissan":
			return getYearTrimsHelper({
				currentModels: nissanModels,
				currentCarYear: carYear,
				currentCarModel: carModel
			})
		
		case "Mitsubishi":
			return getYearTrimsHelper({
				currentModels: mitsubishiModels,
				currentCarYear: carYear,
				currentCarModel: carModel
			})
		
		case "Mini":
			return getYearTrimsHelper({
				currentModels: miniModels,
				currentCarYear: carYear,
				currentCarModel: carModel
			})
		
		case "Mercedes-Maybach":
			return getYearTrimsHelper({
				currentModels: mercedesMaybachModels,
				currentCarYear: carYear,
				currentCarModel: carModel
			})
		
		case "Mercedes-Benz":
			return getYearTrimsHelper({
				currentModels: mercedesBenzModels,
				currentCarYear: carYear,
				currentCarModel: carModel
			})
		
		case "Mercedes-AMG":
			return getYearTrimsHelper({
				currentModels: mercedesAMGModels,
				currentCarYear: carYear,
				currentCarModel: carModel
			})
		
		case "Mazda":
			return getYearTrimsHelper({
				currentModels: mazdaModels,
				currentCarYear: carYear,
				currentCarModel: carModel
			})
		
		case "Maserati":
			return getYearTrimsHelper({
				currentModels: maseratiModels,
				currentCarYear: carYear,
				currentCarModel: carModel
			})
		
		case "Lucid":
			return getYearTrimsHelper({
				currentModels: lucidModels,
				currentCarYear: carYear,
				currentCarModel: carModel
			})
		
		case "Lotus":
			return getYearTrimsHelper({
				currentModels: lotusModels,
				currentCarYear: carYear,
				currentCarModel: carModel
			})
		
		case "Lordstown":
			return getYearTrimsHelper({
				currentModels: lordstownModels,
				currentCarYear: carYear,
				currentCarModel: carModel
			})
		
		case "Lincoln":
			return getYearTrimsHelper({
				currentModels: lincolnModels,
				currentCarYear: carYear,
				currentCarModel: carModel
			})
		
		case "Lexus":
			return getYearTrimsHelper({
				currentModels: lexusModels,
				currentCarYear: carYear,
				currentCarModel: carModel
			})
		
		case "Land Rover":
			return getYearTrimsHelper({
				currentModels: landRoverModels,
				currentCarYear: carYear,
				currentCarModel: carModel
			})
		
		case "Lamborghini":
			return getYearTrimsHelper({
				currentModels: lamborghiniModels,
				currentCarYear: carYear,
				currentCarModel: carModel
			})
		
		case "Kia":
			return getYearTrimsHelper({
				currentModels: kiaModels,
				currentCarYear: carYear,
				currentCarModel: carModel
			})
		
		case "Jeep":
			return getYearTrimsHelper({
				currentModels: jeepModels,
				currentCarYear: carYear,
				currentCarModel: carModel
			})
		
		case "Jaguar":
			return getYearTrimsHelper({
				currentModels: jaguarModels,
				currentCarYear: carYear,
				currentCarModel: carModel
			})
		
		case "Honda":
			return getYearTrimsHelper({
				currentModels: hondaModels,
				currentCarYear: carYear,
				currentCarModel: carModel
			})
		
		case "GMC":
			return getYearTrimsHelper({
				currentModels: gmcModels,
				currentCarYear: carYear,
				currentCarModel: carModel
			})
		
		case "Genesis":
			return getYearTrimsHelper({
				currentModels: genesisModels,
				currentCarYear: carYear,
				currentCarModel: carModel
			})
		
		case "Fisker":
			return getYearTrimsHelper({
				currentModels: fiskerModels,
				currentCarYear: carYear,
				currentCarModel: carModel
			})
		
		case "Fiat":
			return getYearTrimsHelper({
				currentModels: fiatModels,
				currentCarYear: carYear,
				currentCarModel: carModel
			})
		
		case "Dodge":
			return getYearTrimsHelper({
				currentModels: dodgeModels,
				currentCarYear: carYear,
				currentCarModel: carModel
			})
		
		case "Chrysler":
			return getYearTrimsHelper({
				currentModels: chryslerModels,
				currentCarYear: carYear,
				currentCarModel: carModel
			})
		
		case "Chevrolet":
			return getYearTrimsHelper({
				currentModels: chevroletModels,
				currentCarYear: carYear,
				currentCarModel: carModel
			})
		
		case "Cadillac":
			return getYearTrimsHelper({
				currentModels: cadillacModels,
				currentCarYear: carYear,
				currentCarModel: carModel
			})
		
		case "Byton":
			return getYearTrimsHelper({
				currentModels: bytonModels,
				currentCarYear: carYear,
				currentCarModel: carModel
			})
		
		case "Buick":
			return getYearTrimsHelper({
				currentModels: buickModels,
				currentCarYear: carYear,
				currentCarModel: carModel
			})
		
		case "BMW":
			return getYearTrimsHelper({
				currentModels: bmwModels,
				currentCarYear: carYear,
				currentCarModel: carModel
			})
		
		case "Acura":
			return getYearTrimsHelper({
				currentModels: acuraModels,
				currentCarYear: carYear,
				currentCarModel: carModel
			})
		
		case "Audi":
			return getYearTrimsHelper({
				currentModels: audiModels,
				currentCarYear: carYear,
				currentCarModel: carModel
			})
		
		case "Afeela":
			return getYearTrimsHelper({
				currentModels: afeelaModels,
				currentCarYear: carYear,
				currentCarModel: carModel
			})
		
		case "Others":
		default:
			return [];
	}
};

export {getYearTrims};
