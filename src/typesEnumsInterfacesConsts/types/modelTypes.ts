/**
 * @fileoverview Type definitions for all car model names by manufacturer.
 * Contains individual manufacturer model types and a unified CarModelsType union.
 * @module typesEnumsInterfacesConsts/types/modelTypes
 */

import {
	ACURA_MODELS,
	AFEELA_MODELS,
	ALFA_ROMEO_MODELS,
	AUDI_MODELS,
	BENTLEY_MODELS,
	BMW_MODELS,
	BUGATTI_RIMAC_MODELS,
	BUICK_MODELS,
	BYD_MOTORS_MODELS,
	BYTON_MODELS,
	CADILLAC_MODELS,
	CHEVROLET_MODELS,
	CHRYSLER_MODELS,
	DODGE_MODELS,
	FERRARI_MODELS,
	FIAT_MODELS,
	FISKER_MODELS,
	FORD_MODELS,
	GENESIS_MODELS,
	GMC_MODELS,
	HONDA_MODELS,
	HYUNDAI_MODELS,
	JAGUAR_MODELS,
	JEEP_MODELS,
	KANDI_MODELS,
	KARMA_MODELS,
	KIA_MODELS,
	LAMBORGHINI_MODELS,
	LAND_ROVER_MODELS,
	LEXUS_MODELS,
	LINCOLN_MODELS,
	LORDSTOWN_MODELS,
	LOTUS_MODELS,
	LUCID_MODELS,
	MASERATI_MODELS,
	MAZDA_MODELS,
	MCLAREN_MODELS,
	MERCEDES_AMG_MODELS,
	MERCEDES_BENZ_MODELS,
	MERCEDES_MAYBACH_MODELS,
	MINI_MODELS,
	MITSUBISHI_MODELS,
	NISSAN_MODELS,
	POLESTAR_MODELS,
	PORSCHE_MODELS,
	RAM_MODELS,
	RIVIAN_MODELS,
	ROLLS_ROYCE_MODELS,
	SCOUT_MODELS,
	SMART_MODELS,
	SOLECTRIA_MODELS,
	SUBARU_MODELS,
	TESLA_MODELS,
	TOYOTA_MODELS,
	VINFAST_MODELS,
	VOLKSWAGEN_MODELS,
	VOLVO_MODELS
} from "../constants/carModelsConstants";

/**
 * Union type of all Acura EV model names.
 * @description Derived from ACURA_MODELS constant array.
 */
type AcuraModels = (typeof ACURA_MODELS)[number];

/**
 * Union type of all Afeela EV model names.
 * @description Derived from AFEELA_MODELS constant array.
 */
type AfeelaModels = (typeof AFEELA_MODELS)[number];

/**
 * Union type of all Alfa Romeo EV model names.
 * @description Derived from ALFA_ROMEO_MODELS constant array.
 */
type AlfaRomeoModels = (typeof ALFA_ROMEO_MODELS)[number];

/**
 * Union type of all Audi EV model names.
 * @description Derived from AUDI_MODELS constant array.
 */
type AudiModels = (typeof AUDI_MODELS)[number];

/**
 * Union type of all Bentley EV model names.
 * @description Derived from BENTLEY_MODELS constant array.
 */
type BentleyModels = (typeof BENTLEY_MODELS)[number];

/**
 * Union type of all BMW EV model names.
 * @description Derived from BMW_MODELS constant array.
 */
type BMWModels = (typeof BMW_MODELS)[number];

/**
 * Union type of all Bugatti Rimac EV model names.
 * @description Derived from BUGATTI_RIMAC_MODELS constant array.
 */
type BugattiRimacModels = (typeof BUGATTI_RIMAC_MODELS)[number];

/**
 * Union type of all Buick EV model names.
 * @description Derived from BUICK_MODELS constant array.
 */
type BuickModels = (typeof BUICK_MODELS)[number];

/**
 * Union type of all BYD Motors EV model names.
 * @description Derived from BYD_MOTORS_MODELS constant array.
 */
