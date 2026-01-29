/**
 * @fileoverview Interface definitions for car model year-trim combinations by manufacturer.
 * Each interface associates a model year with its available trim levels for a specific manufacturer.
 * @module typesEnumsInterfacesConsts/interfaces/carTrimInterfaces
 */

import {
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
} from "../types/trimTypes";
import {
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
} from "../types/yearTypes";

/**
 * Represents year-trim combinations for Acura EVs.
 * @description Maps a specific model year to its available trim levels for Acura vehicles.
 */
interface AcuraModelYearTrims {
	/** The model year. */
	year: AcuraYears;
	/** Array of available trim levels for this year. */
	trims: AcuraTrims[];
}

/**
 * Represents year-trim combinations for Afeela EVs.
 * @description Maps a specific model year to its available trim levels for Afeela vehicles.
 */
interface AfeelaModelYearTrims {
	/** The model year. */
	year: AfeelaYears;
	/** Array of available trim levels for this year. */
	trims: AfeelaTrims[];
}

/**
 * Represents year-trim combinations for Alfa Romeo EVs.
 * @description Maps a specific model year to its available trim levels for Alfa Romeo vehicles.
 */
interface AlfaRomeoModelYearTrims {
	/** The model year. */
	year: AlfaRomeoYears;
	/** Array of available trim levels for this year. */
	trims: AlfaRomeoTrims[];
}

/**
 * Represents year-trim combinations for Audi EVs.
 * @description Maps a specific model year to its available trim levels for Audi vehicles.
 */
interface AudiModelYearTrims {
	/** The model year. */
	year: AudiYears;
	/** Array of available trim levels for this year. */
	trims: AudiTrims[];
}

/**
 * Represents year-trim combinations for Bentley EVs.
 * @description Maps a specific model year to its available trim levels for Bentley vehicles.
 */
interface BentleyModelYearTrims {
	/** The model year. */
	year: BentleyYears;
	/** Array of available trim levels for this year. */
	trims: BentleyTrims[];
}

/**
 * Represents year-trim combinations for BMW EVs.
 * @description Maps a specific model year to its available trim levels for BMW vehicles.
 */
interface BMWModelYearTrims {
	/** The model year. */
	year: BMWYears;
	/** Array of available trim levels for this year. */
	trims: BMWTrims[];
}

/**
 * Represents year-trim combinations for Bugatti Rimac EVs.
 * @description Maps a specific model year to its available trim levels for Bugatti Rimac vehicles.
 */
interface BugattiRimacModelYearTrims {
	/** The model year. */
	year: BugattiRimacYears;
	/** Array of available trim levels for this year. */
	trims: BugattiRimacTrims[];
}

/**
 * Represents year-trim combinations for Buick EVs.
 * @description Maps a specific model year to its available trim levels for Buick vehicles.
 */
interface BuickModelYearTrims {
	/** The model year. */
	year: BuickYears;
	/** Array of available trim levels for this year. */
	trims: BuickTrims[];
}

/**
 * Represents year-trim combinations for BYD Motors EVs.
 * @description Maps a specific model year to its available trim levels for BYD Motors vehicles.
 */
interface BYDMotorsModelYearTrims {
	/** The model year. */
	year: BYDMotorsYears;
	/** Array of available trim levels for this year. */
	trims: BYDMotorsTrims[];
}

/**
 * Represents year-trim combinations for Byton EVs.
 * @description Maps a specific model year to its available trim levels for Byton vehicles.
 */
interface BytonModelYearTrims {
	/** The model year. */
	year: BytonYears;
	/** Array of available trim levels for this year. */
	trims: BytonTrims[];
}

/**
 * Represents year-trim combinations for Cadillac EVs.
 * @description Maps a specific model year to its available trim levels for Cadillac vehicles.
 */
interface CadillacModelYearTrims {
	/** The model year. */
	year: CadillacYears;
	/** Array of available trim levels for this year. */
	trims: CadillacTrims[];
}

/**
 * Represents year-trim combinations for Chevrolet EVs.
 * @description Maps a specific model year to its available trim levels for Chevrolet vehicles.
 */
