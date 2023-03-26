import {
  requireNativeComponent,
  UIManager,
  Platform,
  ViewStyle,
} from 'react-native';

const LINKING_ERROR =
  `The package 'react-native-picker-selector' doesn't seem to be linked. Make sure: \n\n` +
  Platform.select({ ios: "- You have run 'pod install'\n", default: '' }) +
  '- You rebuilt the app after installing the package\n' +
  '- You are not using Expo Go\n';

type PickerSelectorProps = {
  color: string;
  style: ViewStyle;
};

const ComponentName = 'PickerSelectorView';

export const PickerSelectorView =
  UIManager.getViewManagerConfig(ComponentName) != null
    ? requireNativeComponent<PickerSelectorProps>(ComponentName)
    : () => {
        throw new Error(LINKING_ERROR);
      };
