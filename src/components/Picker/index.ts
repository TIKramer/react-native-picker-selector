import type { PickerProps } from 'src/types/picker';
import { Picker as _Picker } from './Picker';
import { PickerItem } from './PickerItem';

const Picker = _Picker as PickerPublicInterface;
Picker.Item = PickerItem;

interface PickerPublicInterface extends React.FC<PickerProps> {
  Item: typeof PickerItem;
}

export default Picker;
