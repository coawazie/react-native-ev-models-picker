/**
 * @fileoverview Interface definitions for car model items organized by manufacturer.
 * Each interface represents a model item containing the model name and its associated year-trim combinations.
 * @module typesEnumsInterfacesConsts/interfaces/carModelInterfaces
 */

import {
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
} from "../types/modelTypes";
import {
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
} from "./carTrimInterfaces";

/**
 * Represents an Acura model item with its available year-trim combinations.
 * @description Contains the model name and array of year-trim data for Acura EVs.
 */
interface AcuraModelsItem {
	/** The Acura model name. */
	model: AcuraModels;
	/** Array of year and trim combinations available for this model. */
	yearTrims: AcuraModelYearTrims[];
}

/**
 * Represents an Afeela model item with its available year-trim combinations.
 * @description Contains the model name and array of year-trim data for Afeela EVs.
 */
interface AfeelaModelsItem {
	/** The Afeela model name. */
	model: AfeelaModels;
	/** Array of year and trim combinations available for this model. */
	yearTrims: AfeelaModelYearTrims[];
}

/**
 * Represents an Alfa Romeo model item with its available year-trim combinations.
 * @description Contains the model name and array of year-trim data for Alfa Romeo EVs.
 */
interface AlfaRomeoModelsItem {
	/** The Alfa Romeo model name. */
	model: AlfaRomeoModels;
	/** Array of year and trim combinations available for this model. */
	yearTrims: AlfaRomeoModelYearTrims[];
}

/**
 * Represents an Audi model item with its available year-trim combinations.
 * @description Contains the model name and array of year-trim data for Audi EVs.
 */
interface AudiModelsItem {
	/** The Audi model name. */
	model: AudiModels;
	/** Array of year and trim combinations available for this model. */
	yearTrims: AudiModelYearTrims[];
}

/**
 * Represents a Bentley model item with its available year-trim combinations.
 * @description Contains the model name and array of year-trim data for Bentley EVs.
 */
interface BentleyModelsItem {
	/** The Bentley model name. */
	model: BentleyModels;
	/** Array of year and trim combinations available for this model. */
	yearTrims: BentleyModelYearTrims[];
}

/**
 * Represents a BMW model item with its available year-trim combinations.
 * @description Contains the model name and array of year-trim data for BMW EVs.
 */
interface BMWModelsItem {
	/** The BMW model name. */
	model: BMWModels;
	/** Array of year and trim combinations available for this model. */
	yearTrims: BMWModelYearTrims[];
}

/**
 * Represents a Bugatti Rimac model item with its available year-trim combinations.
 * @description Contains the model name and array of year-trim data for Bugatti Rimac EVs.
 */
interface BugattiRimacModelsItem {
	/** The Bugatti Rimac model name. */
	model: BugattiRimacModels;
	/** Array of year and trim combinations available for this model. */
	yearTrims: BugattiRimacModelYearTrims[];
}

/**
 * Represents a Buick model item with its available year-trim combinations.
 * @description Contains the model name and array of year-trim data for Buick EVs.
 */
interface BuickModelsItem {
	/** The Buick model name. */
	model: BuickModels;
	/** Array of year and trim combinations available for this model. */
	yearTrims: BuickModelYearTrims[];
}

/**
 * Represents a BYD Motors model item with its available year-trim combinations.
 * @description Contains the model name and array of year-trim data for BYD Motors EVs.
 */
interface BYDMotorsModelsItem {
	/** The BYD Motors model name. */
	model: BYDMotorsModels;
	/** Array of year and trim combinations available for this model. */
	yearTrims: BYDMotorsModelYearTrims[];
}

/**
 * Represents a Byton model item with its available year-trim combinations.
 * @description Contains the model name and array of year-trim data for Byton EVs.
 */
interface BytonModelsItem {
	/** The Byton model name. */
	model: BytonModels;
	/** Array of year and trim combinations available for this model. */
	yearTrims: BytonModelYearTrims[];
}

/**
 * Represents a Cadillac model item with its available year-trim combinations.
 * @description Contains the model name and array of year-trim data for Cadillac EVs.
 */
