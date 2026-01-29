/**
 * @fileoverview EVSelector component for selecting electric vehicle make, model, year, and trim.
 * Provides a cascading dropdown picker interface for EV selection with internationalization support.
 * @module EVSelector
 * @format
 */
import {useEffect, useState} from "react";
import {ColorValue, Text, TextStyle, View} from "react-native";
import DropDownPicker from "react-native-dropdown-picker";
import {SafeAreaProvider} from 'react-native-safe-area-context';
import {getMakeModels, getModelYears, getYearTrims, translations} from "./helpers";
import {evMakes} from "./typesEnumsInterfacesConsts/constants/carMakeConstants";
import {Car} from "./typesEnumsInterfacesConsts/interfaces";
import {ComponentInputItems} from "./typesEnumsInterfacesConsts/interfaces/inputInterfaces";
import {CarMake, SupportedLangues} from "./typesEnumsInterfacesConsts/types";
import {CarModelsType} from "./typesEnumsInterfacesConsts/types/modelTypes";
import {CarTrimType} from "./typesEnumsInterfacesConsts/types/trimTypes";
import {CarYearsType} from "./typesEnumsInterfacesConsts/types/yearTypes";

/**
 * Configuration properties for the EVSelector dropdown picker component.
 * @description Defines all customization options for the EV selection interface including
 * behavior controls, callbacks, styling, placeholders, and internationalization settings.
 * @property {boolean} [disabled] - When true, disables all dropdown pickers preventing user interaction.
 * @property {"MODAL" | "SCROLLVIEW"} [listMode] - Display mode for dropdown lists. "MODAL" shows options in a modal
 *   overlay, "SCROLLVIEW" renders inline.
 * @property {'CarMake' | 'CarModel' | 'CarYear' | 'CarTrim'} [optionsLevel] - Controls which dropdown levels are
 *   visible. Setting to 'CarMake' shows only make, 'CarModel' shows make and model, etc.
 * @property {(p: Car) => void} onValueChange - Required callback fired whenever any selection changes. Receives the
 *   complete Car object with current selections.
 * @property {() => void} [onCarMakeOpen] - Callback fired when the car make dropdown opens.
 * @property {() => void} [onCarMakeClose] - Callback fired when the car make dropdown closes.
 * @property {() => void} [onCarModelOpen] - Callback fired when the car model dropdown opens.
 * @property {() => void} [onCarModelClose] - Callback fired when the car model dropdown closes.
 * @property {() => void} [onCarYearOpen] - Callback fired when the car year dropdown opens.
 * @property {() => void} [onCarYearClose] - Callback fired when the car year dropdown closes.
 * @property {() => void} [onCarTrimOpen] - Callback fired when the car trim dropdown opens.
 * @property {() => void} [onCarTrimClose] - Callback fired when the car trim dropdown closes.
 * @property {string} [accessibilityLabel] - Accessibility label for the entire picker container for screen readers.
 * @property {number} [width] - Width of the dropdown pickers. Defaults to "75%" if not specified.
 * @property {number} [height] - Height configuration for the dropdown pickers.
 * @property {string} [carMakePlaceholder] - Placeholder text displayed in the car make dropdown when no selection is
 *   made.
 * @property {string} [carModelPlaceholder] - Placeholder text displayed in the car model dropdown when no selection is
 *   made.
 * @property {string} [carYearPlaceholder] - Placeholder text displayed in the car year dropdown when no selection is
 *   made.
 * @property {string} [carTrimPlaceholder] - Placeholder text displayed in the car trim dropdown when no selection is
 *   made.
 * @property {ColorValue} [fontColor] - Text color for dropdown items and selected values.
 * @property {string} [backgroundColor] - Background color for the dropdown picker containers.
 * @property {number} [minHeight] - Minimum height for dropdown pickers. Defaults to 24 if not specified.
 * @property {ColorValue} [borderColor] - Border color for the dropdown picker containers.
 * @property {SupportedLangues} [language] - Language code for internationalized labels. Defaults to "en" (English).
 * @property {ColorValue} [labelColor] - Text color for the section labels above each dropdown.
 * @property {TextStyle["fontSize"]} [labelFontSize] - Font size for section labels. Defaults to 18 if not specified.
 * @property {TextStyle["fontWeight"]} [labelFontWeight] - Font weight for section labels.
 */