type BYDMotorsModels = (typeof BYD_MOTORS_MODELS)[number];

/**
 * Union type of all Byton EV model names.
 * @description Derived from BYTON_MODELS constant array.
 */
type BytonModels = (typeof BYTON_MODELS)[number];

/**
 * Union type of all Cadillac EV model names.
 * @description Derived from CADILLAC_MODELS constant array.
 */
type CadillacModels = (typeof CADILLAC_MODELS)[number];

/**
 * Union type of all Chevrolet EV model names.
 * @description Derived from CHEVROLET_MODELS constant array.
 */
type ChevroletModels = (typeof CHEVROLET_MODELS)[number];

/**
 * Union type of all Chrysler EV model names.
 * @description Derived from CHRYSLER_MODELS constant array.
 */
type ChryslerModels = (typeof CHRYSLER_MODELS)[number];

/**
 * Union type of all Dodge EV model names.
 * @description Derived from DODGE_MODELS constant array.
 */
type DodgeModels = (typeof DODGE_MODELS)[number];

/**
 * Union type of all Ferrari EV model names.
 * @description Derived from FERRARI_MODELS constant array.
 */
type FerrariModels = (typeof FERRARI_MODELS)[number];

/**
 * Union type of all Fiat EV model names.
 * @description Derived from FIAT_MODELS constant array.
 */
type FiatModels = (typeof FIAT_MODELS)[number];

/**
 * Union type of all Fisker EV model names.
 * @description Derived from FISKER_MODELS constant array.
 */
type FiskerModels = (typeof FISKER_MODELS)[number];

/**
 * Union type of all Ford EV model names.
 * @description Derived from FORD_MODELS constant array.
 */
type FordModels = (typeof FORD_MODELS)[number];

/**
 * Union type of all Genesis EV model names.
 * @description Derived from GENESIS_MODELS constant array.
 */
type GenesisModels = (typeof GENESIS_MODELS)[number];

/**
 * Union type of all GMC EV model names.
 * @description Derived from GMC_MODELS constant array.
 */
type GMCModels = (typeof GMC_MODELS)[number];

/**
 * Union type of all Honda EV model names.
 * @description Derived from HONDA_MODELS constant array.
 */
type HondaModels = (typeof HONDA_MODELS)[number];

/**
 * Union type of all Hyundai EV model names.
 * @description Derived from HYUNDAI_MODELS constant array.
 */
type HyundaiModels = (typeof HYUNDAI_MODELS)[number];

/**
 * Union type of all Jaguar EV model names.
 * @description Derived from JAGUAR_MODELS constant array.
 */
type JaguarModels = (typeof JAGUAR_MODELS)[number];

/**
 * Union type of all Jeep EV model names.
 * @description Derived from JEEP_MODELS constant array.
 */
type JeepModels = (typeof JEEP_MODELS)[number];

/**
 * Union type of all Kandi EV model names.
 * @description Derived from KANDI_MODELS constant array.
 */
type KandiModels = (typeof KANDI_MODELS)[number];

/**
 * Union type of all Karma EV model names.
 * @description Derived from KARMA_MODELS constant array.
 */
type KarmaModels = (typeof KARMA_MODELS)[number];

/**
 * Union type of all Kia EV model names.
 * @description Derived from KIA_MODELS constant array.
 */
type KiaModels = (typeof KIA_MODELS)[number];

/**
 * Union type of all Lamborghini EV model names.
 * @description Derived from LAMBORGHINI_MODELS constant array.
 */
type LamborghiniModels = (typeof LAMBORGHINI_MODELS)[number];

/**
 * Union type of all Land Rover EV model names.
 * @description Derived from LAND_ROVER_MODELS constant array.
 */
type LandRoverModels = (typeof LAND_ROVER_MODELS)[number];

/**
 * Union type of all Lexus EV model names.
 * @description Derived from LEXUS_MODELS constant array.
 */
type LexusModels = (typeof LEXUS_MODELS)[number];

/**
 * Union type of all Lincoln EV model names.
 * @description Derived from LINCOLN_MODELS constant array.
 */
