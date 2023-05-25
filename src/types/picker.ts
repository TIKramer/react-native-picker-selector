import type { ReactElement, ReactNode } from 'react';
import type { StyleProp, TextStyle, ViewStyle } from 'react-native';

export interface PickerProps {
  placeholder: string;
  currentValue?: Option | null;
  onValueChange: (item: Option) => void;
  icon?: ReactElement;
  children: ReactNode;
  height?: number;
  containerStyle?: StyleProp<ViewStyle>;
  iconContainerStyle?: StyleProp<ViewStyle>;
  selectedTextStyle?: StyleProp<TextStyle>;
  textStyle?: StyleProp<TextStyle>;
  itemContainerStyle?: StyleProp<ViewStyle>;
  listContainerStyle?: StyleProp<ViewStyle>;
  itemStyle?: StyleProp<ViewStyle>;
  itemBorderStyle: StyleProp<ViewStyle>;
}
export interface Option {
  value: any;
  label: string;
}

export interface PickerItemProps extends Option {
  containerStyle?: StyleProp<ViewStyle>;
  textStyle?: StyleProp<TextStyle>;
}