interface CadillacModelsItem {
	/** The Cadillac model name. */
	model: CadillacModels;
	/** Array of year and trim combinations available for this model. */
	yearTrims: CadillacModelYearTrims[];
}

/**
 * Represents a Chevrolet model item with its available year-trim combinations.
 * @description Contains the model name and array of year-trim data for Chevrolet EVs.
 */
interface ChevroletModelsItem {
	/** The Chevrolet model name. */
	model: ChevroletModels;
	/** Array of year and trim combinations available for this model. */
	yearTrims: ChevroletModelYearTrims[];
}

/**
 * Represents a Chrysler model item with its available year-trim combinations.
 * @description Contains the model name and array of year-trim data for Chrysler EVs.
 */
interface ChryslerModelsItem {
	/** The Chrysler model name. */
	model: ChryslerModels;
	/** Array of year and trim combinations available for this model. */
	yearTrims: ChryslerModelYearTrims[];
}

/**
 * Represents a Dodge model item with its available year-trim combinations.
 * @description Contains the model name and array of year-trim data for Dodge EVs.
 */
interface DodgeModelsItem {
	/** The Dodge model name. */
	model: DodgeModels;
	/** Array of year and trim combinations available for this model. */
	yearTrims: DodgeModelYearTrims[];
}

/**
 * Represents a Ferrari model item with its available year-trim combinations.
 * @description Contains the model name and array of year-trim data for Ferrari EVs.
 */
interface FerrariModelsItem {
	/** The Ferrari model name. */
	model: FerrariModels;
	/** Array of year and trim combinations available for this model. */
	yearTrims: FerrariModelYearTrims[];
}

/**
 * Represents a Fiat model item with its available year-trim combinations.
 * @description Contains the model name and array of year-trim data for Fiat EVs.
 */
interface FiatModelsItem {
	/** The Fiat model name. */
	model: FiatModels;
	/** Array of year and trim combinations available for this model. */
	yearTrims: FiatModelYearTrims[];
}

/**
 * Represents a Fisker model item with its available year-trim combinations.
 * @description Contains the model name and array of year-trim data for Fisker EVs.
 */
interface FiskerModelsItem {
	/** The Fisker model name. */
	model: FiskerModels;
	/** Array of year and trim combinations available for this model. */
	yearTrims: FiskerModelYearTrims[];
}

/**
 * Represents a Ford model item with its available year-trim combinations.
 * @description Contains the model name and array of year-trim data for Ford EVs.
 */
interface FordModelsItem {
	/** The Ford model name. */
	model: FordModels;
	/** Array of year and trim combinations available for this model. */
	yearTrims: FordModelYearTrims[];
}

/**
 * Represents a Genesis model item with its available year-trim combinations.
 * @description Contains the model name and array of year-trim data for Genesis EVs.
 */
interface GenesisModelsItem {
	/** The Genesis model name. */
	model: GenesisModels;
	/** Array of year and trim combinations available for this model. */
	yearTrims: GenesisModelYearTrims[];
}

/**
 * Represents a GMC model item with its available year-trim combinations.
 * @description Contains the model name and array of year-trim data for GMC EVs.
 */
interface GMCModelsItem {
	/** The GMC model name. */
	model: GMCModels;
	/** Array of year and trim combinations available for this model. */
	yearTrims: GMCModelYearTrims[];
}

/**
 * Represents a Honda model item with its available year-trim combinations.
 * @description Contains the model name and array of year-trim data for Honda EVs.
 */
interface HondaModelsItem {
	/** The Honda model name. */
	model: HondaModels;
	/** Array of year and trim combinations available for this model. */
	yearTrims: HondaModelYearTrims[];
}

/**
 * Represents a Hyundai model item with its available year-trim combinations.
 * @description Contains the model name and array of year-trim data for Hyundai EVs.
 */
interface HyundaiModelsItem {
	/** The Hyundai model name. */
	model: HyundaiModels;
	/** Array of year and trim combinations available for this model. */
	yearTrims: HyundaiModelYearTrims[];
}

/**
 * Represents a Jaguar model item with its available year-trim combinations.
 * @description Contains the model name and array of year-trim data for Jaguar EVs.
 */