interface ChevroletModelYearTrims {
	/** The model year. */
	year: ChevroletYears;
	/** Array of available trim levels for this year. */
	trims: ChevroletTrims[];
}

/**
 * Represents year-trim combinations for Chrysler EVs.
 * @description Maps a specific model year to its available trim levels for Chrysler vehicles.
 */
interface ChryslerModelYearTrims {
	/** The model year. */
	year: ChryslerYears;
	/** Array of available trim levels for this year. */
	trims: ChryslerTrims[];
}

/**
 * Represents year-trim combinations for Dodge EVs.
 * @description Maps a specific model year to its available trim levels for Dodge vehicles.
 */
interface DodgeModelYearTrims {
	/** The model year. */
	year: DodgeYears;
	/** Array of available trim levels for this year. */
	trims: DodgeTrims[];
}

/**
 * Represents year-trim combinations for Ferrari EVs.
 * @description Maps a specific model year to its available trim levels for Ferrari vehicles.
 */
interface FerrariModelYearTrims {
	/** The model year. */
	year: FerrariYears;
	/** Array of available trim levels for this year. */
	trims: FerrariTrims[];
}

/**
 * Represents year-trim combinations for Fiat EVs.
 * @description Maps a specific model year to its available trim levels for Fiat vehicles.
 */
interface FiatModelYearTrims {
	/** The model year. */
	year: FiatYears;
	/** Array of available trim levels for this year. */
	trims: FiatTrims[];
}

/**
 * Represents year-trim combinations for Fisker EVs.
 * @description Maps a specific model year to its available trim levels for Fisker vehicles.
 */
interface FiskerModelYearTrims {
	/** The model year. */
	year: FiskerYears;
	/** Array of available trim levels for this year. */
	trims: FiskerTrims[];
}

/**
 * Represents year-trim combinations for Ford EVs.
 * @description Maps a specific model year to its available trim levels for Ford vehicles.
 */
interface FordModelYearTrims {
	/** The model year. */
	year: FordYears;
	/** Array of available trim levels for this year. */
	trims: FordTrims[];
}

/**
 * Represents year-trim combinations for Genesis EVs.
 * @description Maps a specific model year to its available trim levels for Genesis vehicles.
 */
interface GenesisModelYearTrims {
	/** The model year. */
	year: GenesisYears;
	/** Array of available trim levels for this year. */
	trims: GenesisTrims[];
}

/**
 * Represents year-trim combinations for GMC EVs.
 * @description Maps a specific model year to its available trim levels for GMC vehicles.
 */
interface GMCModelYearTrims {
	/** The model year. */
	year: GMCYears;
	/** Array of available trim levels for this year. */
	trims: GMCTrims[];
}

/**
 * Represents year-trim combinations for Honda EVs.
 * @description Maps a specific model year to its available trim levels for Honda vehicles.
 */
interface HondaModelYearTrims {
	/** The model year. */
	year: HondaYears;
	/** Array of available trim levels for this year. */
	trims: HondaTrims[];
}

/**
 * Represents year-trim combinations for Hyundai EVs.
 * @description Maps a specific model year to its available trim levels for Hyundai vehicles.
 */
interface HyundaiModelYearTrims {
	/** The model year. */
	year: HyundaiYears;
	/** Array of available trim levels for this year. */
	trims: HyundaiTrims[];
}

/**
 * Represents year-trim combinations for Jaguar EVs.
 * @description Maps a specific model year to its available trim levels for Jaguar vehicles.
 */
interface JaguarModelYearTrims {
	/** The model year. */
	year: JaguarYears;
	/** Array of available trim levels for this year. */
	trims: JaguarTrims[];
}

/**
 * Represents year-trim combinations for Jeep EVs.
 * @description Maps a specific model year to its available trim levels for Jeep vehicles.
 */
interface JeepModelYearTrims {
	/** The model year. */
	year: JeepYears;
	/** Array of available trim levels for this year. */
	trims: JeepTrims[];
}

/**
 * Represents year-trim combinations for Kandi EVs.
 * @description Maps a specific model year to its available trim levels for Kandi vehicles.
 */
interface KandiModelYearTrims {
	/** The model year. */
	year: KandiYears;
	/** Array of available trim levels for this year. */
	trims: KandiTrims[];
}