type PackageDropDownTypes = {
	disabled?: boolean;
	listMode?: "MODAL" | "SCROLLVIEW";
	optionsLevel?: 'CarMake' | 'CarModel' | 'CarYear' | 'CarTrim'
	onValueChange: (p: Car) => void;
	onCarMakeOpen?: () => void;
	onCarMakeClose?: () => void;
	onCarModelOpen?: () => void;
	onCarModelClose?: () => void;
	onCarYearOpen?: () => void;
	onCarYearClose?: () => void;
	onCarTrimOpen?: () => void;
	onCarTrimClose?: () => void;
	accessibilityLabel?: string;
	width?: number;
	height?: number;
	carMakePlaceholder?: string;
	carModelPlaceholder?: string;
	carYearPlaceholder?: string;
	carTrimPlaceholder?: string;
	fontColor?: ColorValue;
	backgroundColor?: string;
	minHeight?: number;
	borderColor?: ColorValue;
	language?: SupportedLangues;
	labelColor?: ColorValue;
	labelFontSize?: TextStyle["fontSize"];
	labelFontWeight?: TextStyle["fontWeight"];
};

/**
 * EVSelector is the main electric vehicle picker component that provides a cascading
 * dropdown interface for selecting EV make, model, year, and trim.
 * @description A multi-level dropdown picker component that allows users to select electric
 * vehicle specifications in a hierarchical manner. When a make is selected, available models
 * are populated. Selecting a model populates available years, and selecting a year populates
 * available trims. The component supports internationalization, custom styling, and can be
 * configured to show only specific levels of the selection hierarchy.
 * @param {PackageDropDownTypes} x - Configuration properties for the EVSelector component.
 * @returns {JSX.Element} A SafeAreaProvider containing the cascading dropdown pickers for EV selection.
 * @example
 * // Basic usage
 * <EVSelector
 *   onValueChange={(car) => console.log('Selected:', car)}
 *   language="en"
 * />
 *
 * @example
 * // With custom styling and callbacks
 * <EVSelector
 *   onValueChange={(car) => handleCarSelection(car)}
 *   backgroundColor="#f5f5f5"
 *   fontColor="#333"
 *   borderColor="#ccc"
 *   labelColor="#000"
 *   labelFontSize={16}
 *   width={300}
 *   carMakePlaceholder="Select a make..."
 *   carModelPlaceholder="Select a model..."
 *   onCarMakeOpen={() => trackEvent('make_dropdown_opened')}
 *   language="es"
 * />
 *
 * @example
 * // Show only make and model (hide year and trim)
 * <EVSelector
 *   onValueChange={(car) => console.log(car)}
 *   optionsLevel="CarModel"
 * />
 */
