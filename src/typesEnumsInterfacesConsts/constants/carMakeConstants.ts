import {CarMakeItemType} from "../interfaces";

const CarMakes = [
	"Acura",
	"Afeela",
	"Alfa Romeo",
	"Audi",
	"Bentley",
	"BMW",
	"Bugatti Rimac",
	"Buick",
	"BYD Motors",
	"Byton",
	"Cadillac",
	"Chevrolet",
	"Chrysler",
	"Dodge",
	"Ferrari",
	"Fiat",
	"Fisker",
	"Ford",
	"Genesis",
	"GMC",
	"Honda",
	"Hyundai",
	"Jaguar",
	"Jeep",
	"Kandi",
	"Karma",
	"Kia",
	"Lamborghini",
	"Land Rover",
	"Lexus",
	"Lincoln",
	"Lordstown",
	"Lotus",
	"Lucid",
	"Maserati",
	"Mazda",
	"McLaren",
	"Mercedes-AMG",
	"Mercedes-Benz",
	"Mercedes-Maybach",
	"Mini",
	"Mitsubishi",
	"Nissan",
	"Polestar",
	"Porsche",
	"Ram",
	"Rivian",
	"Rolls-Royce",
	"Scout",
	"Smart",
	"Solectria",
	"Subaru",
	"Tesla",
	"Toyota",
	"VinFast",
	"Volkswagen",
	"Volvo",
	"Others",
	"none"
] as const;

const evMakes: CarMakeItemType[] = [
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
		label: "Alfa Romeo",
		value: "Alfa Romeo",
		disabled: false
	},
	{
		label: "Audi",
		value: "Audi",
		disabled: false
	},
	{
		label: "Bentley",
		value: "Bentley",
		disabled: false
	},
	{
		label: "BMW",
		value: "BMW",
		disabled: false
	},
	{
		label: "Bugatti Rimac",
		value: "Bugatti Rimac",
		disabled: false
	},
	{
		label: "Buick",
		value: "Buick",
		disabled: false
	},
	{
		label: "BYD Motors",
		value: "BYD Motors",
		disabled: false
	},
	{
		label: "Byton",
		value: "Byton",
		disabled: false
	},
	{
		label: "Cadillac",
		value: "Cadillac",
		disabled: false
	},
	{
		label: "Chevrolet",
		value: "Chevrolet",
		disabled: false
	},
	{
		label: "Chrysler",
		value: "Chrysler",
		disabled: false
	},
	{
		label: "Dodge",
		value: "Dodge",
		disabled: false
	},
	{
		label: "Ferrari",
		value: "Ferrari",
		disabled: false
	},
	{
		label: "Fiat",
		value: "Fiat",
		disabled: false
	},
	{
		label: "Fisker",
		value: "Fisker",
		disabled: false
	},
	{
		label: "Ford",
		value: "Ford",
		disabled: false
	},
	{
		label: "Genesis",
		value: "Genesis",
		disabled: false
	},
	{
		label: "GMC",
		value: "GMC",
		disabled: false
	},
	{
		label: "Honda",
		value: "Honda",
		disabled: false
	},
	{
		label: "Hyundai",
		value: "Hyundai",
		disabled: false
	},
	{
		label: "Jaguar",
		value: "Jaguar",
		disabled: false
	},
	{
		label: "Jeep",
		value: "Jeep",
		disabled: false
	},
	{
		label: "Karma",
		value: "Karma",
		disabled: false
	},
	{
		label: "Kia",
		value: "Kia",
		disabled: false
	},
	{
		label: "Lamborghini",
		value: "Lamborghini",
		disabled: false
	},
	{
		label: "Land Rover",
		value: "Land Rover",
		disabled: false
	},
	{
		label: "Lexus",
		value: "Lexus",
		disabled: false
	},
	{
		label: "Lincoln",
		value: "Lincoln",
		disabled: false
	},
	{
		label: "Lordstown",
		value: "Lordstown",
		disabled: false
	},
	{
		label: "Lotus",
		value: "Lotus",
		disabled: false
	},
	{
		label: "Lucid",
		value: "Lucid",
		disabled: false
	},
	{
		label: "Maserati",
		value: "Maserati",
		disabled: false
	},
	{
		label: "Mazda",
		value: "Mazda",
		disabled: false
	},
	{
		label: "McLaren",
		value: "McLaren",
		disabled: false
	},
	{
		label: "Mercedes-AMG",
		value: "Mercedes-AMG",
		disabled: false
	},
	{
		label: "Mercedes-Benz",
		value: "Mercedes-Benz",
		disabled: false
	},
	{
		label: "Mercedes-Maybach",
		value: "Mercedes-Maybach",
		disabled: false
	},
	{
		label: "Mini",
		value: "Mini",
		disabled: false
	},
	{
		label: "Mitsubishi",
		value: "Mitsubishi",
		disabled: false
	},
	{
		label: "Nissan",
		value: "Nissan",
		disabled: false
	},
	{
		label: "Polestar",
		value: "Polestar",
		disabled: false
	},
	{
		label: "Porsche",
		value: "Porsche",
		disabled: false
	},
	{
		label: "Ram",
		value: "Ram",
		disabled: false
	},
	{
		label: "Rivian",
		value: "Rivian",
		disabled: false
	},
	{
		label: "Rolls-Royce",
		value: "Rolls-Royce",
		disabled: false
	},
	{
		label: "Scout",
		value: "Scout",
		disabled: false
	},
	{
		label: "Smart",
		value: "Smart",
		disabled: false
	},
	{
		label: "Solectria",
		value: "Solectria",
		disabled: false
	},
	{
		label: "Subaru",
		value: "Subaru",
		disabled: false
	},
	{
		label: "Tesla",
		value: "Tesla",
		disabled: false
	},
	{
		label: "Toyota",
		value: "Toyota",
		disabled: false
	},
	{
		label: "VinFast",
		value: "VinFast",
		disabled: false
	},
	{
		label: "Volkswagen",
		value: "Volkswagen",
		disabled: false
	},
	{
		label: "Volvo",
		value: "Volvo",
		disabled: false
	},
	{
		label: "Others",
		value: "Others",
		disabled: false
	}
];

export {CarMakes, evMakes};
