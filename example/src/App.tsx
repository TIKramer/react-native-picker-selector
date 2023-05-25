import * as React from 'react';

import { StyleSheet, Text, View } from 'react-native';
import { Picker, Option } from 'react-native-picker-selector';

const options: Option[] = [
  { label: 'Option 1', value: 'option1' },
  { label: 'Option 2', value: 'option2' },
  { label: 'Option 3', value: 'option3' },
  { label: 'Option 4', value: 'option4' },
  { label: 'Option 5', value: 'option5' },
];

export default function App() {
  const [selectedOption, setSelectedOption] = React.useState<Option | null>(
    null
  );

  const handleValueChange = (option: Option) => {
    setSelectedOption(option);
  };

  return (
    <View style={styles.container}>
      <Text style={styles.title}>React Native Picker Example</Text>
      <View style={styles.pickerContainer}>
        <Picker
          placeholder="Select an option"
          currentValue={selectedOption}
          onValueChange={handleValueChange}
          itemBorderStyle={styles.borderStyle}
          selectedTextStyle={styles.selectedTextStyle}
        >
          {options.map((option) => (
            <Picker.Item
              key={option.value}
              label={option.label}
              value={option}
            />
          ))}
        </Picker>
      </View>
      <View style={styles.selectedOptionContainer}>
        {selectedOption && (
          <>
            <Text style={styles.selectedOptionLabel}>Selected Option:</Text>
            <Text style={styles.selectedOptionValue}>
              {selectedOption.label}
            </Text>
          </>
        )}
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  borderStyle: {
    borderColor: 'black', // set border color to red
  },
  selectedTextStyle: {
    color: 'black', //set selected text color to purple
  },
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
    paddingHorizontal: 20,
  },
  title: {
    fontSize: 24,
    fontWeight: 'bold',
    marginBottom: 20,
  },
  pickerContainer: {
    width: '100%',
    marginBottom: 20,
  },
  selectedOptionContainer: {
    flexDirection: 'row',
    alignItems: 'center',
  },
  selectedOptionLabel: {
    fontSize: 18,
    marginRight: 10,
  },
  selectedOptionValue: {
    fontSize: 18,
    fontWeight: 'bold',
  },
});
