/**
 * @fileoverview Interface definitions for picker input components.
 * Contains interfaces for formatting car data as selectable input items.
 * @module typesEnumsInterfacesConsts/interfaces/inputInterfaces
 */

import {CarModelsType} from "../types/modelTypes";
import {CarTrimType} from "../types/trimTypes";
import {CarYearsType} from "../types/yearTypes";

/**
 * Represents a car model formatted for use in dropdown/picker input components.
 * @description Used for rendering model options in selection inputs with label-value pairs.
 */
interface CarMakeModelsForInputItems {
	/**
	 * The display label for the car model.
	 */
	label: CarModelsType;
	/**
	 * The value associated with the car model selection.
	 */
	value: CarModelsType;
}

/**
 * Represents a car year formatted for use in dropdown/picker input components.
 * @description Used for rendering year options in selection inputs with label-value pairs.
 */
interface CarYearsForInputItems {
	/**
	 * The display label for the car year.
	 */
	label: CarYearsType;
	/**
	 * The value associated with the car year selection.
	 */
	value: CarYearsType;
}

/**
 * Represents a car trim formatted for use in dropdown/picker input components.
 * @description Used for rendering trim options in selection inputs with label-value pairs.
 */
interface CarTrimsForInputType {
	/**
	 * The display label for the car trim.
	 */
	label: CarTrimType;
	/**
	 * The value associated with the car trim selection.
	 */
	value: CarTrimType;
}

/**
 * Represents the complete set of input items available for the picker component.
 * @description Aggregates all selectable options (models, trims, years) for the EV picker UI.
 */
interface ComponentInputItems {
	/**
	 * Array of available car models formatted for input selection.
	 */
	carModels: CarMakeModelsForInputItems[];
	/**
	 * Array of available car trims formatted for input selection.
	 */
	carTrims: CarTrimsForInputType[];
	/**
	 * Array of available car years formatted for input selection.
	 */
	carYears: CarYearsForInputItems[];
}

export type {
	CarMakeModelsForInputItems,
	CarYearsForInputItems,
	CarTrimsForInputType,
	ComponentInputItems
};
