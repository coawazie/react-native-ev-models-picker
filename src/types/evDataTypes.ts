export type SupportedLangues = "en" | "fr";
export type TranslationCopy = {
	carMake: string;
	carModel: string;
	carYear: string;
	carTrim: string;
};
export type CarMake =
	"Tesla"
	| "Rivian"
	| "Ford"
	| 'Hyundai'
	| "Volvo"
	| 'Volkswagen'
	| 'VinFast'
	| 'Toyota'
	| 'Scout'
	| 'Subaru'
	| 'Smart'
	| 'Rolls-Royce'
	| 'Ram'
	| 'Porsche'
	| 'Polestar'
	| 'Nissan'
	| 'Mitsubishi'
	| 'Mini'
	| 'Mercedes-Maybach'
	| 'Mercedes-Benz'
	| 'Mercedes-AMG'
	| 'Mazda'
	| 'Maserati'
	| "Lucid"
	| 'Lotus'
	| 'Lordstown'
	| 'Lincoln'
	| 'Lexus'
	| 'Land Rover'
	| 'Lamborghini'
	| 'Kia'
	| 'Jeep'
	| 'Jaguar'
	| 'Honda'
	| 'GMC'
	| 'Genesis'
	| 'Fisker'
	| 'Fiat'
	| 'Dodge'
	| 'Chrysler'
	| 'Chevrolet'
	| 'Cadillac'
	| 'Byton'
	| 'Buick'
	| 'BMW'
	| 'Audi'
	| 'Acura'
	| 'Afeela'
	| "Others"
	| 'none'

type CarMakeItemType = {
	label: CarMake;
	value: CarMake;
	disabled?: boolean;
};
export const evMakes: CarMakeItemType[] = [
	{
		label: "Tesla",
		value: "Tesla",
		disabled: false
	},
	{
		label: "Rivian",
		value: "Rivian",
		disabled: false
	},
	{
		label: "Ford",
		value: "Ford",
		disabled: false
	},
	{
		label: "Hyundai",
		value: "Hyundai",
		disabled: false
	},
	{
		label: "Volvo",
		value: "Volvo",
		disabled: false
	},
	{
		label: "Volkswagen",
		value: "Volkswagen",
		disabled: false
	},
	{
		label: "VinFast",
		value: "VinFast",
		disabled: false
	},
	{
		label: "Toyota",
		value: "Toyota",
		disabled: false
	},
	{
		label: "Scout",
		value: "Scout",
		disabled: false
	},
	{
		label: "Subaru",
		value: "Subaru",
		disabled: false
	},
	{
		label: "Smart",
		value: "Smart",
		disabled: false
	},
	{
		label: "Rolls-Royce",
		value: "Rolls-Royce",
		disabled: false
	},
	{
		label: "Ram",
		value: "Ram",
		disabled: false
	},
	{
		label: "Porsche",
		value: "Porsche",
		disabled: false
	},
	{
		label: "Polestar",
		value: "Polestar",
		disabled: false
	},
	{
		label: "Nissan",
		value: "Nissan",
		disabled: false
	},
	{
		label: "Mitsubishi",
		value: "Mitsubishi",
		disabled: false
	},
	{
		label: "Mini",
		value: "Mini",
		disabled: false
	},
	{
		label: "Mercedes-Maybach",
		value: "Mercedes-Maybach",
		disabled: false
	},
	{
		label: "Mercedes-Benz",
		value: "Mercedes-Benz",
		disabled: false
	},
	{
		label: "Mercedes-AMG",
		value: "Mercedes-AMG",
		disabled: false
	},
	{
		label: "Mazda",
		value: "Mazda",
		disabled: false
	},
	{
		label: "Maserati",
		value: "Maserati",
		disabled: false
	},
	{
		label: "Lucid",
		value: "Lucid",
		disabled: false
	},
	{
		label: "Lotus",
		value: "Lotus",
		disabled: false
	},
	{
		label: "Lordstown",
		value: "Lordstown",
		disabled: false
	},
	{
		label: "Lincoln",
		value: "Lincoln",
		disabled: false
	},
	{
		label: "Lexus",
		value: "Lexus",
		disabled: false
	},
	{
		label: "Land Rover",
		value: "Land Rover",
		disabled: false
	},
	{
		label: "Lamborghini",
		value: "Lamborghini",
		disabled: false
	},
	{
		label: "Kia",
		value: "Kia",
		disabled: false
	},
	{
		label: "Jeep",
		value: "Jeep",
		disabled: false
	},
	{
		label: "Jaguar",
		value: "Jaguar",
		disabled: false
	},
	{
		label: "Honda",
		value: "Honda",
		disabled: false
	},
	{
		label: "GMC",
		value: "GMC",
		disabled: false
	},
	{
		label: "Genesis",
		value: "Genesis",
		disabled: false
	},
	{
		label: "Fisker",
		value: "Fisker",
		disabled: false
	},
	{
		label: "Fiat",
		value: "Fiat",
		disabled: false
	},
	{
		label: "Dodge",
		value: "Dodge",
		disabled: false
	},
	{
		label: "Chrysler",
		value: "Chrysler",
		disabled: false
	},
	{
		label: "Chevrolet",
		value: "Chevrolet",
		disabled: false
	},
	{
		label: "Cadillac",
		value: "Cadillac",
		disabled: false
	},
	{
		label: "Byton",
		value: "Byton",
		disabled: false
	},
	{
		label: "Buick",
		value: "Buick",
		disabled: false
	},
	{
		label: "BMW",
		value: "BMW",
		disabled: false
	},
	{
		label: "Audi",
		value: "Audi",
		disabled: false
	},
	{
		label: "Acura",
		value: "Acura",
		disabled: false
	},
	{
		label: "Afeela",
		value: "Afeela",
		disabled: false
	},
	{
		label: "Others",
		value: "Others",
		disabled: false
	}
];


export type TeslaModels =
	| "Cybertruck"
	| "Model 3"
	| "Model S"
	| "Model X"
	| "Model Y"
	| 'Roadster'
