/**
 * @fileoverview Type definitions for all car trim levels by manufacturer.
 * Contains individual manufacturer trim types and a unified CarTrimType union.
 * @module typesEnumsInterfacesConsts/types/trimTypes
 */

import {
	ACURA_TRIMS,
	AFEELA_TRIMS,
	ALFA_ROMEO_TRIMS,
	AUDI_TRIMS,
	BENTLEY_TRIMS,
	BMW_TRIMS,
	BUGATTI_RIMAC_TRIMS,
	BUICK_TRIMS,
	BYD_MOTORS_TRIMS,
	BYTON_TRIMS,
	CADILLAC_TRIMS,
	CHEVROLET_TRIMS,
	CHRYSLER_TRIMS,
	DODGE_TRIMS,
	FERRARI_TRIMS,
	FIAT_TRIMS,
	FISKER_TRIMS,
	FORD_TRIMS,
	GENESIS_TRIMS,
	GMC_TRIMS,
	HONDA_TRIMS,
	HYUNDAI_TRIMS,
	JAGUAR_TRIMS,
	JEEP_TRIMS,
	KANDI_TRIMS,
	KARMA_TRIMS,
	KIA_TRIMS,
	LAMBORGHINI_TRIMS,
	LAND_ROVER_TRIMS,
	LEXUS_TRIMS,
	LINCOLN_TRIMS,
	LORDSTOWN_TRIMS,
	LOTUS_TRIMS,
	LUCID_TRIMS,
	MASERATI_TRIMS,
	MAZDA_TRIMS,
	MCLAREN_TRIMS,
	MERCEDES_AMG_TRIMS,
	MERCEDES_BENZ_TRIMS,
	MERCEDES_MAYBACH_TRIMS,
	MINI_TRIMS,
	MITSUBISHI_TRIMS,
	NISSAN_TRIMS,
	POLESTAR_TRIMS,
	PORSCHE_TRIMS,
	RAM_TRIMS,
	RIVIAN_TRIMS,
	ROLLS_ROYCE_TRIMS,
	SCOUT_TRIMS,
	SMART_TRIMS,
	SOLECTRIA_TRIMS,
	SUBARU_TRIMS,
	TESLA_TRIMS,
	TOYOTA_TRIMS,
	VINFAST_TRIMS,
	VOLKSWAGEN_TRIMS,
	VOLVO_TRIMS
} from "../constants/carTrimsConstants";

/**
 * Union type of all Acura EV trim levels.
 * @description Derived from ACURA_TRIMS constant array.
 */
type AcuraTrims = (typeof ACURA_TRIMS)[number];

/**
 * Union type of all Afeela EV trim levels.
 * @description Derived from AFEELA_TRIMS constant array.
 */
type AfeelaTrims = (typeof AFEELA_TRIMS)[number];

/**
 * Union type of all Alfa Romeo EV trim levels.
 * @description Derived from ALFA_ROMEO_TRIMS constant array.
 */
type AlfaRomeoTrims = (typeof ALFA_ROMEO_TRIMS)[number];

/**
 * Union type of all Audi EV trim levels.
 * @description Derived from AUDI_TRIMS constant array.
 */
type AudiTrims = (typeof AUDI_TRIMS)[number];

/**
 * Union type of all Bentley EV trim levels.
 * @description Derived from BENTLEY_TRIMS constant array.
 */
type BentleyTrims = (typeof BENTLEY_TRIMS)[number];

/**
 * Union type of all BMW EV trim levels.
 * @description Derived from BMW_TRIMS constant array.
 */
type BMWTrims = (typeof BMW_TRIMS)[number];

/**
 * Union type of all Bugatti Rimac EV trim levels.
 * @description Derived from BUGATTI_RIMAC_TRIMS constant array.
 */
type BugattiRimacTrims = (typeof BUGATTI_RIMAC_TRIMS)[number];

/**
 * Union type of all Buick EV trim levels.
 * @description Derived from BUICK_TRIMS constant array.
 */
type BuickTrims = (typeof BUICK_TRIMS)[number];

/**
 * Union type of all BYD Motors EV trim levels.
 * @description Derived from BYD_MOTORS_TRIMS constant array.
 */
type BYDMotorsTrims = (typeof BYD_MOTORS_TRIMS)[number];