/**
 * Represents year-trim combinations for Karma EVs.
 * @description Maps a specific model year to its available trim levels for Karma vehicles.
 */
interface KarmaModelYearTrims {
	/** The model year. */
	year: KarmaYears;
	/** Array of available trim levels for this year. */
	trims: KarmaTrims[];
}

/**
 * Represents year-trim combinations for Kia EVs.
 * @description Maps a specific model year to its available trim levels for Kia vehicles.
 */
interface KiaModelYearTrims {
	/** The model year. */
	year: KiaYears;
	/** Array of available trim levels for this year. */
	trims: KiaTrims[];
}

/**
 * Represents year-trim combinations for Lamborghini EVs.
 * @description Maps a specific model year to its available trim levels for Lamborghini vehicles.
 */
interface LamborghiniModelYearTrims {
	/** The model year. */
	year: LamborghiniYears;
	/** Array of available trim levels for this year. */
	trims: LamborghiniTrims[];
}

/**
 * Represents year-trim combinations for Land Rover EVs.
 * @description Maps a specific model year to its available trim levels for Land Rover vehicles.
 */
interface LandRoverModelYearTrims {
	/** The model year. */
	year: LandRoverYears;
	/** Array of available trim levels for this year. */
	trims: LandRoverTrims[];
}

/**
 * Represents year-trim combinations for Lexus EVs.
 * @description Maps a specific model year to its available trim levels for Lexus vehicles.
 */
interface LexusModelYearTrims {
	/** The model year. */
	year: LexusYears;
	/** Array of available trim levels for this year. */
	trims: LexusTrims[];
}

/**
 * Represents year-trim combinations for Lincoln EVs.
 * @description Maps a specific model year to its available trim levels for Lincoln vehicles.
 */
interface LincolnModelYearTrims {
	/** The model year. */
	year: LincolnYears;
	/** Array of available trim levels for this year. */
	trims: LincolnTrims[];
}

/**
 * Represents year-trim combinations for Lordstown EVs.
 * @description Maps a specific model year to its available trim levels for Lordstown vehicles.
 */
interface LordstownModelYearTrims {
	/** The model year. */
	year: LordstownYears;
	/** Array of available trim levels for this year. */
	trims: LordstownTrims[];
}

/**
 * Represents year-trim combinations for Lotus EVs.
 * @description Maps a specific model year to its available trim levels for Lotus vehicles.
 */
interface LotusModelYearTrims {
	/** The model year. */
	year: LotusYears;
	/** Array of available trim levels for this year. */
	trims: LotusTrims[];
}

/**
 * Represents year-trim combinations for Lucid EVs.
 * @description Maps a specific model year to its available trim levels for Lucid vehicles.
 */
interface LucidModelYearTrims {
	/** The model year. */
	year: LucidYears;
	/** Array of available trim levels for this year. */
	trims: LucidTrims[];
}

/**
 * Represents year-trim combinations for Maserati EVs.
 * @description Maps a specific model year to its available trim levels for Maserati vehicles.
 */
interface MaseratiModelYearTrims {
	/** The model year. */
	year: MaseratiYears;
	/** Array of available trim levels for this year. */
	trims: MaseratiTrims[];
}

/**
 * Represents year-trim combinations for Mazda EVs.
 * @description Maps a specific model year to its available trim levels for Mazda vehicles.
 */
interface MazdaModelYearTrims {
	/** The model year. */
	year: MazdaYears;
	/** Array of available trim levels for this year. */
	trims: MazdaTrims[];
}

/**
 * Represents year-trim combinations for McLaren EVs.
 * @description Maps a specific model year to its available trim levels for McLaren vehicles.
 */
interface McLarenModelYearTrims {
	/** The model year. */
	year: McLarenYears;
	/** Array of available trim levels for this year. */
	trims: McLarenTrims[];
}

/**
 * Represents year-trim combinations for Mercedes-AMG EVs.
 * @description Maps a specific model year to its available trim levels for Mercedes-AMG vehicles.
 */
interface MercedesAMGModelYearTrims {
	/** The model year. */
	year: MercedesAMGYears;
	/** Array of available trim levels for this year. */
	trims: MercedesAMGTrims[];
}

