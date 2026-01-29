/**
 * @fileoverview Core type definitions for the EV Models Picker library.
 * Contains fundamental types for car makes and supported languages.
 * @module typesEnumsInterfacesConsts/types
 */

import {CarMakes} from "./constants/carMakeConstants";

/**
 * Union type representing all supported car manufacturer names.
 * @description Derived from the CarMakes constant array to ensure type safety for car make values.
 */
type CarMake = (typeof CarMakes)[number];

/**
 * Union type representing supported language codes for internationalization.
 * @description Currently supports English (en) and French (fr) locales.
 */
type SupportedLangues = "en" | "fr";

export type {
	CarMake,
	SupportedLangues
};
