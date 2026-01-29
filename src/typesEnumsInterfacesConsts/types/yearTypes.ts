/**
 * @fileoverview Type definitions for all car model years by manufacturer.
 * Contains individual manufacturer year types and a unified CarYearsType union.
 * @module typesEnumsInterfacesConsts/types/yearTypes
 */

import {
	ACURA_YEARS,
	AFEELA_YEARS,
	ALFA_ROMEO_YEARS,
	AUDI_YEARS,
	BENTLEY_YEARS,
	BMW_YEARS,
	BUGATTI_RIMAC_YEARS,
	BUICK_YEARS,
	BYD_MOTORS_YEARS,
	BYTON_YEARS,
	CADILLAC_YEARS,
	CHEVROLET_YEARS,
	CHRYSLER_YEARS,
	DODGE_YEARS,
	FERRARI_YEARS,
	FIAT_YEARS,
	FISKER_YEARS,
	FORD_YEARS,
	GENESIS_YEARS,
	GMC_YEARS,
	HONDA_YEARS,
	HYUNDAI_YEARS,
	JAGUAR_YEARS,
	JEEP_YEARS,
	KANDI_YEARS,
	KARMA_YEARS,
	KIA_YEARS,
	LAMBORGHINI_YEARS,
	LAND_ROVER_YEARS,
	LEXUS_YEARS,
	LINCOLN_YEARS,
	LORDSTOWN_YEARS,
	LOTUS_YEARS,
	LUCID_YEARS,
	MASERATI_YEARS,
	MAZDA_YEARS,
	MCLAREN_YEARS,
	MERCEDES_AMG_YEARS,
	MERCEDES_BENZ_YEARS,
	MERCEDES_MAYBACH_YEARS,
	MINI_YEARS,
	MITSUBISHI_YEARS,
	NISSAN_YEARS,
	POLESTAR_YEARS,
	PORSCHE_YEARS,
	RAM_YEARS,
	RIVIAN_YEARS,
	ROLLS_ROYCE_YEARS,
	SCOUT_YEARS,
	SMART_YEARS,
	SOLECTRIA_YEARS,
	SUBARU_YEARS,
	TESLA_YEARS,
	TOYOTA_YEARS,
	VINFAST_YEARS,
	VOLKSWAGEN_YEARS,
	VOLVO_YEARS
} from "../constants/carYearContants";

/**
 * Union type of all Acura EV model years.
 * @description Derived from ACURA_YEARS constant array.
 */
type AcuraYears = (typeof ACURA_YEARS)[number];

/**
 * Union type of all Afeela EV model years.
 * @description Derived from AFEELA_YEARS constant array.
 */
type AfeelaYears = (typeof AFEELA_YEARS)[number];

/**
 * Union type of all Alfa Romeo EV model years.
 * @description Derived from ALFA_ROMEO_YEARS constant array.
 */
type AlfaRomeoYears = (typeof ALFA_ROMEO_YEARS)[number];

/**
 * Union type of all Audi EV model years.
 * @description Derived from AUDI_YEARS constant array.
 */
type AudiYears = (typeof AUDI_YEARS)[number];

/**
 * Union type of all Bentley EV model years.
 * @description Derived from BENTLEY_YEARS constant array.
 */
type BentleyYears = (typeof BENTLEY_YEARS)[number];

/**
 * Union type of all BMW EV model years.
 * @description Derived from BMW_YEARS constant array.
 */
type BMWYears = (typeof BMW_YEARS)[number];

/**
 * Union type of all Bugatti Rimac EV model years.
 * @description Derived from BUGATTI_RIMAC_YEARS constant array.
 */
type BugattiRimacYears = (typeof BUGATTI_RIMAC_YEARS)[number];

/**
 * Union type of all Buick EV model years.
 * @description Derived from BUICK_YEARS constant array.
 */
type BuickYears = (typeof BUICK_YEARS)[number];

/**
 * Union type of all BYD Motors EV model years.
 * @description Derived from BYD_MOTORS_YEARS constant array.
 */
