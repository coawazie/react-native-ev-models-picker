import {TranslationCopy} from "../typesEnumsInterfacesConsts/interfaces";
import {SupportedLangues} from "../typesEnumsInterfacesConsts/types";

/**
 * @description Props for the translations function.
 * @property {SupportedLangues} language - The language code to retrieve translations for (e.g., "en", "fr").
 */
interface TranslationsProps {
	language: SupportedLangues;
}

/**
 * @description Retrieves localized UI labels for the EV picker component based on the specified language.
 * Provides translations for car make, model, year, and trim selection labels.
 * Currently supports English ("en") and French ("fr") with English as the default fallback.
 * @param {TranslationsProps} x - The function parameters.
 * @param {SupportedLangues} x.language - The language code to retrieve translations for.
 * @returns {TranslationCopy} Object containing localized strings for carMake, carModel, carYear, and carTrim labels.
 * @example
 * // Get English translations
 * const labels = translations({ language: "en" });
 * // Returns: { carMake: "Car Make", carModel: "Car Model", carYear: "Car Year", carTrim: "Car Trim" }
 * @example
 * // Get French translations
 * const labels = translations({ language: "fr" });
 * // Returns: { carMake: "Car Make", carModel: "Car Model", carYear: "Car Year", carTrim: "Car Trim" }
 */
const translations = (x: TranslationsProps): TranslationCopy => {
	const {language} = x;
	switch (language) {
		case "en": {
			return {
				carMake: "Car Make",
				carModel: "Car Model",
				carYear: "Car Year",
				carTrim: "Car Trim"
			};
		}
		case "fr": {
			return {
				carMake: "Car Make",
				carModel: "Car Model",
				carYear: "Car Year",
				carTrim: "Car Trim"
			};
		}
		default: {
			return {
				carMake: "Car Make",
				carModel: "Car Model",
				carYear: "Car Year",
				carTrim: "Car Trim"
			};
		}
	}
};

export {translations};