export type TeslaTrims =
	| "100D"
	| "60 RWD"
	| "60 kWh"
	| "60"
	| "60D"
	| "70 kWh"
	| "70"
	| "70D RWD"
	| "70D"
	| "75"
	| "75D AWD"
	| "75D"
	| "85 RWD"
	| "85 kWh"
	| "85"
	| "85D"
	| "90D AWD"
	| "90D"
	| "AWD"
	| "Base"
	| "DUAL MOTOR AWD 100 KWH"
	| "Long Range Plus"
	| "Long Range"
	| "Long Range AWD"
	| "Mid Range"
	| "P100 AWD"
	| "P100D"
	| "P85+"
	| "P85D AWD"
	| "P85D"
	| "P90D AWD"
	| "P90D"
	| "PLAID TRI MOTOR AWD 100 KWH"
	| "Performance"
	| "Performance AWD"
	| "Plaid AWD"
	| "Plaid"
	| "Plaid+"
	| "Signature Performance"
	| "Signature"
	| "Standard Range"
	| "Standard Range RWD"
	| "Standard Range Plus"
	| "Standard"
	| "RWD"
	| 'Model S'
	| 'Model S Plaid'
	| "Founder's Edition"
	| 'Model X'
	| 'Model X Plaid'
	| "Beast"
	| "Dual Motor"
export type TeslaYears =
	| "2012"
	| "2013"
	| "2014"
	| "2015"
	| "2016"
	| "2017"
	| "2018"
	| "2019"
	| "2020"
	| "2021"
	| "2022"
	| "2023"
	| "2024"
	| '2026'


export type RivianModels =
	| "R1T"
	| "R1S"
	| 'R2'
	| 'R3'
	| 'Commercial Van'
export type RivianYears =
	| "2022"
	| "2023"
	| "2024"
	| '2026'
	| '2027'
export type RivianTrims =
	| "Explore Package"
	| "Adventure Package"
	| "Launch Edition"
	| "Adventure Dual-Motor Standard Pack"
	| "Adventure Dual-Motor Standard+ Pack"
	| "Adventure Dual-Motor Large Pack"
	| "Adventure Performance Dual-Motor Large Pack"
	| "Adventure Performance Dual-Motor Standard+ Pack"
	| "Launch Edition Quad-Motor Large Pack"
	| "Adventure Quad-Motor Large Pack"
	| "Adventure Dual-Motor Max Pack"
	| "Adventure Performance Dual-Motor Max Pack"
	| 'Adventure'
	| 'Adventure All-Terrain'
	| 'R3'
	| 'R3X'
	| 'Delivery 500'
	| 'Delivery 700'

export type FordModels =
	| "E-Transit"
	| "F-150 Lightning"
	| 'Mustang Mach-E'
export type FordYears =
	| "2021"
	| "2022"
	| "2023"
	| "2024";
export type FordTrims =
	| "Cargo Van"
	| "Cutaway"
	| "Chassis Cab"
	| "XLT"
	| "XLT Extended Range"
	| 'Pro'
	| 'Flash Extended Range'
	| 'Lariat'
	| 'Lariat Extended Range'
	| 'Platinum Extended Range'
	| "Platinum Black Extended Range"
	| 'Select'
	| 'Premium'
	| 'California Route 1'
	| 'GT'
	| 'GT Performance Edition'
	| 'GT Bronze'
	| 'Rally'


export type HyundaiModels =
	| "Ioniq 5"
	| "Ioniq 5 N"
	| 'Ioniq 6'
	| 'Ioniq 7'
	| 'Kona'
	| 'Nexo'
	| 'Ioniq Electric';
export type HyundaiYears =
	| "2019"
	| "2020"
	| "2021"
	| "2022"
	| "2023"
	| "2024"
	| '2025'
export type HyundaiTrims =
	| "SE"
	| "SE Standard Range"
	| "SE Long Range"
	| "SEL"
	| "SEL Long Range"
	| "SEL Long Range AWD"
	| "SE Long Range AWD"
	| "Limited"
	| "Limited Long Range"
	| "Limited Long Range AWD"
	| "Blue"
	| "Ultimate"
	| "Ioniq 5 N"
	| 'N Line'
	| 'Kona'
	| 'Nexo'

export type VolvoModels =
	| "EC40"
	| 'ES90'
	| 'EX30'
	| 'EX40'
	| 'EX90'
	| 'XC40'
	| 'XC40 Recharge'
export type VolvoYears =
	| "2021"
	| "2022"
	| "2023"
	| "2024"
	| '2025'
	| '2026'
export type VolvoTrims =
	| "Single Motor Core"
	| 'Core Single Motor'
	| 'Plus Single Motor'
	| 'Plus Twin Motor'
	| 'Single Motor Performance'
	| 'Single Motor Plus'
	| 'Single Motor Ultimate'
	| 'Single Motor'
	| 'Twin Motor Core'
	| 'Twin Motor Performance'
	| 'Twin Motor Performance Plus'
	| 'Twin Motor Plus'
	| 'Twin Motor Ultimate'
	| 'Twin Motor'
	| 'Ultra Single Motor'
	| 'Ultra Twin Motor'
	| 'Ultimate'
	| 'Core'
	| 'Plus'
	| 'Twin'
	| 'Twin Plus'
	| "Twin Ultimate"
	| 'XC40 Recharge'
	| 'Twin Motor Ultra'

export type VolkswagenModels =
	| 'ID.4'
	| 'ID.7'
	| 'ID.8'
	| 'ID.Buzz Microbus'
	| 'e-Golf'
export type VolkswagenYears =
	| '2017'
	| '2018'
	| '2019'
	| "2021"
	| "2022"
	| "2023"
	| "2024"
	| '2025'
	| '2026'
export type VolkswagenTrims =
	| 'ID.Buzz'
	| 'SE'
	| 'SEL Premium'
	| 'Base'
	| 'Pro'
	| 'Pro S'
	| 'Pro S Plus'
	| 'Standard'
	| 'Standard S'
	| '1st Edition'
	| 'SEL'
	| 'Limited Edition'

