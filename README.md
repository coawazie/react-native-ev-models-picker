# React Native EV Models Picker

<table >
<td >
<img src="https://github.com/chinomnsoawazie/react-native-ev-models-picker/assets/26738901/620ca276-6e6a-4885-937c-f4a54c28f6ab" width="200" height="200"/>

<img src="https://github.com/chinomnsoawazie/react-native-ev-models-picker/assets/26738901/390baaac-3ef6-476b-a947-63e9257ce762" width="200" height="200"/>

<img src="https://github.com/chinomnsoawazie/react-native-ev-models-picker/assets/26738901/3abae66c-a865-4965-81c7-5024897b7507" width="200" height="200"/>
</td>
</table>

See an example usage here: 👉🏿 https://snack.expo.dev/@coawazie/ev-selector-example?platform=ios

This package provides a customizable dropdown selector component for React Native applications, allowing users to select
electric vehicle (EV) makes, years, trims, and models. It's built with TypeScript for type safety and developer
productivity.

## Features

- Dropdown selectors for EV makes, years, trims, and models.
- Customizable UI to match your app's design.
- Type definitions for TypeScript support.
- Easy to integrate with React Native apps.

# Installation

To install the React Native EV Models Picker, run:

```
yarn add @coawazie/react-native-ev-models-picker react-native-dropdown-picker react-native-safe-area-context  # using yarn

npm install @coawazie/react-native-ev-models-picker react-native-dropdown-picker react-native-safe-area-context  # using npm
```

# Usage

First, import the EVSelector component in your React Native app:

```typescript tsx
import {EVSelector} from '@coawazie/react-native-ev-models-picker';

```

Then, use the EVSelector component in your app. Here's a basic example:

```typescript jsx
import React, {useState} from 'react';
import {EVSelector} from '@coawazie/react-native-ev-models-picker';
import {View} from 'react-native';

const App = () => {
	const [selectedEV, setSelectedEV] = useState(null);
	return (
		<View>
		<EVSelector onValueChange={(value) => setSelectedEV(value)}/>
		</View>
	);
};

export default App;
```

## Component  API

## Props

<table style="width:100%">
<tr>
<td><h3>Prop</h3></td>
<td><h3>Type</h3></td>
<td><h3>Default</h3></td>
<td><h3>Note</h3></td>
</tr>
<tr>
<td> <code>listMode</code> </td>
<td><code>String</code></td>
<td><code>ScrollView</code></td>
<td>Determines how the lists are shown. Allowed values are <code>MODAL </code> and <code>SCROLLVIEW</code></td>
</tr>

<tr>
<td> <code>optionsLevel</code> </td>
<td><code>String</code></td>
<td><code>CarTrim</code></td>
<td>Determines what option selectors are shown. Allowed values are <code>CarMake </code>, <code>CarModel</code>,  <code>CarYear</code> and  <code>CarTrim</code></td>
</tr>
<tr>
<td> <code>accessibilityLabel</code> </td>
<td><code>String</code></td>
<td></td>
<td>Used for accessibility purposes</td>
</tr>

<tr>
<td> <code>carMakePlaceholder</code> </td>
<td><code>String</code></td>
<td>"Select an item"</td>
<td>Placeholder string for car make</td>
</tr>

<tr>
<td> <code>carModelPlaceholder</code> </td>
<td><code>String</code></td>
<td>"Select an item"</td>
<td>Placeholder string for car model</td>
</tr>
<tr>
<td> <code>carYearPlaceholder</code> </td>
<td><code>String</code></td>
<td>"Select an item"</td>
<td>Placeholder string for car year</td>
</tr>
<tr>
<td> <code>carTrimPlaceholder</code> </td>
<td><code>String</code></td>
<td>"Select an item"</td>
<td>Placeholder string for car trim</td>
</tr>

<tr>
<td> <code>language</code> </td>
<td><code>String</code></td>
<td><code>"en"</code></td>
<td>Language for labels. Supported: <code>"en"</code>, <code>"fr"</code></td>
</tr>

<tr>
<td> <code>width</code> </td>
<td><code>Number</code></td>
<td></td>
<td>Width of the selector component</td>
</tr>

<tr>
<td> <code>backgroundColor</code> </td>
<td><code>String</code></td>
<td></td>
<td>Background color of the dropdowns</td>
</tr>

<tr>
<td> <code>fontColor</code> </td>
<td><code>String</code></td>
<td></td>
<td>Font color of the dropdown text</td>
</tr>

<tr>
<td> <code>labelColor</code> </td>
<td><code>String</code></td>
<td></td>
<td>Color of the labels above dropdowns</td>
</tr>

<tr>
<td> <code>labelFontSize</code> </td>
<td><code>Number</code></td>
<td></td>
<td>Font size of the labels</td>
</tr>

<tr>
<td> <code>minHeight</code> </td>
<td><code>Number</code></td>
<td></td>
<td>Minimum height of the dropdowns</td>
</tr>

<tr>
<td> <code>borderColor</code> </td>
<td><code>String</code></td>
<td></td>
<td>Border color of the dropdowns</td>
</tr>

<tr>
<td> <code>disabled</code> </td>
<td><code>Boolean</code></td>
<td><code>false</code></td>
<td>Disables all dropdowns when true</td>
</tr>

</table>

## Events/Callbacks

<table style="width:100%">
<tr>
<td><h3>Event name</h3></td>
<td><h3>Returns</h3></td>
<td><h3>Notes</h3></td>
</tr>
<tr>
<td> <code>onValueChange</code> </td>
<td><code>{CarMake, CarModel, CarYear, CarTrim}</code></td>
<td>Callback that is called when any value changes</td>
</tr>
<tr>
<td> <code>onCarMakeOpen</code> </td>
<td><code>Function</code></td>
<td>Callback that is called when car make selection dropdown opens</td>
</tr>
<tr>
<td> <code>onCarMakeClose</code> </td>
<td><code>Function</code></td>
<td>Callback that is called when car make selection dropdown closes</td>
</tr>
<tr>
<td> <code>onCarModelOpen</code> </td>
<td><code>Function</code></td>
<td>Callback that is called when car model selection dropdown opens</td>
</tr>
<tr>
<td> <code>onCarModelClose</code> </td>
<td><code>Function</code></td>
<td>Callback that is called when car model selection dropdown closes</td>
</tr>
<tr>
<td> <code>onCarYearOpen</code> </td>
<td><code>Function</code></td>
<td>Callback that is called when car year selection dropdown opens</td>
</tr>
<tr>
<td> <code>onCarYearClose</code> </td>
<td><code>Function</code></td>
<td>Callback that is called when car year selection dropdown closes</td>
</tr>
<tr>
<td> <code>onCarTrimOpen</code> </td>
<td><code>Function</code></td>
<td>Callback that is called when car trim selection dropdown opens</td>
</tr>
<tr>
<td> <code>onCarTrimClose</code> </td>
<td><code>Function</code></td>
<td>Callback that is called when car trim selection dropdown closes</td>
</tr>

</table>

## Contributing

We welcome contributions to the React Native EV Selector! If you have suggestions for improvements or encounter any
issues, please open an issue or submit a pull request.

## License

This project is licensed under the MIT License - see the LICENSE file for details.
