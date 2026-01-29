/**
 * Mock for react-native-dropdown-picker component.
 * Provides a simplified implementation for testing.
 */

import React from 'react';
import { View, Text, TouchableOpacity } from 'react-native';

/** Props interface for the mocked DropDownPicker component */
interface MockDropDownPickerProps {
  open: boolean;
  value: string;
  items: Array<{ label: string; value: string }>;
  setOpen: (open: boolean) => void;
  setValue: (callback: (value: string) => string) => void;
  placeholder?: string;
  disabled?: boolean;
  testID?: string;
  onOpen?: () => void;
  onClose?: () => void;
}

/**
 * Mocked DropDownPicker component for testing.
 * Renders a simplified dropdown that can be interacted with in tests.
 */
const MockDropDownPicker = ({
  open,
  value,
  items,
  setOpen,
  setValue,
  placeholder,
  disabled,
  testID,
}: MockDropDownPickerProps): React.ReactElement => {
  const selectedItem = items.find((item) => item.value === value);
  const displayText = selectedItem?.label ?? placeholder ?? 'Select an item';

  const handlePress = (): void => {
    if (!disabled) {
      setOpen(!open);
    }
  };

  const handleItemSelect = (itemValue: string): void => {
    setValue(() => itemValue);
    setOpen(false);
  };

  return (
    <View testID={testID}>
      <TouchableOpacity onPress={handlePress} testID={`${testID}-toggle`}>
        <Text>{displayText}</Text>
      </TouchableOpacity>
      {open && (
        <View testID={`${testID}-list`}>
          {items.map((item) => (
            <TouchableOpacity
              key={item.value}
              onPress={() => handleItemSelect(item.value)}
              testID={`${testID}-item-${item.value}`}
            >
              <Text>{item.label}</Text>
            </TouchableOpacity>
          ))}
        </View>
      )}
    </View>
  );
};

export default MockDropDownPicker;