export type VinFastModels =
	| 'VF3'
	| 'VF6'
	| 'VF7'
	| 'VF8'
	| 'VF9'
	| 'VF Wild'
export type VinFastYears =
	| '2026'
	| '2024'
	| '2023'
export type VinFastTrims =
	| 'VF Wild'
	| 'Eco'
	| 'Plus'
	| 'City Edition Eco'
	| 'City Edition Plus'
	| 'VF3'

export type ToyotaModels =
	| 'bZ3X'
	| 'bZ4X'
	| 'bZ5X'
	| 'Compact Cruiser EV'
	| 'Tacoma Electric'
export type ToyotaYears =
	| '2026'
	| '2025'
	| '2024'
	| '2023'
export type ToyotaTrims =
	| 'SR5'
	| 'TRD Off-Road'
	| 'Limited'
	| 'LE'
	| 'XLE'

export type ScoutModels =
	| 'SUV'
	| 'Pickup'
export type ScoutYears =
	| '2026'
export type ScoutTrims =
	| 'SUV'
	| 'Pickup'

export type SubaruModels =
	| 'Solterra'
export type SubaruYears =
	| '2023'
export type SubaruTrims =
	| 'Premium'
	| 'Limited'
	| 'Touring'

export type SmartModels = 'EQ Fortwo'
export type SmartYears = '2018'
export type SmartTrims = 'EQ Fortwo'

export type RollsRoyceModels = 'Spectre'
export type RollsRoyceYears = '2024'
export type RollsRoyceTrims = 'Spectre'

export type RamModels =
	| 'ProMaster EV'
	| '1500 EV'
export type RamYears =
	| '2025'
	| '2024'
export type RamTrims =
	| 'High Roof'
	| 'Super High Roof'
	| 'Tradesman'
	| 'Big Horn'
	| 'Laramie'
	| 'Rebel'
	| 'Longhorn'
	| 'Limited'
	| 'Tungsten'

export type PorscheModels =
	| '718 EV'
	| 'Cayenne EV'
	| 'Macan EV'
	| 'Taycan'
	| 'Taycan Cross Turismo'
export type PorscheYears =
	| '2026'
	| '2025'
	| '2024'
	| '2023'
	| '2022'
	| '2021'
	| '2020'
export type PorscheTrims =
	| '4'
	| '4S'
	| 'Base'
	| 'Turbo'
	| 'S'
	| 'GTS'
	| 'Turbo S'
	| 'Turbo GT'
	| 'Cross Turismo 4'
	| 'Cross Turismo 4S'
	| 'Sport Turismo GTS'
	| 'Cross Turismo Turbo'
	| 'Cross Turismo Turbo S'
	| 'Taycan'
	| 'Taycan Cross Turismo 4'
	| 'Taycan Cross Turismo 4S'
	| 'Taycan Sport Turismo GTS'
	| 'Taycan Cross Turismo Turbo'
	| 'Taycan Cross Turismo Turbo S'
	| 'GTS Sport Turismo'
	| 'Cayenne EV'
	| 'Cayenne EV S'
	| 'Cayenne EV GTS'

export type PolestarModels =
	| '1'
	| '2'
	| '3'
	| '4'
	| '5'
	| '6'
export type PolestarYears =
	| '2026'
	| '2025'
	| '2024'
	| '2023'
	| '2022'
	| '2021'
	| '2020'
export type PolestarTrims =
	| 'Polestar 1'
	| 'Single Motor'
	| 'Single Motor Plus'
	| 'Base'
	| 'Dual Motor'
	| 'Dual Motor Plus'
	| 'Launch Edition'
	| 'Performance Package'
	| 'Dual Motor Performance'
	| 'Dual Motor Performance Plus'
	| 'BST Edition 270'
	| 'Long Range Dual Motor'
	| 'Long Range Dual Motor Performance'
	| 'Long Range RWD'
	| 'Long Range AWD'
	| 'Long Range with Performance Pack'

export type NissanModels =
	| 'Leaf'
	| 'Ariya'
export type NissanYears =
	| '2024'
	| '2023'
	| '2022'
	| '2021'
	| '2020'
	| '2019'
	| '2018'
	| '2017'
export type NissanTrims =
	| 'S'
	| 'SV'
	| 'SL'
	| 'S Plus'
	| 'SL Plus'
	| 'SV Plus'
	| 'Engage'
	| 'Engage+'
	| 'Engage e-4ORCE'
	| 'Engage+ e-4ORCE'
	| 'Venture+'
	| 'Empower+'
	| "Evolve+"
	| 'Evolve+ e-4ORCE'
	| 'Premiere'
	| 'Premiere+ e-4ORCE'
	| 'Platinum+'
	| 'Platinum+ e-4ORCE'

export type MitsubishiModels =
	'i-MiEV'
export type MitsubishiYears =
	|'2017'
export type MitsubishiTrims =
	'i-MiEV'

export type MiniModels =
	| 'Countryman Electric'
	| 'Cooper Electric'
	| 'Aceman'
export type MiniYears =
	| '2025'
	| '2024'
	| '2023'
	| '2022'
	| '2021'
	| '2020'
export type MiniTrims =
	| 'Classic'
	| 'Signature'
	| 'Iconic'
	| 'Signature Plus'
	| 'Cooper E Classic'
	| 'Cooper SE Classic'
	| 'Cooper E Signature'
	| 'Cooper SE Signature'
	| 'Cooper E Iconic'
	| 'Cooper SE Iconic'
	| 'Countryman S E All4'

export type MercedesMaybachModels =
	|'EQS SUV'
export type MercedesMaybachYears =
	|'2024'
export type MercedesMaybachTrims =
	| 'EQS680'
	| 'EQS680 Night Series'

export type MercedesBenzModels =
	| 'B-Class Electric Drive'
	| 'eSprinter'
	| 'EQS SUV'
	| 'EQS'
	| 'EQG'
	| "EQE SUV"
	| 'EQE'
	| 'EQB'
	| 'CLA-Class EV'