interface JaguarModelsItem {
	/** The Jaguar model name. */
	model: JaguarModels;
	/** Array of year and trim combinations available for this model. */
	yearTrims: JaguarModelYearTrims[];
}

/**
 * Represents a Jeep model item with its available year-trim combinations.
 * @description Contains the model name and array of year-trim data for Jeep EVs.
 */
interface JeepModelsItem {
	/** The Jeep model name. */
	model: JeepModels;
	/** Array of year and trim combinations available for this model. */
	yearTrims: JeepModelYearTrims[];
}

/**
 * Represents a Kandi model item with its available year-trim combinations.
 * @description Contains the model name and array of year-trim data for Kandi EVs.
 */
interface KandiModelsItem {
	/** The Kandi model name. */
	model: KandiModels;
	/** Array of year and trim combinations available for this model. */
	yearTrims: KandiModelYearTrims[];
}

/**
 * Represents a Karma model item with its available year-trim combinations.
 * @description Contains the model name and array of year-trim data for Karma EVs.
 */
interface KarmaModelsItem {
	/** The Karma model name. */
	model: KarmaModels;
	/** Array of year and trim combinations available for this model. */
	yearTrims: KarmaModelYearTrims[];
}

/**
 * Represents a Kia model item with its available year-trim combinations.
 * @description Contains the model name and array of year-trim data for Kia EVs.
 */
interface KiaModelsItem {
	/** The Kia model name. */
	model: KiaModels;
	/** Array of year and trim combinations available for this model. */
	yearTrims: KiaModelYearTrims[];
}

/**
 * Represents a Lamborghini model item with its available year-trim combinations.
 * @description Contains the model name and array of year-trim data for Lamborghini EVs.
 */
interface LamborghiniModelsItem {
	/** The Lamborghini model name. */
	model: LamborghiniModels;
	/** Array of year and trim combinations available for this model. */
	yearTrims: LamborghiniModelYearTrims[];
}

/**
 * Represents a Land Rover model item with its available year-trim combinations.
 * @description Contains the model name and array of year-trim data for Land Rover EVs.
 */
interface LandRoverModelsItem {
	/** The Land Rover model name. */
	model: LandRoverModels;
	/** Array of year and trim combinations available for this model. */
	yearTrims: LandRoverModelYearTrims[];
}

/**
 * Represents a Lexus model item with its available year-trim combinations.
 * @description Contains the model name and array of year-trim data for Lexus EVs.
 */
interface LexusModelsItem {
	/** The Lexus model name. */
	model: LexusModels;
	/** Array of year and trim combinations available for this model. */
	yearTrims: LexusModelYearTrims[];
}

/**
 * Represents a Lincoln model item with its available year-trim combinations.
 * @description Contains the model name and array of year-trim data for Lincoln EVs.
 */
interface LincolnModelsItem {
	/** The Lincoln model name. */
	model: LincolnModels;
	/** Array of year and trim combinations available for this model. */
	yearTrims: LincolnModelYearTrims[];
}

/**
 * Represents a Lordstown model item with its available year-trim combinations.
 * @description Contains the model name and array of year-trim data for Lordstown EVs.
 */
interface LordstownModelsItem {
	/** The Lordstown model name. */
	model: LordstownModels;
	/** Array of year and trim combinations available for this model. */
	yearTrims: LordstownModelYearTrims[];
}

/**
 * Represents a Lotus model item with its available year-trim combinations.
 * @description Contains the model name and array of year-trim data for Lotus EVs.
 */
interface LotusModelsItem {
	/** The Lotus model name. */
	model: LotusModels;
	/** Array of year and trim combinations available for this model. */
	yearTrims: LotusModelYearTrims[];
}

/**
 * Represents a Lucid model item with its available year-trim combinations.
 * @description Contains the model name and array of year-trim data for Lucid EVs.
 */
interface LucidModelsItem {
	/** The Lucid model name. */
	model: LucidModels;
	/** Array of year and trim combinations available for this model. */
	yearTrims: LucidModelYearTrims[];
}