type BYDMotorsYears = (typeof BYD_MOTORS_YEARS)[number];

/**
 * Union type of all Byton EV model years.
 * @description Derived from BYTON_YEARS constant array.
 */
type BytonYears = (typeof BYTON_YEARS)[number];

/**
 * Union type of all Cadillac EV model years.
 * @description Derived from CADILLAC_YEARS constant array.
 */
type CadillacYears = (typeof CADILLAC_YEARS)[number];

/**
 * Union type of all Chevrolet EV model years.
 * @description Derived from CHEVROLET_YEARS constant array.
 */
type ChevroletYears = (typeof CHEVROLET_YEARS)[number];

/**
 * Union type of all Chrysler EV model years.
 * @description Derived from CHRYSLER_YEARS constant array.
 */
type ChryslerYears = (typeof CHRYSLER_YEARS)[number];

/**
 * Union type of all Dodge EV model years.
 * @description Derived from DODGE_YEARS constant array.
 */
type DodgeYears = (typeof DODGE_YEARS)[number];

/**
 * Union type of all Ferrari EV model years.
 * @description Derived from FERRARI_YEARS constant array.
 */
type FerrariYears = (typeof FERRARI_YEARS)[number];

/**
 * Union type of all Fiat EV model years.
 * @description Derived from FIAT_YEARS constant array.
 */
type FiatYears = (typeof FIAT_YEARS)[number];

/**
 * Union type of all Fisker EV model years.
 * @description Derived from FISKER_YEARS constant array.
 */
type FiskerYears = (typeof FISKER_YEARS)[number];

/**
 * Union type of all Ford EV model years.
 * @description Derived from FORD_YEARS constant array.
 */
type FordYears = (typeof FORD_YEARS)[number];

/**
 * Union type of all Genesis EV model years.
 * @description Derived from GENESIS_YEARS constant array.
 */
type GenesisYears = (typeof GENESIS_YEARS)[number];

/**
 * Union type of all GMC EV model years.
 * @description Derived from GMC_YEARS constant array.
 */
type GMCYears = (typeof GMC_YEARS)[number];

/**
 * Union type of all Honda EV model years.
 * @description Derived from HONDA_YEARS constant array.
 */
type HondaYears = (typeof HONDA_YEARS)[number];

/**
 * Union type of all Hyundai EV model years.
 * @description Derived from HYUNDAI_YEARS constant array.
 */
type HyundaiYears = (typeof HYUNDAI_YEARS)[number];

/**
 * Union type of all Jaguar EV model years.
 * @description Derived from JAGUAR_YEARS constant array.
 */
type JaguarYears = (typeof JAGUAR_YEARS)[number];

/**
 * Union type of all Jeep EV model years.
 * @description Derived from JEEP_YEARS constant array.
 */
type JeepYears = (typeof JEEP_YEARS)[number];

/**
 * Union type of all Kandi EV model years.
 * @description Derived from KANDI_YEARS constant array.
 */
type KandiYears = (typeof KANDI_YEARS)[number];

/**
 * Union type of all Karma EV model years.
 * @description Derived from KARMA_YEARS constant array.
 */
type KarmaYears = (typeof KARMA_YEARS)[number];

/**
 * Union type of all Kia EV model years.
 * @description Derived from KIA_YEARS constant array.
 */
type KiaYears = (typeof KIA_YEARS)[number];

/**
 * Union type of all Lamborghini EV model years.
 * @description Derived from LAMBORGHINI_YEARS constant array.
 */
type LamborghiniYears = (typeof LAMBORGHINI_YEARS)[number];

/**
 * Union type of all Land Rover EV model years.
 * @description Derived from LAND_ROVER_YEARS constant array.
 */
type LandRoverYears = (typeof LAND_ROVER_YEARS)[number];

/**
 * Union type of all Lexus EV model years.
 * @description Derived from LEXUS_YEARS constant array.
 */
type LexusYears = (typeof LEXUS_YEARS)[number];

/**
 * Union type of all Lincoln EV model years.
 * @description Derived from LINCOLN_YEARS constant array.
 */