export type MercedesBenzYears =
	| '2026'
	| '2025'
	| '2024'
	| '2023'
	| '2022'
	| '2021'
	| '2017'
export type MercedesBenzTrims =
	| 'Premium'
	| 'Exclusive'
	| 'Pinnacle'
	| 'B-Class'
	| 'EQB250+ Premium'
	| 'EQB250+ Exclusive'
	| 'EQB250+ Pinnacle'
	| 'EQB300 Premium'
	| 'EQB300 Exclusive'
	| 'EQB300 Pinnacle'
	| 'EQB350 Premium'
	| 'EQB350 Exclusive'
	| 'EQB350 Pinnacle'
	| 'EQE350'
	| 'EQE350+'
	| 'EQE350+ Premium'
	| 'EQE350+ Exclusive'
	| 'EQE350+ Pinnacle'
	| 'EQE350 4Matic Premium'
	| 'EQE350 4Matic Exclusive'
	| 'EQE350 4Matic Pinnacle'
	| 'EQE500'
	| 'EQE500 Premium'
	| 'EQE500 4Matic Premium'
	| 'EQE500 4Matic Exclusive'
	| 'EQE500 4Matic Pinnacle'
	| 'EQG'
	| 'EQS450+'
	| 'EQS450+ Premium'
	| 'EQS450+ Exclusive'
	| 'EQS450+ Pinnacle'
	| 'EQS450 4Matic'
	| 'EQS450 4Matic Premium'
	| 'EQS450 4Matic Exclusive'
	| 'EQS450 4Matic Pinnacle'
	| 'EQS580 4Matic'
	| 'EQS580 Premium'
	| 'EQS580 Exclusive'
	| 'EQS580 Pinnacle'
	| 'EQS580 4Matic Premium'
	| 'EQS580 4Matic Exclusive'
	| 'EQS580 4Matic Pinnacle'
	| 'Cargo Van Standard Output'
	| 'Cargo Van High Output'

export type MercedesAMGModels =
	| 'EQS'
	| 'EQE SUV'
	| 'EQE53'
export type MercedesAMGYears =
	| '2024'
	| '2023'
	| '2022'
export type MercedesAMGTrims =
	| 'Premium'
	| 'Exclusive'
	| 'Pinnacle'
	| 'EQE53'
	| 'EQE53 Pinnacle'
	| 'EQE53 Dynamic Plus'
	| 'EQE53 Dynamic Plus Premium'
	| 'EQE53 Dynamic Plus Pinnacle'

export type MazdaModels =
	| 'MX-30'
export type MazdaYears =
	| '2023'
	| '2022'
export type MazdaTrims =
	| 'Base'
	| 'Premium Plus'

export type MaseratiModels =
	| 'GranTurismo Folgore'
	| 'Grecale Folgore'
export type MaseratiYears =
	| '2024'
export type MaseratiTrims =
	| 'Folgore'
	| 'GT'
	| 'Modena'
	| 'Trofeo'

export type LucidModels =
	| 'Gravity'
	| 'Air'
export type LucidYears =
	| '2025'
	| '2024'
	| '2023'
	| '2022'
export type LucidTrims =
	| 'Pure'
	| 'Pure RWD'
	| 'Touring'
	| 'Touring AWD'
	| 'Dream Edition'
	| 'Dream Edition Performance'
	| 'Grand Touring'
	| 'Grand Touring AWD'
	| 'Grand Touring Performance'
	| 'Sapphire'

export type LotusModels =
	| 'Eletre'
	| 'Emeya'
	| 'Evija'
	| 'Type 135'
export type LotusYears =
	| '2028'
	| '2025'
	| '2024'
	| '2023'
export type LotusTrims =
	| 'Base'
	| 'S'
	| 'R'
	| 'Evija'

export type LordstownModels =
	| 'Endurance'
export type LordstownYears =
	|'2023'
export type LordstownTrims =
	| 'Endurance'

export type LincolnModels =
	'Star'
export type LincolnYears =
	|'2025'
export type LincolnTrims =
	| 'Standard'
	| 'Reserve'
	| 'Black Label'

export type LexusModels =
	| 'TZ'
	| 'RZ'
	| 'Electrified Sports'
export type LexusYears =
	| '2026'
	| '2025'
	| '2024'
	| '2023'
export type LexusTrims =
	| 'TZ450e'
	| 'TZ550e'
	| 'RZ300e Premium'
	| 'RZ450e Premium'
	| 'RZ300e Luxury'
	| 'RZ450e Luxury'
	| 'Premium'
	| 'Luxury'
	| 'Base'

export type LandRoverModels =
	| 'Range Rover EV'
	| 'Defender Sport'
export type LandRoverYears =
	| '2027'
	| '2025'
export type LandRoverTrims =
	| 'Base'
	| 'S'
	| 'SE'
	| 'HSE'
	| 'Autobiography'

export type LamborghiniModels =
	|'Lanzador'
export type LamborghiniYears =
	|'2028'
export type LamborghiniTrims =
	|'Lanzador'

export type KiaModels =
	| 'Niro EV'
	| 'EV9'
	| 'EV6'
	| 'EV5'
	| 'EV4'
	| 'EV3'
export type KiaYears =
	| '2026'
	| '2025'
	| '2024'
	| '2023'
	| '2022'
	| '2021'
	| '2020'
export type KiaTrims =
	| 'Wind'
	| 'Wind AWD'
	| 'Wind RWD'
	| 'Wind e-AWD'
	| 'Wave'
	| 'S'
	| 'EX'
	| 'EX Premium'
	| 'Light'
	| 'Light RWD'
	| 'Light Standard Range'
	| 'Light Long Range'
	| 'Light Long Range RWD'
	| 'Land'
	| 'Land e-AWD'
	| 'GT'
	| 'GT AWD'
	| 'GT-Line'
	| 'GT-Line AWD'
	| 'GT-Line RWD'
	| 'GT-Line e-AWD'
	| 'Limited Edition'