/**
 * Represents year-trim combinations for Mercedes-Benz EVs.
 * @description Maps a specific model year to its available trim levels for Mercedes-Benz vehicles.
 */
interface MercedesBenzModelYearTrims {
	/** The model year. */
	year: MercedesBenzYears;
	/** Array of available trim levels for this year. */
	trims: MercedesBenzTrims[];
}

/**
 * Represents year-trim combinations for Mercedes-Maybach EVs.
 * @description Maps a specific model year to its available trim levels for Mercedes-Maybach vehicles.
 */
interface MercedesMaybachModelYearTrims {
	/** The model year. */
	year: MercedesMaybachYears;
	/** Array of available trim levels for this year. */
	trims: MercedesMaybachTrims[];
}

/**
 * Represents year-trim combinations for Mini EVs.
 * @description Maps a specific model year to its available trim levels for Mini vehicles.
 */
interface MiniModelYearTrims {
	/** The model year. */
	year: MiniYears;
	/** Array of available trim levels for this year. */
	trims: MiniTrims[];
}

/**
 * Represents year-trim combinations for Mitsubishi EVs.
 * @description Maps a specific model year to its available trim levels for Mitsubishi vehicles.
 */
interface MitsubishiModelYearTrims {
	/** The model year. */
	year: MitsubishiYears;
	/** Array of available trim levels for this year. */
	trims: MitsubishiTrims[];
}

/**
 * Represents year-trim combinations for Nissan EVs.
 * @description Maps a specific model year to its available trim levels for Nissan vehicles.
 */
interface NissanModelYearTrims {
	/** The model year. */
	year: NissanYears;
	/** Array of available trim levels for this year. */
	trims: NissanTrims[];
}

/**
 * Represents year-trim combinations for Polestar EVs.
 * @description Maps a specific model year to its available trim levels for Polestar vehicles.
 */
interface PolestarModelYearTrims {
	/** The model year. */
	year: PolestarYears;
	/** Array of available trim levels for this year. */
	trims: PolestarTrims[];
}

/**
 * Represents year-trim combinations for Porsche EVs.
 * @description Maps a specific model year to its available trim levels for Porsche vehicles.
 */
interface PorscheModelYearTrims {
	/** The model year. */
	year: PorscheYears;
	/** Array of available trim levels for this year. */
	trims: PorscheTrims[];
}

/**
 * Represents year-trim combinations for Ram EVs.
 * @description Maps a specific model year to its available trim levels for Ram vehicles.
 */
interface RamModelYearTrims {
	/** The model year. */
	year: RamYears;
	/** Array of available trim levels for this year. */
	trims: RamTrims[];
}

/**
 * Represents year-trim combinations for Rivian EVs.
 * @description Maps a specific model year to its available trim levels for Rivian vehicles.
 */
interface RivianModelYearTrims {
	/** The model year. */
	year: RivianYears;
	/** Array of available trim levels for this year. */
	trims: RivianTrims[];
}

/**
 * Represents year-trim combinations for Rolls-Royce EVs.
 * @description Maps a specific model year to its available trim levels for Rolls-Royce vehicles.
 */
interface RollsRoyceModelYearTrims {
	/** The model year. */
	year: RollsRoyceYears;
	/** Array of available trim levels for this year. */
	trims: RollsRoyceTrims[];
}

/**
 * Represents year-trim combinations for Scout EVs.
 * @description Maps a specific model year to its available trim levels for Scout vehicles.
 */
interface ScoutModelYearTrims {
	/** The model year. */
	year: ScoutYears;
	/** Array of available trim levels for this year. */
	trims: ScoutTrims[];
}

/**
 * Represents year-trim combinations for Smart EVs.
 * @description Maps a specific model year to its available trim levels for Smart vehicles.
 */
interface SmartModelYearTrims {
	/** The model year. */
	year: SmartYears;
	/** Array of available trim levels for this year. */
	trims: SmartTrims[];
}

/**
 * Represents year-trim combinations for Solectria EVs.
 * @description Maps a specific model year to its available trim levels for Solectria vehicles.
 */
