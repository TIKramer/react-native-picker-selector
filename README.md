# react-native-picker-selector

A picker component made only using React native components. A solution for maintaining consistency in the look and behaviour of your app's picker component across IOS and Android.

Easy to use and highly customizable!

Open to feedback, ideas and contributions :)

<p float="left">

<img src="https://github.com/TIKramer/react-native-picker-selector/blob/main/screenshots/Example.gif?raw=true" width="300" height="650"/>

## Installation

You can install react-native-picker-selector using either npm or yarn. First, navigate to your project directory and run one of the following commands:

Using npm:

```sh
npm install react-native-picker-selector
```

Using yarn:

```sh
yarn  add react-native-picker-selector
```

## Import

Once the package is installed, you can import the Picker component from react-native-picker-selector in your project:

```js
import { Picker } from 'react-native-picker-selector';
```

### Type imports

You can also import the types to access them in your code. Importing the types can be useful if you want to leverage type-checking and autocompletion features provided by IDEs.

```js
import {
  Picker,
  PickerProps,
  PickerItemProps,
  Option,
} from 'react-native-picker-selector';
```

For example, let's say you have a list of options we can make use of the Option type:

```js
import { Option } from 'react-native-picker-selector';

const options: Option[] = [
  { value: 'option1', label: 'Option 1' },
  { value: 'option2', label: 'Option 2' },
  { value: 'option3', label: 'Option 3' },
];
```

## Picker

### Props

The Picker component accepts the following props:

- placeholder (string): The placeholder text to display in the button when no value is selected.
- currentValue (Option): The currently selected value.
- onValueChange (function): A callback function to be called when the user selects a new value.
- icon (React element): The icon to display next to the selected value in the button.
- styles: many style props to style the appearance of the Picker see below

### Picker Styles

The style object allows you to customize the appearance of your Picker component by providing various style properties for different parts of the component.
Here's a breakdown of the different properties you can customize:

- containerStyle: Allows you to style the outer container of the Picker.
- iconContainerStyle: Allows you to style the icon by default its a down arrow
- selectedTextStyle: Allows you to style the selected text.
- textStyle: Allows you to style the text of the dropwdowns e.g. text thats not selected
- itemContainerStyle: Allows you to style container around the item - includes the button and the text.
- listContainerStyle: Allows you to style the container that holds the list of options.
- itemStyle: Allows you to style each individual option in the dropdown list.
- itemBorderStyle: Allows you to style the border of each individual option in the dropdown list. - last or single items will have no border

```js
<Picker
  placeholder="Select an option"
  currentValue={selectedOption}
  onValueChange={(item) => setSelectedOption(item)}
  containerStyle={{
    backgroundColor: 'white',
    borderRadius: 5,
    borderWidth: 1,
    borderColor: 'gray',
  }}
  iconContainerStyle={{ backgroundColor: 'gray', padding: 10 }}
  selectedTextStyle={{ color: 'black', fontWeight: 'bold' }}
  textStyle={{ color: 'black' }}
  itemContainerStyle={{
    padding: 10,
    borderBottomWidth: 1,
    borderBottomColor: 'gray',
  }}
  listContainerStyle={{
    backgroundColor: 'white',
    borderRadius: 5,
    borderWidth: 1,
    borderColor: 'gray',
  }}
  itemStyle={{ fontSize: 16, color: 'black', paddingVertical: 5 }}
  itemBorderStyle={{ borderBottomWidth: 1, borderBottomColor: 'gray' }}
>
  <Picker.Item label="Option 1" value="option1" />
  <Picker.Item label="Option 2" value="option2" />
  <Picker.Item label="Option 3" value="option3" />
</Picker>
```

### Useage

Import Picker

```js
import { Picker } from 'react-native-picker-selector';
```

Define your list of data if needed

```js
const options = [
  { value: 'one', label: 'Option One' },
  { value: 'two', label: 'Option Two' },
  { value: 'three', label: 'Option Three' },
];
```

Define the Picker component and pass in the required props

```js
<Picker
  placeholder="Select an option"
  currentValue={selectedOption}
  onValueChange={(item) => setSelectedOption(item)}
  icon={<Icon name="chevron-down" />}
>
  {options.map((option) => (
    <Picker.Item key={option.value} label={option.label} value={option.value} />
  ))}
</Picker>
```

## Picker.Item

The Picker.Item component is used to represent an option in the Picker component. It accepts the following props:

value (any): The value of the option.
label (string): The label to display for the option.
style (object): An object of style properties to apply to the component.
Here's an example usage of Picker.Item:

### Usage

Import Picker

```js
import { Picker } from 'react-native-picker-selector';
```

Create Picker Items by using Picker.Item and passing in the required props

```js
<Picker>
  <Picker.Item label="Option 1" value="option1" />
  <Picker.Item label="Option 2" value="option2" />
  <Picker.Item label="Option 3" value="option3" />
</Picker>
```

### Styling

Styling the picker by passing a StyleProp

containerStyle: defines the style of the PickerItem's container View.
textStyle: defines the style of the PickerItem's Text component.

```js
<Picker.Item
  value={option.value}
  label={option.label}
  textStyle={{ color: 'blue' }}
/>
```

## License

MIT

---

Made with [create-react-native-library](https://github.com/callstack/react-native-builder-bob)

## Contributing

See the [contributing guide](CONTRIBUTING.md) to learn how to contribute to the repository and the development workflow.