export type JeepModels =
	| 'Recon EV'
	| 'Wagoneer S'
export type JeepYears =
	| '2025'
	| '2024'
export type JeepTrims =
	| 'Sport'
	| 'Willys'
	| 'Rubicon'
	| 'Sahara'
	| 'Sahara High Altitude'
	| 'Series I'
	| 'Series II'
	| 'Series III'

export type JaguaModels =
	| 'I-Pace'
export type JaguaYears =
	| '2024'
	| '2023'
	| '2022'
	| '2020'
	| '2019'
export type JaguaTrims =
	| 'I-Pace'
	| 'S'
	| 'SE'
	| 'HSE'
	| 'R-Dynamic HSE'

export type HondaModels =
	| 'Fit EV'
	| 'Prologue'
	| 'CR-V'
export type HondaYears =
	| '2014'
	| '2024'
	| '2025'
export type HondaTrims =
	| 'Fit EV'
	| 'EX FWD'
	| 'EX AWD'
	| 'Touring FWD'
	| 'Touring AWD'
	| 'Elite AWD'
	| 'CR-V Fuel Cell'

export type GMCModels =
	| 'Sierra EV'
	| 'Hummer EV'
	| 'Hummer EV Pickup'
export type GMCYears =
	| '2024'
export type GMCTrims =
	| 'Denali Edition 1'
	| 'Hummer EV2'
	| 'Hummer EV2X'
	| 'Hummer EV3X'
	| 'Edition 1'

export type GenesisModels =
	| 'GV60'
	| 'GV70'
	| 'G80'
	| 'GT90'
export type GenesisYears =
	| '2025'
	| '2024'
	| '2023'
export type GenesisTrims =
	| 'Standard'
	| 'Advanced'
	| 'Performance'
	| 'Prestige'

export type FiskerModels =
	| 'Alaska'
	| 'Pear'
	| 'Ocean'
	| 'Rōnin'
export type FiskerYears =
	| '2026'
	| '2025'
	| '2024'
	| '2023'
export type FiskerTrims =
	| 'Sport'
	| 'Ultra'
	| 'Extreme'
	| 'One'
	| 'Force E'
	| 'Rōnin'

export type FiatModels =
	|'500e'
export type FiatYears =
	| '2024'
	| '2019'
export type FiatTrims =
	| 'INSPI(RED)'
	| 'Inspired by Music'
	| 'Inspired by Beauty'
	| '500e'

export type DodgeModels =
	| 'Charger Daytona EV'
export type DodgeYears =
	| '2025'
	| '2024'
export type DodgeTrims =
	| 'Daytona R/T'
	| 'Daytona Scat Pack'

export type ChryslerModels =
	| 'Airflow'
export type ChryslerYears =
	| '2025'
export type ChryslerTrims =
	| 'Touring'
	| 'Limited'
	| 'Pinnacle'

export type ChevroletModels =
	| 'Corvette EV'
	| 'Equinox EV'
	| 'Silverado EV'
	| 'Camaro EV'
	| 'Blazer EV'
export type ChevroletYears =
	| '2025'
	| '2024'
export type ChevroletTrims =
	| '3WT'
	| '4WT'
	| 'RST First Edition'
	| '1LT'
	| '2LT'
	| '3LT'
	| '2RS'
	| '3RS'
	| 'LT eAWD'
	| 'RS eAWD'
	| 'RS RWD'
	| 'SS'

export type CadillacModels =
	| 'Vistiq'
	| 'Optiq'
	| 'Lyriq'
	| 'Celestiq'
	| 'Escalade IQ/IQL'
export type CadillacYears =
	| '2026'
	| '2025'
	| '2024'
	| '2023'
export type CadillacTrims =
	| 'Tech'
	| 'Sport'
	| 'Luxury'
	| 'Debut Edition'
	| 'Single Motor RWD'
	| 'Dual Motor AWD'
	| 'Escalade IQ'
	| 'Escalade IQ First Edition'
	| 'Celestiq'

export type BytonModels =
	| 'M-Byte'
export type BytonYears =
	| '2022'
export type BytonTrims =
	| 'Standard Range'
	| 'Long Range'

export type BuickModels =
	| 'Electra E5'
export type BuickYears =
	| '2025'
export type BuickTrims =
	| 'Preferred'
	| 'Essence'
	| 'Avenir'

export type BMWModels =
	| 'iX3'
	| 'iX'
	| 'i7'
	| 'i5'
	| 'i4'
	| 'i3'
export type BMWYears =
	| '2026'
	| '2025'
	| '2024'
	| '2023'
	| '2022'
	| '2021'
	| '2020'
	| '2019'
	| '2018'
	| '2017'
export type BMWTrims =
	| 'eDrive35'
	| 'eDrive40'
	| 'eDrive50'
	| 'xDrive40'
	| 'xDrive50'
	| 'xDrive60'
	| 'M50'
	| 'M60'
	| 'M60 xDrive'
	| 'M70'
	| 'Base'
	| 'i3'
	| 'i3s'
	| 'i3 with Range Extender'
	| 'i3s with Range Extender'
	| 'i3 94 Ah'
	| 'i3s 94 Ah'
	| 'i3 94 Ah w/Range Extender'
	| 'i3s 94 Ah w/Range Extender'
	| '120 Ah'
	| 's 120 Ah'
	| '120 Ah w/Range Extender'
	| 's 120 Ah w/Range Extender'

export type AcuraModels =
	|'ZDX'
export type AcuraYears =
	| '2024'
export type AcuraTrims =
	| 'A-Spec'
	| 'Type S'

export type AudiModels =
	| 'SQ8 e-tron'
	| 'SQ6 e-tron'
	| 'Q8 e-tron'
	| 'Q6 e-tron'
	| 'Q4 e-tron'
	| 'A6 e-tron'
	| 'e-tron GT'
export type AudiYears =
	| '2025'
	| '2024'
	| '2023'
	| '2022'
	| '2021'
	| '2020'
	| '2019'
