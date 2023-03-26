import React from 'react';
import { View } from 'react-native';
import { Text } from 'react-native';
import type { PickerItemProps } from 'src/types/picker';

export const PickerItem = ({
  label,
  containerStyle,
  textStyle,
}: PickerItemProps) => {
  return (
    <View style={containerStyle}>
      <Text style={textStyle}>{label}</Text>
    </View>
  );
};