/**
 * Union type of all Byton EV trim levels.
 * @description Derived from BYTON_TRIMS constant array.
 */
type BytonTrims = (typeof BYTON_TRIMS)[number];

/**
 * Union type of all Cadillac EV trim levels.
 * @description Derived from CADILLAC_TRIMS constant array.
 */
type CadillacTrims = (typeof CADILLAC_TRIMS)[number];

/**
 * Union type of all Chevrolet EV trim levels.
 * @description Derived from CHEVROLET_TRIMS constant array.
 */
type ChevroletTrims = (typeof CHEVROLET_TRIMS)[number];

/**
 * Union type of all Chrysler EV trim levels.
 * @description Derived from CHRYSLER_TRIMS constant array.
 */
type ChryslerTrims = (typeof CHRYSLER_TRIMS)[number];

/**
 * Union type of all Dodge EV trim levels.
 * @description Derived from DODGE_TRIMS constant array.
 */
type DodgeTrims = (typeof DODGE_TRIMS)[number];

/**
 * Union type of all Ferrari EV trim levels.
 * @description Derived from FERRARI_TRIMS constant array.
 */
type FerrariTrims = (typeof FERRARI_TRIMS)[number];

/**
 * Union type of all Fiat EV trim levels.
 * @description Derived from FIAT_TRIMS constant array.
 */
type FiatTrims = (typeof FIAT_TRIMS)[number];

/**
 * Union type of all Fisker EV trim levels.
 * @description Derived from FISKER_TRIMS constant array.
 */
type FiskerTrims = (typeof FISKER_TRIMS)[number];

/**
 * Union type of all Ford EV trim levels.
 * @description Derived from FORD_TRIMS constant array.
 */
type FordTrims = (typeof FORD_TRIMS)[number];

/**
 * Union type of all Genesis EV trim levels.
 * @description Derived from GENESIS_TRIMS constant array.
 */
type GenesisTrims = (typeof GENESIS_TRIMS)[number];

/**
 * Union type of all GMC EV trim levels.
 * @description Derived from GMC_TRIMS constant array.
 */
type GMCTrims = (typeof GMC_TRIMS)[number];

/**
 * Union type of all Honda EV trim levels.
 * @description Derived from HONDA_TRIMS constant array.
 */
type HondaTrims = (typeof HONDA_TRIMS)[number];

/**
 * Union type of all Hyundai EV trim levels.
 * @description Derived from HYUNDAI_TRIMS constant array.
 */
type HyundaiTrims = (typeof HYUNDAI_TRIMS)[number];

/**
 * Union type of all Jaguar EV trim levels.
 * @description Derived from JAGUAR_TRIMS constant array.
 */
type JaguarTrims = (typeof JAGUAR_TRIMS)[number];

/**
 * Union type of all Jeep EV trim levels.
 * @description Derived from JEEP_TRIMS constant array.
 */
type JeepTrims = (typeof JEEP_TRIMS)[number];

/**
 * Union type of all Kandi EV trim levels.
 * @description Derived from KANDI_TRIMS constant array.
 */
type KandiTrims = (typeof KANDI_TRIMS)[number];

/**
 * Union type of all Karma EV trim levels.
 * @description Derived from KARMA_TRIMS constant array.
 */
type KarmaTrims = (typeof KARMA_TRIMS)[number];

/**
 * Union type of all Kia EV trim levels.
 * @description Derived from KIA_TRIMS constant array.
 */
type KiaTrims = (typeof KIA_TRIMS)[number];

/**
 * Union type of all Lamborghini EV trim levels.
 * @description Derived from LAMBORGHINI_TRIMS constant array.
 */
type LamborghiniTrims = (typeof LAMBORGHINI_TRIMS)[number];

/**
 * Union type of all Land Rover EV trim levels.
 * @description Derived from LAND_ROVER_TRIMS constant array.
 */
type LandRoverTrims = (typeof LAND_ROVER_TRIMS)[number];

/**
 * Union type of all Lexus EV trim levels.
 * @description Derived from LEXUS_TRIMS constant array.
 */
type LexusTrims = (typeof LEXUS_TRIMS)[number];

/**
 * Union type of all Lincoln EV trim levels.
 * @description Derived from LINCOLN_TRIMS constant array.
 */
type LincolnTrims = (typeof LINCOLN_TRIMS)[number];

