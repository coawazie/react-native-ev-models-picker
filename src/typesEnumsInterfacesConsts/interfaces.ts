/**
 * @fileoverview Core interface definitions for the EV Models Picker library.
 * Contains interfaces for car make items, translation copy, and complete car representations.
 * @module typesEnumsInterfacesConsts/interfaces
 */

import {CarMake} from "./types";
import {CarModelsType} from "./types/modelTypes";
import {CarTrimType} from "./types/trimTypes";
import {CarYearsType} from "./types/yearTypes";

/**
 * Represents a car make item for use in dropdown/picker components.
 * @description Used for rendering car manufacturer options in selection inputs.
 */
interface CarMakeItemType {
	/**
	 * The display label for the car make.
	 */
	label: CarMake;
	/**
	 * The value associated with the car make selection.
	 */
	value: CarMake;
	/**
	 * Whether this car make option is disabled in the picker.
	 */
	disabled?: boolean;
}


/**
 * Represents translation copy strings for the car picker UI labels.
 * @description Used for internationalization of the picker component labels.
 */
interface TranslationCopy {
	/**
	 * The translated label for the car make field.
	 */
	carMake: string;
	/**
	 * The translated label for the car model field.
	 */
	carModel: string;
	/**
	 * The translated label for the car year field.
	 */
	carYear: string;
	/**
	 * The translated label for the car trim field.
	 */
	carTrim: string;
}

/**
 * Represents a complete electric vehicle selection with all attributes.
 * @description Contains the full specification of a selected EV including make, model, year, and trim.
 */
interface Car {
	/**
	 * The manufacturer/brand of the car.
	 */
	make: CarMake;
	/**
	 * The specific model name of the car.
	 */
	model: CarModelsType;
	/**
	 * The model year of the car.
	 */
	year: CarYearsType;
	/**
	 * The trim level/variant of the car.
	 */
	trim: CarTrimType;
}


export type {CarMakeItemType, TranslationCopy, Car}