export type AudiTrims =
	| 'Premium'
	| 'Premium 40'
	| 'Premium Plus 40'
	| 'Premium 50'
	| 'Premium Plus 50'
	| 'Premium 55'
	| 'Premium Plus 55'
	| 'Premium Plus'
	| 'Premium Plus Sportback'
	| 'Prestige'
	| 'Prestige 50'
	| 'Prestige 55'
	| 'Prestige Sportback'
	| 'Sportback Premium'
	| 'Sportback Premium 50'
	| 'Sportback Premium 55'
	| 'Sportback Premium Plus'
	| 'Sportback Premium Plus 50'
	| 'Sportback Premium Plus 55'
	| 'Sportback Prestige'
	| 'Sportback Prestige 50'
	| 'Sportback Prestige 55'
	| 'e-tron'
	| 'Chronos Edition'
	| 'RS'

export type AfeelaModels =
	|'EV Sedan'
export type AfeelaYears =
	| '2026'
export type AfeelaTrims =
	| 'Base'

export type CarYearsType =
	| RivianYears
	| TeslaYears
	| FordYears
	| HyundaiYears
	| VolvoYears
	| VolkswagenYears
	| VinFastYears
	| ToyotaYears
	| ScoutYears
	| SubaruYears
	| SmartYears
	| RollsRoyceYears
	| RamYears
	| PorscheYears
	| PolestarYears
	| NissanYears
	| MitsubishiYears
	| MiniYears
	| MercedesMaybachYears
	| MercedesBenzYears
	| MercedesAMGYears
	| MazdaYears
	| MaseratiYears
	| LucidYears
	| LotusYears
	| LordstownYears
	| LincolnYears
	| LexusYears
	| LandRoverYears
	| LamborghiniYears
	| KiaYears
	| JeepYears
	| JaguaYears
	| HondaYears
	| GMCYears
	| GenesisYears
	| FiskerYears
	| FiatYears
	| DodgeYears
	| ChryslerYears
	| ChevroletYears
	| CadillacYears
	| BytonYears
	| BuickYears
	| BMWYears
	| AcuraYears
	| AudiYears
	| AfeelaYears
	| "none";
export type CarModelsType =
	| RivianModels
	| TeslaModels
	| FordModels
	| HyundaiModels
	| VolvoModels
	| VolkswagenModels
	| VinFastModels
	| ToyotaModels
	| ScoutModels
	| SubaruModels
	| SmartModels
	| RollsRoyceModels
	| RamModels
	| PorscheModels
	| PolestarModels
	| NissanModels
	| MitsubishiModels
	| MiniModels
	| MercedesMaybachModels
	| MercedesBenzModels
	| MercedesAMGModels
	| MazdaModels
	| MaseratiModels
	| LucidModels
	| LotusModels
	| LordstownModels
	| LincolnModels
	| LexusModels
	| LandRoverModels
	| LamborghiniModels
	| KiaModels
	| JeepModels
	| JaguaModels
	| HondaModels
	| GMCModels
	| GenesisModels
	| FiskerModels
	| FiatModels
	| DodgeModels
	| ChryslerModels
	| ChevroletModels
	| CadillacModels
	| BytonModels
	| BuickModels
	| BMWModels
	| AcuraModels
	| AudiModels
	| AfeelaModels
	| "none";
export type CarTrimType =
	| RivianTrims
	| TeslaTrims
	| FordTrims
	| HyundaiTrims
	| VolvoTrims
	| VolkswagenTrims
	| VinFastTrims
	| ToyotaTrims
	| ScoutTrims
	| SubaruTrims
	| SmartTrims
	| RollsRoyceTrims
	| RamTrims
	| PorscheTrims
	| PolestarTrims
	| NissanTrims
	| MitsubishiTrims
	| MiniTrims
	| MercedesMaybachTrims
	| MercedesBenzTrims
	| MercedesAMGTrims
	| MazdaTrims
	| MaseratiTrims
	| LucidTrims
	| LotusTrims
	| LordstownTrims
	| LincolnTrims
	| LexusTrims
	| LandRoverTrims
	| LamborghiniTrims
	| KiaTrims
	| JeepTrims
	| JaguaTrims
	| HondaTrims
	| GMCTrims
	| GenesisTrims
	| FiskerTrims
	| FiatTrims
	| DodgeTrims
	| ChryslerTrims
	| ChevroletTrims
	| CadillacTrims
	| BytonTrims
	| BuickTrims
	| BMWTrims
	| AcuraTrims
	| AudiTrims
	| AfeelaTrims
	| "none";


export type ComponentInputItems = {
	carModels: CarMakeModelsForInputItems[];
	carTrims: CarTrimsForInputType[];
	carYears: CarYearsForInputItems[];
};
export type TeslaModelYearTrims = {
	year: TeslaYears;
	trims: TeslaTrims[];
};
export type RivianModelYearTrims = {
	year: RivianYears;
	trims: RivianTrims[];
};
export type FordModelYearTrims = {
	year: FordYears;
	trims: FordTrims[];
};
export type HyundaiModelYearTrims = {
	year: HyundaiYears;
	trims: HyundaiTrims[];
};

export type VolvoModelYearTrims = {
	year: VolvoYears;
	trims: VolvoTrims[];
}
export type VolkswagenModelYearTrims = {
	year: VolkswagenYears;
	trims: VolkswagenTrims[];
}
export type VinFastModelYearTrims = {
	year: VinFastYears;
	trims: VinFastTrims[];
}
export type ToyotaModelYearTrims = {
	year: ToyotaYears;
	trims: ToyotaTrims[];
}
export type ScoutModelYearTrims = {
	year: ScoutYears;
	trims: ScoutTrims[];
}
export type SubaruModelYearTrims = {
	year: SubaruYears;
	trims: SubaruTrims[];
}
export type SmartModelYearTrims = {
	year: SmartYears;
	trims: SmartTrims[];
}
export type RollsRoyceModelYearTrims = {
	year: RollsRoyceYears;
	trims: RollsRoyceTrims[];
}
export type RamModelYearTrims = {
	year: RamYears;
	trims: RamTrims[];
}
export type PorscheModelYearTrims = {
	year: PorscheYears;
	trims: PorscheTrims[];
}
export type PolestarModelYearTrims = {
	year: PolestarYears;
	trims: PolestarTrims[];
}
export type NissanModelYearTrims = {
	year: NissanYears;
	trims: NissanTrims[];
}
export type MitsubishiModelYearTrims = {
	year: MitsubishiYears;
	trims: MitsubishiTrims[];
}