type LincolnModels = (typeof LINCOLN_MODELS)[number];

/**
 * Union type of all Lordstown EV model names.
 * @description Derived from LORDSTOWN_MODELS constant array.
 */
type LordstownModels = (typeof LORDSTOWN_MODELS)[number];

/**
 * Union type of all Lotus EV model names.
 * @description Derived from LOTUS_MODELS constant array.
 */
type LotusModels = (typeof LOTUS_MODELS)[number];

/**
 * Union type of all Lucid EV model names.
 * @description Derived from LUCID_MODELS constant array.
 */
type LucidModels = (typeof LUCID_MODELS)[number];

/**
 * Union type of all Maserati EV model names.
 * @description Derived from MASERATI_MODELS constant array.
 */
type MaseratiModels = (typeof MASERATI_MODELS)[number];

/**
 * Union type of all Mazda EV model names.
 * @description Derived from MAZDA_MODELS constant array.
 */
type MazdaModels = (typeof MAZDA_MODELS)[number];

/**
 * Union type of all McLaren EV model names.
 * @description Derived from MCLAREN_MODELS constant array.
 */
type McLarenModels = (typeof MCLAREN_MODELS)[number];

/**
 * Union type of all Mercedes-AMG EV model names.
 * @description Derived from MERCEDES_AMG_MODELS constant array.
 */
type MercedesAMGModels = (typeof MERCEDES_AMG_MODELS)[number];

/**
 * Union type of all Mercedes-Benz EV model names.
 * @description Derived from MERCEDES_BENZ_MODELS constant array.
 */
type MercedesBenzModels = (typeof MERCEDES_BENZ_MODELS)[number];

/**
 * Union type of all Mercedes-Maybach EV model names.
 * @description Derived from MERCEDES_MAYBACH_MODELS constant array.
 */
type MercedesMaybachModels = (typeof MERCEDES_MAYBACH_MODELS)[number];

/**
 * Union type of all Mini EV model names.
 * @description Derived from MINI_MODELS constant array.
 */
type MiniModels = (typeof MINI_MODELS)[number];

/**
 * Union type of all Mitsubishi EV model names.
 * @description Derived from MITSUBISHI_MODELS constant array.
 */
type MitsubishiModels = (typeof MITSUBISHI_MODELS)[number];

/**
 * Union type of all Nissan EV model names.
 * @description Derived from NISSAN_MODELS constant array.
 */
type NissanModels = (typeof NISSAN_MODELS)[number];

/**
 * Union type of all Polestar EV model names.
 * @description Derived from POLESTAR_MODELS constant array.
 */
type PolestarModels = (typeof POLESTAR_MODELS)[number];

/**
 * Union type of all Porsche EV model names.
 * @description Derived from PORSCHE_MODELS constant array.
 */
type PorscheModels = (typeof PORSCHE_MODELS)[number];

/**
 * Union type of all Ram EV model names.
 * @description Derived from RAM_MODELS constant array.
 */
type RamModels = (typeof RAM_MODELS)[number];

/**
 * Union type of all Rivian EV model names.
 * @description Derived from RIVIAN_MODELS constant array.
 */
type RivianModels = (typeof RIVIAN_MODELS)[number];

/**
 * Union type of all Rolls-Royce EV model names.
 * @description Derived from ROLLS_ROYCE_MODELS constant array.
 */
type RollsRoyceModels = (typeof ROLLS_ROYCE_MODELS)[number];

/**
 * Union type of all Scout EV model names.
 * @description Derived from SCOUT_MODELS constant array.
 */
type ScoutModels = (typeof SCOUT_MODELS)[number];

/**
 * Union type of all Smart EV model names.
 * @description Derived from SMART_MODELS constant array.
 */
type SmartModels = (typeof SMART_MODELS)[number];

/**
 * Union type of all Solectria EV model names.
 * @description Derived from SOLECTRIA_MODELS constant array.
 */
type SolectriaModels = (typeof SOLECTRIA_MODELS)[number];