type LincolnYears = (typeof LINCOLN_YEARS)[number];

/**
 * Union type of all Lordstown EV model years.
 * @description Derived from LORDSTOWN_YEARS constant array.
 */
type LordstownYears = (typeof LORDSTOWN_YEARS)[number];

/**
 * Union type of all Lotus EV model years.
 * @description Derived from LOTUS_YEARS constant array.
 */
type LotusYears = (typeof LOTUS_YEARS)[number];

/**
 * Union type of all Lucid EV model years.
 * @description Derived from LUCID_YEARS constant array.
 */
type LucidYears = (typeof LUCID_YEARS)[number];

/**
 * Union type of all Maserati EV model years.
 * @description Derived from MASERATI_YEARS constant array.
 */
type MaseratiYears = (typeof MASERATI_YEARS)[number];

/**
 * Union type of all Mazda EV model years.
 * @description Derived from MAZDA_YEARS constant array.
 */
type MazdaYears = (typeof MAZDA_YEARS)[number];

/**
 * Union type of all McLaren EV model years.
 * @description Derived from MCLAREN_YEARS constant array.
 */
type McLarenYears = (typeof MCLAREN_YEARS)[number];

/**
 * Union type of all Mercedes-AMG EV model years.
 * @description Derived from MERCEDES_AMG_YEARS constant array.
 */
type MercedesAMGYears = (typeof MERCEDES_AMG_YEARS)[number];

/**
 * Union type of all Mercedes-Benz EV model years.
 * @description Derived from MERCEDES_BENZ_YEARS constant array.
 */
type MercedesBenzYears = (typeof MERCEDES_BENZ_YEARS)[number];

/**
 * Union type of all Mercedes-Maybach EV model years.
 * @description Derived from MERCEDES_MAYBACH_YEARS constant array.
 */
type MercedesMaybachYears = (typeof MERCEDES_MAYBACH_YEARS)[number];

/**
 * Union type of all Mini EV model years.
 * @description Derived from MINI_YEARS constant array.
 */
type MiniYears = (typeof MINI_YEARS)[number];

/**
 * Union type of all Mitsubishi EV model years.
 * @description Derived from MITSUBISHI_YEARS constant array.
 */
type MitsubishiYears = (typeof MITSUBISHI_YEARS)[number];

/**
 * Union type of all Nissan EV model years.
 * @description Derived from NISSAN_YEARS constant array.
 */
type NissanYears = (typeof NISSAN_YEARS)[number];

/**
 * Union type of all Polestar EV model years.
 * @description Derived from POLESTAR_YEARS constant array.
 */
type PolestarYears = (typeof POLESTAR_YEARS)[number];

/**
 * Union type of all Porsche EV model years.
 * @description Derived from PORSCHE_YEARS constant array.
 */
type PorscheYears = (typeof PORSCHE_YEARS)[number];

/**
 * Union type of all Ram EV model years.
 * @description Derived from RAM_YEARS constant array.
 */
type RamYears = (typeof RAM_YEARS)[number];

/**
 * Union type of all Rivian EV model years.
 * @description Derived from RIVIAN_YEARS constant array.
 */
type RivianYears = (typeof RIVIAN_YEARS)[number];

/**
 * Union type of all Rolls-Royce EV model years.
 * @description Derived from ROLLS_ROYCE_YEARS constant array.
 */
type RollsRoyceYears = (typeof ROLLS_ROYCE_YEARS)[number];

/**
 * Union type of all Scout EV model years.
 * @description Derived from SCOUT_YEARS constant array.
 */
type ScoutYears = (typeof SCOUT_YEARS)[number];

/**
 * Union type of all Smart EV model years.
 * @description Derived from SMART_YEARS constant array.
 */
type SmartYears = (typeof SMART_YEARS)[number];

/**
 * Union type of all Solectria EV model years.
 * @description Derived from SOLECTRIA_YEARS constant array.
 */
type SolectriaYears = (typeof SOLECTRIA_YEARS)[number];