interface SolectriaModelYearTrims {
	/** The model year. */
	year: SolectriaYears;
	/** Array of available trim levels for this year. */
	trims: SolectriaTrims[];
}

/**
 * Represents year-trim combinations for Subaru EVs.
 * @description Maps a specific model year to its available trim levels for Subaru vehicles.
 */
interface SubaruModelYearTrims {
	/** The model year. */
	year: SubaruYears;
	/** Array of available trim levels for this year. */
	trims: SubaruTrims[];
}

/**
 * Represents year-trim combinations for Tesla EVs.
 * @description Maps a specific model year to its available trim levels for Tesla vehicles.
 */
interface TeslaModelYearTrims {
	/** The model year. */
	year: TeslaYears;
	/** Array of available trim levels for this year. */
	trims: TeslaTrims[];
}

/**
 * Represents year-trim combinations for Toyota EVs.
 * @description Maps a specific model year to its available trim levels for Toyota vehicles.
 */
interface ToyotaModelYearTrims {
	/** The model year. */
	year: ToyotaYears;
	/** Array of available trim levels for this year. */
	trims: ToyotaTrims[];
}

/**
 * Represents year-trim combinations for VinFast EVs.
 * @description Maps a specific model year to its available trim levels for VinFast vehicles.
 */
interface VinFastModelYearTrims {
	/** The model year. */
	year: VinFastYears;
	/** Array of available trim levels for this year. */
	trims: VinFastTrims[];
}

/**
 * Represents year-trim combinations for Volkswagen EVs.
 * @description Maps a specific model year to its available trim levels for Volkswagen vehicles.
 */
interface VolkswagenModelYearTrims {
	/** The model year. */
	year: VolkswagenYears;
	/** Array of available trim levels for this year. */
	trims: VolkswagenTrims[];
}

/**
 * Represents year-trim combinations for Volvo EVs.
 * @description Maps a specific model year to its available trim levels for Volvo vehicles.
 */
interface VolvoModelYearTrims {
	/** The model year. */
	year: VolvoYears;
	/** Array of available trim levels for this year. */
	trims: VolvoTrims[];
}

export type {
	AcuraModelYearTrims,
	AfeelaModelYearTrims,
	AlfaRomeoModelYearTrims,
	AudiModelYearTrims,
	BentleyModelYearTrims,
	BMWModelYearTrims,
	BugattiRimacModelYearTrims,
	BuickModelYearTrims,
	BYDMotorsModelYearTrims,
	BytonModelYearTrims,
	CadillacModelYearTrims,
	ChevroletModelYearTrims,
	ChryslerModelYearTrims,
	DodgeModelYearTrims,
	FerrariModelYearTrims,
	FiatModelYearTrims,
	FiskerModelYearTrims,
	FordModelYearTrims,
	GenesisModelYearTrims,
	GMCModelYearTrims,
	HondaModelYearTrims,
	HyundaiModelYearTrims,
	JaguarModelYearTrims,
	JeepModelYearTrims,
	KandiModelYearTrims,
	KarmaModelYearTrims,
	KiaModelYearTrims,
	LamborghiniModelYearTrims,
	LandRoverModelYearTrims,
	LexusModelYearTrims,
	LincolnModelYearTrims,
	LordstownModelYearTrims,
	LotusModelYearTrims,
	LucidModelYearTrims,
	MaseratiModelYearTrims,
	MazdaModelYearTrims,
	McLarenModelYearTrims,
	MercedesAMGModelYearTrims,
	MercedesBenzModelYearTrims,
	MercedesMaybachModelYearTrims,
	MiniModelYearTrims,
	MitsubishiModelYearTrims,
	NissanModelYearTrims,
	PolestarModelYearTrims,
	PorscheModelYearTrims,
	RamModelYearTrims,
	RivianModelYearTrims,
	RollsRoyceModelYearTrims,
	ScoutModelYearTrims,
	SmartModelYearTrims,
	SolectriaModelYearTrims,
	SubaruModelYearTrims,
	TeslaModelYearTrims,
	ToyotaModelYearTrims,
	VinFastModelYearTrims,
	VolkswagenModelYearTrims,
	VolvoModelYearTrims
};