const EVSelector = (x: PackageDropDownTypes) => {
	const {
		disabled,
		listMode,
		onCarMakeOpen,
		carMakePlaceholder,
		carModelPlaceholder,
		carYearPlaceholder,
		carTrimPlaceholder,
		fontColor,
		onCarMakeClose,
		onCarModelOpen,
		onCarModelClose,
		onValueChange,
		accessibilityLabel,
		width,
		backgroundColor,
		minHeight,
		borderColor,
		onCarTrimOpen,
		onCarTrimClose,
		onCarYearOpen,
		onCarYearClose,
		language,
		labelColor,
		labelFontSize,
		optionsLevel
	} = x;
	
	const [componentItems, setComponentItems] = useState<ComponentInputItems>({
		carTrims: [],
		carYears: [],
		carModels: []
	});
	
	
	const [carMake, setCarMake] = useState<CarMake>("none");
	const [carModel, setCarModel] = useState<CarModelsType>("none");
	const [carYear, setCarYear] = useState<CarYearsType>("none");
	const [carTrim, setCarTrim] = useState<CarTrimType>("none");
	
	const {carTrims, carYears, carModels} = componentItems;
	const [openStates, setOpenStates] = useState({
		carMakeOpen: false,
		carModelOpen: false,
		carYearOpen: false,
		carTrimOpen: false
	});
	const {carMakeOpen, carModelOpen, carTrimOpen, carYearOpen} = openStates;
	
	
	useEffect(() => {
		const returnedCarModels = getMakeModels({carMake: carMake});
		setComponentItems((e) => ({...e, carModels: returnedCarModels}));
	}, [carMake]);
	
	useEffect(() => {
		const carModelYears = getModelYears({
			make: carMake,
			model: carModel
		});
		setComponentItems((e) => ({...e, carYears: carModelYears}));
	}, [carModel]);
	
	useEffect(() => {
		const yearTrims = getYearTrims({
			carMake: carMake,
			carModel: carModel,
			carYear: carYear
		});
		setComponentItems((e) => ({...e, carTrims: yearTrims}));
	}, [carYear]);
	
	useEffect(() => {
		const CarItem: Car = {
			make: carMake,
			model: carModel,
			year: carYear,
			trim: carTrim
		};
		onValueChange(CarItem);
	}, [carMake, carModel, carYear, carTrim]);
	
	const {
		carMake: carMakeText,
		carTrim: carTrimText,
		carYear: carYearText,
		carModel: carModelText
	} = translations({language: language ?? "en"});
	
	/**
	 * Toggles the car make dropdown open/closed state and resets dependent selections.
	 * @description When toggled, clears the model, year, and trim selections to ensure
	 * the cascading dropdowns reflect valid options for the new make selection.
	 */
	const toggleCarMake = () => {
		setComponentItems((e) => ({
			...e,
			carModels: [],
			carYears: [],
			carTrims: []
		}));
		setOpenStates((e) => ({...e, carMakeOpen: !e.carMakeOpen}));
	};
	
	/**
	 * Toggles the car model dropdown open/closed state.
	 * @description Controls visibility of the model selection dropdown.
	 */
	const toggleCarModel = () => {
		setOpenStates((e) => ({...e, carModelOpen: !e.carModelOpen}));
	};
	
	/**
	 * Toggles the car year dropdown open/closed state.
	 * @description Controls visibility of the year selection dropdown.
	 */
	const toggleCarYear = () => {
		setOpenStates((e) => ({...e, carYearOpen: !e.carYearOpen}));
	};
	
	/**
	 * Toggles the car trim dropdown open/closed state.
	 * @description Controls visibility of the trim selection dropdown.
	 */
	const toggleCarTrim = () => {
		setOpenStates((e) => ({...e, carTrimOpen: !e.carTrimOpen}));
	};
	const hideCarModel = optionsLevel === 'CarMake'
	const hideCarYear = optionsLevel === 'CarMake' || optionsLevel === 'CarModel';
	const hideTrim =
		optionsLevel === 'CarMake' || optionsLevel === 'CarModel' || optionsLevel === 'CarYear';
	
	const sortedEvMakes = evMakes.sort((a, b) => a.label.localeCompare(b.label));
	
	return (<SafeAreaProvider
		accessibilityLabel={accessibilityLabel}
		style={{zIndex: 10}}
	>
		<View>
			<Text
				style={{
					fontSize: labelFontSize ?? 18,
					fontWeight: "bold",
					color: labelColor,
					marginVertical: 10
				}}
			>
				{carMakeText}
			</Text>
			<DropDownPicker
				zIndex={4000}
				zIndexInverse={1000}
				disabled={disabled}
				listMode={listMode ? "MODAL" : "SCROLLVIEW"}
				onOpen={onCarMakeOpen}
				onClose={onCarMakeClose}
				open={carMakeOpen}
				closeAfterSelecting
				value={carMake}
				items={sortedEvMakes}
				setOpen={toggleCarMake}
				setValue={setCarMake}
				containerStyle={{
					width: width ?? "75%",
					maxWidth: "100%"
				}}
				style={{
					backgroundColor,
					paddingVertical: 2,
					minHeight: minHeight ?? 24,
					elevation: 10,
					borderRadius: 5,
					borderColor
				}}
				textStyle={{
					color: fontColor
				}}
				placeholder={carMakePlaceholder}
			/>
		</View>
		
		{!hideCarModel && <View style={{zIndex: -1}}>
      <Text
        style={{
					fontSize: labelFontSize ?? 18,
					fontWeight: "bold",
					color: labelColor,
					marginVertical: 10
				}}
      >
				{carModelText}
      </Text>
      <DropDownPicker
        disabled={disabled}
        listMode={listMode ? "MODAL" : "SCROLLVIEW"}
        onOpen={onCarModelOpen}
        onClose={onCarModelClose}
        open={carModelOpen}
        closeAfterSelecting
        value={carModel}
        items={carModels}
        setOpen={toggleCarModel}
        setValue={setCarModel}
        containerStyle={{
					width: width ?? "75%",
					maxWidth: "100%"
				}}
        style={{
					backgroundColor,
					paddingVertical: 2,
					minHeight: minHeight ?? 24,
					elevation: 10,
					borderRadius: 5,
					borderColor
				}}
        textStyle={{
					color: fontColor
				}}
        placeholder={carModelPlaceholder}
      />
    </View>
		}
		
		{!hideCarYear && <View style={{zIndex: -2}}>
      <Text
        style={{
					fontSize: labelFontSize ?? 18,
					fontWeight: "bold",
					color: labelColor,
					marginVertical: 10
				}}
      >
				{carYearText}
      </Text>
      <DropDownPicker
        disabled={disabled}
        listMode={listMode ? "MODAL" : "SCROLLVIEW"}
        onOpen={onCarYearOpen}
        onClose={onCarYearClose}
        open={carYearOpen}
        closeAfterSelecting
        value={carYear}
        items={carYears}
        setOpen={toggleCarYear}
        setValue={setCarYear}
        containerStyle={{
					width: width ?? "75%",
					maxWidth: "100%"
				}}
        style={{
					backgroundColor,
					paddingVertical: 2,
					minHeight: minHeight ?? 24,
					elevation: 10,
					borderRadius: 5,
					borderColor
				}}
        textStyle={{
					color: fontColor
				}}
        placeholder={carYearPlaceholder}
      />
    </View>
		}
		
		{!hideTrim && <View style={{zIndex: -3}}>
      <Text
        style={{
					fontSize: labelFontSize ?? 18,
					fontWeight: "bold",
					color: labelColor,
					marginVertical: 10
				}}
      >
				{carTrimText}
      </Text>
      <DropDownPicker
        disabled={disabled}
        listMode={listMode ? "MODAL" : "SCROLLVIEW"}
        onOpen={onCarTrimOpen}
        onClose={onCarTrimClose}
        open={carTrimOpen}
        closeAfterSelecting
        value={carTrim}
        items={carTrims}
        setOpen={toggleCarTrim}
        setValue={setCarTrim}
        containerStyle={{
					width: width ?? "75%",
					maxWidth: "100%"
				}}
        style={{
					backgroundColor,
					paddingVertical: 2,
					minHeight: minHeight ?? 24,
					elevation: 10,
					borderRadius: 5,
					borderColor
				}}
        textStyle={{
					color: fontColor
				}}
        placeholder={carTrimPlaceholder}
      />
    </View>
		}
	</SafeAreaProvider>)
};

export default EVSelector;