/**
 * Union type of all Subaru EV model years.
 * @description Derived from SUBARU_YEARS constant array.
 */
type SubaruYears = (typeof SUBARU_YEARS)[number];

/**
 * Union type of all Tesla EV model years.
 * @description Derived from TESLA_YEARS constant array.
 */
type TeslaYears = (typeof TESLA_YEARS)[number];

/**
 * Union type of all Toyota EV model years.
 * @description Derived from TOYOTA_YEARS constant array.
 */
type ToyotaYears = (typeof TOYOTA_YEARS)[number];

/**
 * Union type of all VinFast EV model years.
 * @description Derived from VINFAST_YEARS constant array.
 */
type VinFastYears = (typeof VINFAST_YEARS)[number];

/**
 * Union type of all Volkswagen EV model years.
 * @description Derived from VOLKSWAGEN_YEARS constant array.
 */
type VolkswagenYears = (typeof VOLKSWAGEN_YEARS)[number];

/**
 * Union type of all Volvo EV model years.
 * @description Derived from VOLVO_YEARS constant array.
 */
type VolvoYears = (typeof VOLVO_YEARS)[number];

export type {
	AcuraYears,
	AfeelaYears,
	AlfaRomeoYears,
	AudiYears,
	BentleyYears,
	BMWYears,
	BugattiRimacYears,
	BuickYears,
	BYDMotorsYears,
	BytonYears,
	CadillacYears,
	ChevroletYears,
	ChryslerYears,
	DodgeYears,
	FerrariYears,
	FiatYears,
	FiskerYears,
	FordYears,
	GenesisYears,
	GMCYears,
	HondaYears,
	HyundaiYears,
	JaguarYears,
	JeepYears,
	KandiYears,
	KarmaYears,
	KiaYears,
	LamborghiniYears,
	LandRoverYears,
	LexusYears,
	LincolnYears,
	LordstownYears,
	LotusYears,
	LucidYears,
	MaseratiYears,
	MazdaYears,
	McLarenYears,
	MercedesAMGYears,
	MercedesBenzYears,
	MercedesMaybachYears,
	MiniYears,
	MitsubishiYears,
	NissanYears,
	PolestarYears,
	PorscheYears,
	RamYears,
	RivianYears,
	RollsRoyceYears,
	ScoutYears,
	SmartYears,
	SolectriaYears,
	SubaruYears,
	TeslaYears,
	ToyotaYears,
	VinFastYears,
	VolkswagenYears,
	VolvoYears
};

/**
 * Union type representing any valid car model year across all manufacturers.
 * @description Includes all 58 manufacturer year types plus "none" for unselected state.
 * Used when the specific manufacturer is not known at compile time.
 */
export type CarYearsType =
	| AcuraYears
	| AfeelaYears
	| AlfaRomeoYears
	| AudiYears
	| BentleyYears
	| BMWYears
	| BugattiRimacYears
	| BuickYears
	| BYDMotorsYears
	| BytonYears
	| CadillacYears
	| ChevroletYears
	| ChryslerYears
	| DodgeYears
	| FerrariYears
	| FiatYears
	| FiskerYears
	| FordYears
	| GenesisYears
	| GMCYears
	| HondaYears
	| HyundaiYears
	| JaguarYears
	| JeepYears
	| KandiYears
	| KarmaYears
	| KiaYears
	| LamborghiniYears
	| LandRoverYears
	| LexusYears
	| LincolnYears
	| LordstownYears
	| LotusYears
	| LucidYears
	| MaseratiYears
	| MazdaYears
	| McLarenYears
	| MercedesAMGYears
	| MercedesBenzYears
	| MercedesMaybachYears
	| MiniYears
	| MitsubishiYears
	| NissanYears
	| PolestarYears
	| PorscheYears
	| RamYears
	| RivianYears
	| RollsRoyceYears
	| ScoutYears
	| SmartYears
	| SolectriaYears
	| SubaruYears
	| TeslaYears
	| ToyotaYears
	| VinFastYears
	| VolkswagenYears
	| VolvoYears
	| "none";
