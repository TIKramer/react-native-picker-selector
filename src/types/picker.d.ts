import type { ViewStyle } from 'react-native';

interface PickerProps {
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
interface Option {
  value: any;
  label: string;
}

interface PickerItemProps extends Option {
  containerStyle?: StyleProp<ViewStyle>;
  textStyle?: StyleProp<TextStyle>;
}
