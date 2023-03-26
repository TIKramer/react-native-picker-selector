import React, { ReactElement, useRef, useState } from 'react';
import {
  FlatList,
  Text,
  TouchableOpacity,
  Modal,
  View,
  StyleSheet,
} from 'react-native';
import type { PickerProps, Option, PickerItemProps } from 'src/types/picker';

export const Picker = ({
  placeholder,
  currentValue = null,
  onValueChange,
  icon = <Text>↓</Text>,
  height = 200,
  children,
  containerStyle,
  iconContainerStyle,
  selectedTextStyle,
  textStyle,
  itemContainerStyle,
  listContainerStyle,
  itemStyle,
  itemBorderStyle,
}: PickerProps) => {
  const [visible, setVisible] = useState(false);
  const [selected, setSelected] = useState<Option | null>(currentValue || null);
  const [listLocation, setListLocation] = useState<{
    y: number;
    x: number;
    width: number;
  }>({
    y: 0,
    x: 0,
    width: 0,
  });
  const dropDownBtn = useRef<TouchableOpacity | null>(null);
  const childrenArray = React.Children.toArray(
    children
  ) as React.ReactElement<PickerItemProps>[];
  const displayText = selected?.label ?? placeholder;

  const toggleDropdown = (): void => {
    visible ? setVisible(false) : openDropdown();
  };

  const openDropdown = (): void => {
    dropDownBtn.current?.measureInWindow(
      (x: number, y: number, w: number, h: number) => {
        const yLoc = y + h;
        setListLocation({ y: yLoc, x: x, width: w });
      }
    );
    setVisible(true);
  };

  const onItemPress = (item: Option): void => {
    setSelected(item);
    onValueChange(item);
    setVisible(false);
  };
  const renderItem = ({
    item,
    index,
  }: {
    item: ReactElement<Option>;
    index: number;
  }) => {
    const option = item.props;
    return (
      <TouchableOpacity
        style={[
          styles.item,
          itemStyle,
          index !== childrenArray.length - 1 && [
            styles.itemBorder,
            itemBorderStyle,
          ],
        ]}
        onPress={() => onItemPress(option)}
      >
        {item}
      </TouchableOpacity>
    );
  };

  const renderDropdown = () => {
    return (
      <Modal visible={visible} transparent animationType="fade">
        <TouchableOpacity
          style={[styles.dropDownContainer]}
          onPress={() => setVisible(false)}
        >
          <View
            style={[
              styles.listContainer,
              {
                top: listLocation.y,
                width: listLocation.width,
                left: listLocation.x,
                height: height,
              },
              listContainerStyle,
            ]}
          >
            <FlatList
              data={childrenArray}
              renderItem={(item) => renderItem(item)}
              keyExtractor={(item) => item.props.label}
            />
          </View>
        </TouchableOpacity>
      </Modal>
    );
  };

  return (
    <TouchableOpacity
      ref={dropDownBtn}
      style={[styles.container, containerStyle]}
      onPress={toggleDropdown}
    >
      {renderDropdown()}
      <View style={[styles.itemContainer, itemContainerStyle]}>
        <Text
          style={
            selected
              ? [styles.selectedText, selectedTextStyle]
              : [styles.text, textStyle]
          }
        >
          {displayText}
        </Text>
        <View style={[styles.iconContainer, iconContainerStyle]}>{icon}</View>
      </View>
    </TouchableOpacity>
  );
};
const styles = StyleSheet.create({
  container: {
    flexDirection: 'row',
    alignItems: 'center',
    height: 40,
    zIndex: 1,
    width: '100%',
    paddingHorizontal: 15,
    borderColor: '#ccc',
    borderRadius: 15,
    fontSize: 16,
  },
  iconContainer: {
    justifyContent: 'flex-end',
    alignItems: 'flex-end',
    flex: 0.1,
  },
  text: {
    flex: 0.9,
  },
  selectedText: {
    flex: 0.9,
    color: 'grey',
  },
  itemContainer: {
    flexDirection: 'row',
    flex: 1,
    justifyContent: 'space-between',
  },
  listContainer: {
    position: 'absolute',
    backgroundColor: 'white',
    width: '100%',
    shadowColor: 'black',
    shadowRadius: 4,
    borderRadius: 15,
    elevation: 1,
    shadowOffset: { height: 4, width: 0 },
    shadowOpacity: 0.5,
  },
  dropDownContainer: {
    width: '100%',
    height: '100%',
  },
  item: {
    paddingHorizontal: 10,
    paddingVertical: 10,
  },

  itemBorder: {
    borderBottomWidth: 1,
  },
});