export type MiniModelYearTrims = {
	year: MiniYears;
	trims: MiniTrims[];
}

export type MercedesMaybachModelYearTrims = {
	year: MercedesMaybachYears;
	trims: MercedesMaybachTrims[];
}

export type MercedesBenzModelYearTrims = {
	year: MercedesBenzYears;
	trims: MercedesBenzTrims[];
}

export type MercedesAMGModelYearTrims = {
	year: MercedesAMGYears;
	trims: MercedesAMGTrims[];
}

export type MazdaModelYearTrims = {
	year: MazdaYears;
	trims: MazdaTrims[];
}

export type MaseratiModelYearTrims = {
	year: MaseratiYears;
	trims: MaseratiTrims[];
}

export type LucidModelYearTrims = {
	year: LucidYears;
	trims: LucidTrims[];
}

export type LotusModelYearTrims = {
	year: LotusYears;
	trims: LotusTrims[];
}

export type LordstownModelYearTrims = {
	year: LordstownYears;
	trims: LordstownTrims[];
}

export type LincolnModelYearTrims = {
	year: LincolnYears;
	trims: LincolnTrims[];
}

export type LexusModelYearTrims = {
	year: LexusYears;
	trims: LexusTrims[];
}

export type LandRoverModelYearTrims = {
	year: LandRoverYears;
	trims: LandRoverTrims[];
}

export type LamborghiniModelYearTrims = {
	year: LamborghiniYears;
	trims: LamborghiniTrims[];
}

export type KiaModelYearTrims = {
	year: KiaYears;
	trims: KiaTrims[];
}

export type JeepModelYearTrims = {
	year: JeepYears;
	trims: JeepTrims[];
}

export type JaguaModelYearTrims = {
	year: JaguaYears;
	trims: JaguaTrims[];
}

export type HondaModelYearTrims = {
	year: HondaYears;
	trims: HondaTrims[];
}

export type GMCModelYearTrims = {
	year: GMCYears;
	trims: GMCTrims[];
}

export type GenesisModelYearTrims = {
	year: GenesisYears;
	trims: GenesisTrims[];
}

export type FiskerModelYearTrims = {
	year: FiskerYears;
	trims: FiskerTrims[];
}

export type FiatModelYearTrims = {
	year: FiatYears;
	trims: FiatTrims[];
}

export type DodgeModelYearTrims = {
	year: DodgeYears;
	trims: DodgeTrims[];
}

export type ChryslerModelYearTrims = {
	year: ChryslerYears;
	trims: ChryslerTrims[];
}

export type ChevroletModelYearTrims = {
	year: ChevroletYears;
	trims: ChevroletTrims[];
}

export type CadillacModelYearTrims = {
	year: CadillacYears;
	trims: CadillacTrims[];
}

export type BytonModelYearTrims = {
	year: BytonYears;
	trims: BytonTrims[];
}

export type BuickModelYearTrims = {
	year: BuickYears;
	trims: BuickTrims[];
}

export type BMWModelYearTrims = {
	year: BMWYears;
	trims: BMWTrims[];
}

export type AcuraModelYearTrims = {
	year: AcuraYears;
	trims: AcuraTrims[];
}

export type AudiModelYearTrims = {
	year: AudiYears;
	trims: AudiTrims[];
}

export type AfeelaModelYearTrims = {
	year: AfeelaYears;
	trims: AfeelaTrims[];
}

/**ModelsItems*/

export type TeslaModelsItem = {
	model: TeslaModels;
	yearTrims: TeslaModelYearTrims[];
};

export type RivianModelsItem = {
	model: RivianModels;
	yearTrims: RivianModelYearTrims[];
};

export type FordModelsItem = {
	model: FordModels;
	yearTrims: FordModelYearTrims[];
};

export type HyundaiModelsItem = {
	model: HyundaiModels;
	yearTrims: HyundaiModelYearTrims[];
};

export type VolvoModelsItem = {
	model: VolvoModels;
	yearTrims: VolvoModelYearTrims[];
};

export type VolkswagenModelsItem = {
	model: VolkswagenModels;
	yearTrims: VolkswagenModelYearTrims[];
};

export type VinFastModelsItem = {
	model: VinFastModels;
	yearTrims: VinFastModelYearTrims[];
};

export type ToyotaModelsItem = {
	model: ToyotaModels;
	yearTrims: ToyotaModelYearTrims[];
};

export type ScoutModelsItem = {
	model: ScoutModels;
	yearTrims: ScoutModelYearTrims[];
};

export type SubaruModelsItem = {
	model: SubaruModels;
	yearTrims: SubaruModelYearTrims[];
};

export type SmartModelsItem = {
	model: SmartModels;
	yearTrims: SmartModelYearTrims[];
};

export type RollsRoyceModelsItem = {
	model: RollsRoyceModels;
	yearTrims: RollsRoyceModelYearTrims[];
};

export type RamModelsItem = {
	model: RamModels;
	yearTrims: RamModelYearTrims[];
};

export type PorscheModelsItem = {
	model: PorscheModels;
	yearTrims: PorscheModelYearTrims[];
};

export type PolestarModelsItem = {
	model: PolestarModels;
	yearTrims: PolestarModelYearTrims[];
};

export type NissanModelsItem = {
	model: NissanModels;
	yearTrims: NissanModelYearTrims[];
};

