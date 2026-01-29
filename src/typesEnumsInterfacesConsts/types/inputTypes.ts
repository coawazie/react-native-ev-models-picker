/**
 * @fileoverview Type definitions for car model arrays used in input components.
 * Contains union types representing arrays of model items for all supported manufacturers.
 * @module typesEnumsInterfacesConsts/types/inputTypes
 */

import {
	AcuraModelsItem,
	AfeelaModelsItem,
	AlfaRomeoModelsItem,
	AudiModelsItem,
	BentleyModelsItem,
	BMWModelsItem,
	BugattiRimacModelsItem,
	BuickModelsItem,
	BYDMotorsModelsItem,
	BytonModelsItem,
	CadillacModelsItem,
	ChevroletModelsItem,
	ChryslerModelsItem,
	DodgeModelsItem,
	FerrariModelsItem,
	FiatModelsItem,
	FiskerModelsItem,
	FordModelsItem,
	GenesisModelsItem,
	GMCModelsItem,
	HondaModelsItem,
	HyundaiModelsItem,
	JaguarModelsItem,
	JeepModelsItem,
	KandiModelsItem,
	KarmaModelsItem,
	KiaModelsItem,
	LamborghiniModelsItem,
	LandRoverModelsItem,
	LexusModelsItem,
	LincolnModelsItem,
	LordstownModelsItem,
	LotusModelsItem,
	LucidModelsItem,
	MaseratiModelsItem,
	MazdaModelsItem,
	McLarenModelsItem,
	MercedesAMGModelsItem,
	MercedesBenzModelsItem,
	MercedesMaybachModelsItem,
	MiniModelsItem,
	MitsubishiModelsItem,
	NissanModelsItem,
	PolestarModelsItem,
	PorscheModelsItem,
	RamModelsItem,
	RivianModelsItem,
	RollsRoyceModelsItem,
	ScoutModelsItem,
	SmartModelsItem,
	SolectriaModelsItem,
	SubaruModelsItem,
	TeslaModelsItem,
	ToyotaModelsItem,
	VinFastModelsItem,
	VolkswagenModelsItem,
	VolvoModelsItem
} from "../interfaces/carModelnterfaces";

/**
 * Union type representing an array of model items from any supported car manufacturer.
 * @description Used to type collections of car models when the specific manufacturer is not known at compile time.
 * Supports all 58 car manufacturers in the EV picker library.
 */
export type CarModelsArray =
	| AcuraModelsItem[]
	| AfeelaModelsItem[]
	| AlfaRomeoModelsItem[]
	| AudiModelsItem[]
	| BentleyModelsItem[]
	| BMWModelsItem[]
	| BugattiRimacModelsItem[]
	| BuickModelsItem[]
	| BYDMotorsModelsItem[]
	| BytonModelsItem[]
	| CadillacModelsItem[]
	| ChevroletModelsItem[]
	| ChryslerModelsItem[]
	| DodgeModelsItem[]
	| FerrariModelsItem[]
	| FiatModelsItem[]
	| FiskerModelsItem[]
	| FordModelsItem[]
	| GenesisModelsItem[]
	| GMCModelsItem[]
	| HondaModelsItem[]
	| HyundaiModelsItem[]
	| JaguarModelsItem[]
	| JeepModelsItem[]
	| KandiModelsItem[]
	| KarmaModelsItem[]
	| KiaModelsItem[]
	| LamborghiniModelsItem[]
	| LandRoverModelsItem[]
	| LexusModelsItem[]
	| LincolnModelsItem[]
	| LordstownModelsItem[]
	| LotusModelsItem[]
	| LucidModelsItem[]
	| MaseratiModelsItem[]
	| MazdaModelsItem[]
	| McLarenModelsItem[]
	| MercedesAMGModelsItem[]
	| MercedesBenzModelsItem[]
	| MercedesMaybachModelsItem[]
	| MiniModelsItem[]
	| MitsubishiModelsItem[]
	| NissanModelsItem[]
	| PolestarModelsItem[]
	| PorscheModelsItem[]
	| RamModelsItem[]
	| RivianModelsItem[]
	| RollsRoyceModelsItem[]
	| ScoutModelsItem[]
	| SmartModelsItem[]
	| SolectriaModelsItem[]
	| SubaruModelsItem[]
	| TeslaModelsItem[]
	| ToyotaModelsItem[]
	| VinFastModelsItem[]
	| VolkswagenModelsItem[]
	| VolvoModelsItem[];