/**
 * Union type of all Lordstown EV trim levels.
 * @description Derived from LORDSTOWN_TRIMS constant array.
 */
type LordstownTrims = (typeof LORDSTOWN_TRIMS)[number];

/**
 * Union type of all Lotus EV trim levels.
 * @description Derived from LOTUS_TRIMS constant array.
 */
type LotusTrims = (typeof LOTUS_TRIMS)[number];

/**
 * Union type of all Lucid EV trim levels.
 * @description Derived from LUCID_TRIMS constant array.
 */
type LucidTrims = (typeof LUCID_TRIMS)[number];

/**
 * Union type of all Maserati EV trim levels.
 * @description Derived from MASERATI_TRIMS constant array.
 */
type MaseratiTrims = (typeof MASERATI_TRIMS)[number];

/**
 * Union type of all Mazda EV trim levels.
 * @description Derived from MAZDA_TRIMS constant array.
 */
type MazdaTrims = (typeof MAZDA_TRIMS)[number];

/**
 * Union type of all McLaren EV trim levels.
 * @description Derived from MCLAREN_TRIMS constant array.
 */
type McLarenTrims = (typeof MCLAREN_TRIMS)[number];

/**
 * Union type of all Mercedes-AMG EV trim levels.
 * @description Derived from MERCEDES_AMG_TRIMS constant array.
 */
type MercedesAMGTrims = (typeof MERCEDES_AMG_TRIMS)[number];

/**
 * Union type of all Mercedes-Benz EV trim levels.
 * @description Derived from MERCEDES_BENZ_TRIMS constant array.
 */
type MercedesBenzTrims = (typeof MERCEDES_BENZ_TRIMS)[number];

/**
 * Union type of all Mercedes-Maybach EV trim levels.
 * @description Derived from MERCEDES_MAYBACH_TRIMS constant array.
 */
type MercedesMaybachTrims = (typeof MERCEDES_MAYBACH_TRIMS)[number];

/**
 * Union type of all Mini EV trim levels.
 * @description Derived from MINI_TRIMS constant array.
 */
type MiniTrims = (typeof MINI_TRIMS)[number];

/**
 * Union type of all Mitsubishi EV trim levels.
 * @description Derived from MITSUBISHI_TRIMS constant array.
 */
type MitsubishiTrims = (typeof MITSUBISHI_TRIMS)[number];

/**
 * Union type of all Nissan EV trim levels.
 * @description Derived from NISSAN_TRIMS constant array.
 */
type NissanTrims = (typeof NISSAN_TRIMS)[number];

/**
 * Union type of all Polestar EV trim levels.
 * @description Derived from POLESTAR_TRIMS constant array.
 */
type PolestarTrims = (typeof POLESTAR_TRIMS)[number];

/**
 * Union type of all Porsche EV trim levels.
 * @description Derived from PORSCHE_TRIMS constant array.
 */
type PorscheTrims = (typeof PORSCHE_TRIMS)[number];

/**
 * Union type of all Ram EV trim levels.
 * @description Derived from RAM_TRIMS constant array.
 */
type RamTrims = (typeof RAM_TRIMS)[number];

/**
 * Union type of all Rivian EV trim levels.
 * @description Derived from RIVIAN_TRIMS constant array.
 */
type RivianTrims = (typeof RIVIAN_TRIMS)[number];

/**
 * Union type of all Rolls-Royce EV trim levels.
 * @description Derived from ROLLS_ROYCE_TRIMS constant array.
 */
type RollsRoyceTrims = (typeof ROLLS_ROYCE_TRIMS)[number];

/**
 * Union type of all Scout EV trim levels.
 * @description Derived from SCOUT_TRIMS constant array.
 */
type ScoutTrims = (typeof SCOUT_TRIMS)[number];

/**
 * Union type of all Smart EV trim levels.
 * @description Derived from SMART_TRIMS constant array.
 */
type SmartTrims = (typeof SMART_TRIMS)[number];

/**
 * Union type of all Solectria EV trim levels.
 * @description Derived from SOLECTRIA_TRIMS constant array.
 */
type SolectriaTrims = (typeof SOLECTRIA_TRIMS)[number];

/**
 * Union type of all Subaru EV trim levels.
 * @description Derived from SUBARU_TRIMS constant array.
 */