/**
 * Union type of all Subaru EV model names.
 * @description Derived from SUBARU_MODELS constant array.
 */
type SubaruModels = (typeof SUBARU_MODELS)[number];

/**
 * Union type of all Tesla EV model names.
 * @description Derived from TESLA_MODELS constant array.
 */
type TeslaModels = (typeof TESLA_MODELS)[number];

/**
 * Union type of all Toyota EV model names.
 * @description Derived from TOYOTA_MODELS constant array.
 */
type ToyotaModels = (typeof TOYOTA_MODELS)[number];

/**
 * Union type of all VinFast EV model names.
 * @description Derived from VINFAST_MODELS constant array.
 */
type VinFastModels = (typeof VINFAST_MODELS)[number];

/**
 * Union type of all Volkswagen EV model names.
 * @description Derived from VOLKSWAGEN_MODELS constant array.
 */
type VolkswagenModels = (typeof VOLKSWAGEN_MODELS)[number];

/**
 * Union type of all Volvo EV model names.
 * @description Derived from VOLVO_MODELS constant array.
 */
type VolvoModels = (typeof VOLVO_MODELS)[number];

export type {
	AcuraModels,
	AfeelaModels,
	AlfaRomeoModels,
	AudiModels,
	BentleyModels,
	BMWModels,
	BugattiRimacModels,
	BuickModels,
	BYDMotorsModels,
	BytonModels,
	CadillacModels,
	ChevroletModels,
	ChryslerModels,
	DodgeModels,
	FerrariModels,
	FiatModels,
	FiskerModels,
	FordModels,
	GenesisModels,
	GMCModels,
	HondaModels,
	HyundaiModels,
	JaguarModels,
	JeepModels,
	KandiModels,
	KarmaModels,
	KiaModels,
	LamborghiniModels,
	LandRoverModels,
	LexusModels,
	LincolnModels,
	LordstownModels,
	LotusModels,
	LucidModels,
	MaseratiModels,
	MazdaModels,
	McLarenModels,
	MercedesAMGModels,
	MercedesBenzModels,
	MercedesMaybachModels,
	MiniModels,
	MitsubishiModels,
	NissanModels,
	PolestarModels,
	PorscheModels,
	RamModels,
	RivianModels,
	RollsRoyceModels,
	ScoutModels,
	SmartModels,
	SolectriaModels,
	SubaruModels,
	TeslaModels,
	ToyotaModels,
	VinFastModels,
	VolkswagenModels,
	VolvoModels
};

/**
 * Union type representing any valid car model name across all manufacturers.
 * @description Includes all 58 manufacturer model types plus "none" for unselected state.
 * Used when the specific manufacturer is not known at compile time.
 */
export type CarModelsType =
	| AcuraModels
	| AfeelaModels
	| AlfaRomeoModels
	| AudiModels
	| BentleyModels
	| BMWModels
	| BugattiRimacModels
	| BuickModels
	| BYDMotorsModels
	| BytonModels
	| CadillacModels
	| ChevroletModels
	| ChryslerModels
	| DodgeModels
	| FerrariModels
	| FiatModels
	| FiskerModels
	| FordModels
	| GenesisModels
	| GMCModels
	| HondaModels
	| HyundaiModels
	| JaguarModels
	| JeepModels
	| KandiModels
	| KarmaModels
	| KiaModels
	| LamborghiniModels
	| LandRoverModels
	| LexusModels
	| LincolnModels
	| LordstownModels
	| LotusModels
	| LucidModels
	| MaseratiModels
	| MazdaModels
	| McLarenModels
	| MercedesAMGModels
	| MercedesBenzModels
	| MercedesMaybachModels
	| MiniModels
	| MitsubishiModels
	| NissanModels
	| PolestarModels
	| PorscheModels
	| RamModels
	| RivianModels
	| RollsRoyceModels
	| ScoutModels
	| SmartModels
	| SolectriaModels
	| SubaruModels
	| TeslaModels
	| ToyotaModels
	| VinFastModels
	| VolkswagenModels
	| VolvoModels
	| "none";