export type MitsubishiModelsItem = {
	model: MitsubishiModels;
	yearTrims: MitsubishiModelYearTrims[];
};

export type MiniModelsItem = {
	model: MiniModels;
	yearTrims: MiniModelYearTrims[];
};

export type MercedesMaybachModelsItem = {
	model: MercedesMaybachModels;
	yearTrims: MercedesMaybachModelYearTrims[];
};

export type MercedesBenzModelsItem = {
	model: MercedesBenzModels;
	yearTrims: MercedesBenzModelYearTrims[];
};

export type MercedesAMGModelsItem = {
	model: MercedesAMGModels;
	yearTrims: MercedesAMGModelYearTrims[];
};

export type MazdaModelsItem = {
	model: MazdaModels;
	yearTrims: MazdaModelYearTrims[];
};

export type MaseratiModelsItem = {
	model: MaseratiModels;
	yearTrims: MaseratiModelYearTrims[];
};

export type LucidModelsItem = {
	model: LucidModels;
	yearTrims: LucidModelYearTrims[];
};

export type LotusModelsItem = {
	model: LotusModels;
	yearTrims: LotusModelYearTrims[];
};

export type LordstownModelsItem = {
	model: LordstownModels;
	yearTrims: LordstownModelYearTrims[];
};

export type LincolnModelsItem = {
	model: LincolnModels;
	yearTrims: LincolnModelYearTrims[];
};

export type LexusModelsItem = {
	model: LexusModels;
	yearTrims: LexusModelYearTrims[];
};

export type LandRoverModelsItem = {
	model: LandRoverModels;
	yearTrims: LandRoverModelYearTrims[];
};

export type LamborghiniModelsItem = {
	model: LamborghiniModels;
	yearTrims: LamborghiniModelYearTrims[];
};

export type KiaModelsItem = {
	model: KiaModels;
	yearTrims: KiaModelYearTrims[];
};


export type JeepModelsItem = {
	model: JeepModels;
	yearTrims: JeepModelYearTrims[];
};

export type JaguaModelsItem = {
	model: JaguaModels;
	yearTrims: JaguaModelYearTrims[];
};

export type HondaModelsItem = {
	model: HondaModels;
	yearTrims: HondaModelYearTrims[];
};

export type GMCModelsItem = {
	model: GMCModels;
	yearTrims: GMCModelYearTrims[];
};

export type GenesisModelsItem = {
	model: GenesisModels;
	yearTrims: GenesisModelYearTrims[];
};

export type FiskerModelsItem = {
	model: FiskerModels;
	yearTrims: FiskerModelYearTrims[];
};

export type FiatModelsItem = {
	model: FiatModels;
	yearTrims: FiatModelYearTrims[];
};

export type DodgeModelsItem = {
	model: DodgeModels;
	yearTrims: DodgeModelYearTrims[];
};

export type ChryslerModelsItem = {
	model: ChryslerModels;
	yearTrims: ChryslerModelYearTrims[];
};

export type ChevroletModelsItem = {
	model: ChevroletModels;
	yearTrims: ChevroletModelYearTrims[];
};

export type CadillacModelsItem = {
	model: CadillacModels;
	yearTrims: CadillacModelYearTrims[];
};

export type BytonModelsItem = {
	model: BytonModels;
	yearTrims: BytonModelYearTrims[];
}

export type BuickModelsItem = {
	model: BuickModels;
	yearTrims: BuickModelYearTrims[];
}

export type BMWModelsItem = {
	model: BMWModels;
	yearTrims: BMWModelYearTrims[];
}

export type AcuraModelsItem = {
	model: AcuraModels;
	yearTrims: AcuraModelYearTrims[];
}

export type AudiModelsItem = {
	model: AudiModels;
	yearTrims: AudiModelYearTrims[];
}

export type AfeelaModlesItem = {
	model: AfeelaModels;
	yearTrims: AfeelaModelYearTrims[];
}


export type CarModelsArray =
	| FordModelsItem[]
	| HyundaiModelsItem[]
	| RivianModelsItem[]
	| TeslaModelsItem[]
	| VolvoModelsItem[]
	| VolkswagenModelsItem[]
	| VinFastModelsItem[]
	| ToyotaModelsItem[]
	| ScoutModelsItem[]
	| SubaruModelsItem[]
	| SmartModelsItem[]
	| RollsRoyceModelsItem[]
	| RamModelsItem[]
	| PorscheModelsItem[]
	| PolestarModelsItem[]
	| NissanModelsItem[]
	| MitsubishiModelsItem[]
	| MiniModelsItem[]
	| MercedesMaybachModelsItem[]
	| MercedesBenzModelsItem[]
	| MercedesAMGModelsItem[]
	| MazdaModelsItem[]
	| MaseratiModelsItem[]
	| LucidModelsItem[]
	| LotusModelsItem[]
	| LordstownModelsItem[]
	| LincolnModelsItem[]
	| LexusModelsItem[]
	| LandRoverModelsItem[]
	| LamborghiniModelsItem[]
	| KiaModelsItem[]
	| JeepModelsItem[]
	| JaguaModelsItem[]
	| HondaModelsItem[]
	| GMCModelsItem[]
	| GenesisModelsItem[]
	| FiskerModelsItem[]
	| FiatModelsItem[]
	| DodgeModelsItem[]
	| ChryslerModelsItem[]
	| CadillacModelsItem[]
	| BytonModelsItem[]
	| BuickModelsItem[]
	| ChevroletModelsItem[]
	| BMWModelsItem[]
	| AcuraModelsItem[]
	| AudiModelsItem[]
	| AfeelaModlesItem[];

export type CarMakeModelsForInputItems = {
	label: CarModelsType;
	value: CarModelsType;
};
export type CarYearsForInputItems = {
	label: CarYearsType;
	value: CarYearsType;
};
export type CarTrimsForInputType = {
	label: CarTrimType;
	value: CarTrimType;
};

export type Car = {
	make: CarMake;
	model: CarModelsType;
	year: CarYearsType;
	trim: CarTrimType;
}