/**
 * Represents a Maserati model item with its available year-trim combinations.
 * @description Contains the model name and array of year-trim data for Maserati EVs.
 */
interface MaseratiModelsItem {
	/** The Maserati model name. */
	model: MaseratiModels;
	/** Array of year and trim combinations available for this model. */
	yearTrims: MaseratiModelYearTrims[];
}

/**
 * Represents a Mazda model item with its available year-trim combinations.
 * @description Contains the model name and array of year-trim data for Mazda EVs.
 */
interface MazdaModelsItem {
	/** The Mazda model name. */
	model: MazdaModels;
	/** Array of year and trim combinations available for this model. */
	yearTrims: MazdaModelYearTrims[];
}

/**
 * Represents a McLaren model item with its available year-trim combinations.
 * @description Contains the model name and array of year-trim data for McLaren EVs.
 */
interface McLarenModelsItem {
	/** The McLaren model name. */
	model: McLarenModels;
	/** Array of year and trim combinations available for this model. */
	yearTrims: McLarenModelYearTrims[];
}

/**
 * Represents a Mercedes-AMG model item with its available year-trim combinations.
 * @description Contains the model name and array of year-trim data for Mercedes-AMG EVs.
 */
interface MercedesAMGModelsItem {
	/** The Mercedes-AMG model name. */
	model: MercedesAMGModels;
	/** Array of year and trim combinations available for this model. */
	yearTrims: MercedesAMGModelYearTrims[];
}

/**
 * Represents a Mercedes-Benz model item with its available year-trim combinations.
 * @description Contains the model name and array of year-trim data for Mercedes-Benz EVs.
 */
interface MercedesBenzModelsItem {
	/** The Mercedes-Benz model name. */
	model: MercedesBenzModels;
	/** Array of year and trim combinations available for this model. */
	yearTrims: MercedesBenzModelYearTrims[];
}

/**
 * Represents a Mercedes-Maybach model item with its available year-trim combinations.
 * @description Contains the model name and array of year-trim data for Mercedes-Maybach EVs.
 */
interface MercedesMaybachModelsItem {
	/** The Mercedes-Maybach model name. */
	model: MercedesMaybachModels;
	/** Array of year and trim combinations available for this model. */
	yearTrims: MercedesMaybachModelYearTrims[];
}

/**
 * Represents a Mini model item with its available year-trim combinations.
 * @description Contains the model name and array of year-trim data for Mini EVs.
 */
interface MiniModelsItem {
	/** The Mini model name. */
	model: MiniModels;
	/** Array of year and trim combinations available for this model. */
	yearTrims: MiniModelYearTrims[];
}

/**
 * Represents a Mitsubishi model item with its available year-trim combinations.
 * @description Contains the model name and array of year-trim data for Mitsubishi EVs.
 */
interface MitsubishiModelsItem {
	/** The Mitsubishi model name. */
	model: MitsubishiModels;
	/** Array of year and trim combinations available for this model. */
	yearTrims: MitsubishiModelYearTrims[];
}

/**
 * Represents a Nissan model item with its available year-trim combinations.
 * @description Contains the model name and array of year-trim data for Nissan EVs.
 */
interface NissanModelsItem {
	/** The Nissan model name. */
	model: NissanModels;
	/** Array of year and trim combinations available for this model. */
	yearTrims: NissanModelYearTrims[];
}

/**
 * Represents a Polestar model item with its available year-trim combinations.
 * @description Contains the model name and array of year-trim data for Polestar EVs.
 */
interface PolestarModelsItem {
	/** The Polestar model name. */
	model: PolestarModels;
	/** Array of year and trim combinations available for this model. */
	yearTrims: PolestarModelYearTrims[];
}

/**
 * Represents a Porsche model item with its available year-trim combinations.
 * @description Contains the model name and array of year-trim data for Porsche EVs.
 */
interface PorscheModelsItem {
	/** The Porsche model name. */
	model: PorscheModels;
	/** Array of year and trim combinations available for this model. */
	yearTrims: PorscheModelYearTrims[];
}

/**
 * Represents a Ram model item with its available year-trim combinations.
 * @description Contains the model name and array of year-trim data for Ram EVs.
 */