type SubaruTrims = (typeof SUBARU_TRIMS)[number];

/**
 * Union type of all Tesla EV trim levels.
 * @description Derived from TESLA_TRIMS constant array.
 */
type TeslaTrims = (typeof TESLA_TRIMS)[number];

/**
 * Union type of all Toyota EV trim levels.
 * @description Derived from TOYOTA_TRIMS constant array.
 */
type ToyotaTrims = (typeof TOYOTA_TRIMS)[number];

/**
 * Union type of all VinFast EV trim levels.
 * @description Derived from VINFAST_TRIMS constant array.
 */
type VinFastTrims = (typeof VINFAST_TRIMS)[number];

/**
 * Union type of all Volkswagen EV trim levels.
 * @description Derived from VOLKSWAGEN_TRIMS constant array.
 */
type VolkswagenTrims = (typeof VOLKSWAGEN_TRIMS)[number];

/**
 * Union type of all Volvo EV trim levels.
 * @description Derived from VOLVO_TRIMS constant array.
 */
type VolvoTrims = (typeof VOLVO_TRIMS)[number];

export type {
	AcuraTrims,
	AfeelaTrims,
	AlfaRomeoTrims,
	AudiTrims,
	BentleyTrims,
	BMWTrims,
	BugattiRimacTrims,
	BuickTrims,
	BYDMotorsTrims,
	BytonTrims,
	CadillacTrims,
	ChevroletTrims,
	ChryslerTrims,
	DodgeTrims,
	FerrariTrims,
	FiatTrims,
	FiskerTrims,
	FordTrims,
	GenesisTrims,
	GMCTrims,
	HondaTrims,
	HyundaiTrims,
	JaguarTrims,
	JeepTrims,
	KandiTrims,
	KarmaTrims,
	KiaTrims,
	LamborghiniTrims,
	LandRoverTrims,
	LexusTrims,
	LincolnTrims,
	LordstownTrims,
	LotusTrims,
	LucidTrims,
	MaseratiTrims,
	MazdaTrims,
	McLarenTrims,
	MercedesAMGTrims,
	MercedesBenzTrims,
	MercedesMaybachTrims,
	MiniTrims,
	MitsubishiTrims,
	NissanTrims,
	PolestarTrims,
	PorscheTrims,
	RamTrims,
	RivianTrims,
	RollsRoyceTrims,
	ScoutTrims,
	SmartTrims,
	SolectriaTrims,
	SubaruTrims,
	TeslaTrims,
	ToyotaTrims,
	VinFastTrims,
	VolkswagenTrims,
	VolvoTrims
};

/**
 * Union type representing any valid car trim level across all manufacturers.
 * @description Includes all 58 manufacturer trim types plus "none" for unselected state.
 * Used when the specific manufacturer is not known at compile time.
 */
export type CarTrimType =
	| AcuraTrims
	| AfeelaTrims
	| AlfaRomeoTrims
	| AudiTrims
	| BentleyTrims
	| BMWTrims
	| BugattiRimacTrims
	| BuickTrims
	| BYDMotorsTrims
	| BytonTrims
	| CadillacTrims
	| ChevroletTrims
	| ChryslerTrims
	| DodgeTrims
	| FerrariTrims
	| FiatTrims
	| FiskerTrims
	| FordTrims
	| GenesisTrims
	| GMCTrims
	| HondaTrims
	| HyundaiTrims
	| JaguarTrims
	| JeepTrims
	| KandiTrims
	| KarmaTrims
	| KiaTrims
	| LamborghiniTrims
	| LandRoverTrims
	| LexusTrims
	| LincolnTrims
	| LordstownTrims
	| LotusTrims
	| LucidTrims
	| MaseratiTrims
	| MazdaTrims
	| McLarenTrims
	| MercedesAMGTrims
	| MercedesBenzTrims
	| MercedesMaybachTrims
	| MiniTrims
	| MitsubishiTrims
	| NissanTrims
	| PolestarTrims
	| PorscheTrims
	| RamTrims
	| RivianTrims
	| RollsRoyceTrims
	| ScoutTrims
	| SmartTrims
	| SolectriaTrims
	| SubaruTrims
	| TeslaTrims
	| ToyotaTrims
	| VinFastTrims
	| VolkswagenTrims
	| VolvoTrims
	| "none";