interface RamModelsItem {
	/** The Ram model name. */
	model: RamModels;
	/** Array of year and trim combinations available for this model. */
	yearTrims: RamModelYearTrims[];
}

/**
 * Represents a Rivian model item with its available year-trim combinations.
 * @description Contains the model name and array of year-trim data for Rivian EVs.
 */
interface RivianModelsItem {
	/** The Rivian model name. */
	model: RivianModels;
	/** Array of year and trim combinations available for this model. */
	yearTrims: RivianModelYearTrims[];
}

/**
 * Represents a Rolls-Royce model item with its available year-trim combinations.
 * @description Contains the model name and array of year-trim data for Rolls-Royce EVs.
 */
interface RollsRoyceModelsItem {
	/** The Rolls-Royce model name. */
	model: RollsRoyceModels;
	/** Array of year and trim combinations available for this model. */
	yearTrims: RollsRoyceModelYearTrims[];
}

/**
 * Represents a Scout model item with its available year-trim combinations.
 * @description Contains the model name and array of year-trim data for Scout EVs.
 */
interface ScoutModelsItem {
	/** The Scout model name. */
	model: ScoutModels;
	/** Array of year and trim combinations available for this model. */
	yearTrims: ScoutModelYearTrims[];
}

/**
 * Represents a Smart model item with its available year-trim combinations.
 * @description Contains the model name and array of year-trim data for Smart EVs.
 */
interface SmartModelsItem {
	/** The Smart model name. */
	model: SmartModels;
	/** Array of year and trim combinations available for this model. */
	yearTrims: SmartModelYearTrims[];
}

/**
 * Represents a Solectria model item with its available year-trim combinations.
 * @description Contains the model name and array of year-trim data for Solectria EVs.
 */
interface SolectriaModelsItem {
	/** The Solectria model name. */
	model: SolectriaModels;
	/** Array of year and trim combinations available for this model. */
	yearTrims: SolectriaModelYearTrims[];
}

/**
 * Represents a Subaru model item with its available year-trim combinations.
 * @description Contains the model name and array of year-trim data for Subaru EVs.
 */
interface SubaruModelsItem {
	/** The Subaru model name. */
	model: SubaruModels;
	/** Array of year and trim combinations available for this model. */
	yearTrims: SubaruModelYearTrims[];
}

/**
 * Represents a Tesla model item with its available year-trim combinations.
 * @description Contains the model name and array of year-trim data for Tesla EVs.
 */
interface TeslaModelsItem {
	/** The Tesla model name. */
	model: TeslaModels;
	/** Array of year and trim combinations available for this model. */
	yearTrims: TeslaModelYearTrims[];
}

/**
 * Represents a Toyota model item with its available year-trim combinations.
 * @description Contains the model name and array of year-trim data for Toyota EVs.
 */
interface ToyotaModelsItem {
	/** The Toyota model name. */
	model: ToyotaModels;
	/** Array of year and trim combinations available for this model. */
	yearTrims: ToyotaModelYearTrims[];
}

/**
 * Represents a VinFast model item with its available year-trim combinations.
 * @description Contains the model name and array of year-trim data for VinFast EVs.
 */
interface VinFastModelsItem {
	/** The VinFast model name. */
	model: VinFastModels;
	/** Array of year and trim combinations available for this model. */
	yearTrims: VinFastModelYearTrims[];
}

/**
 * Represents a Volkswagen model item with its available year-trim combinations.
 * @description Contains the model name and array of year-trim data for Volkswagen EVs.
 */
interface VolkswagenModelsItem {
	/** The Volkswagen model name. */
	model: VolkswagenModels;
	/** Array of year and trim combinations available for this model. */
	yearTrims: VolkswagenModelYearTrims[];
}

/**
 * Represents a Volvo model item with its available year-trim combinations.
 * @description Contains the model name and array of year-trim data for Volvo EVs.
 */
interface VolvoModelsItem {
	/** The Volvo model name. */
	model: VolvoModels;
	/** Array of year and trim combinations available for this model. */
	yearTrims: VolvoModelYearTrims[];
}

export type {
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
};
