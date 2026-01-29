/**
 * @fileoverview Tests for EVSelector component.
 * Tests the main EV picker component rendering and behavior.
 */

import React from 'react';
import { render, screen } from '@testing-library/react-native';
import EVSelector from '../src/EVSelector';
import { Car } from '../src/typesEnumsInterfacesConsts/interfaces';

// Mock the external dependencies
jest.mock('react-native-dropdown-picker', () => {
  const React = require('react');
  const { View, Text, TouchableOpacity } = require('react-native');

  return {
    __esModule: true,
    default: ({
      open,
      value,
      items,
      setOpen,
      placeholder,
      disabled,
      testID,
    }: {
      open: boolean;
      value: string;
      items: Array<{ label: string; value: string }>;
      setOpen: (fn: (prev: boolean) => boolean) => void;
      placeholder?: string;
      disabled?: boolean;
      testID?: string;
    }) => {
      const selectedItem = items.find((item) => item.value === value);
      const displayText = selectedItem?.label ?? placeholder ?? 'Select';

      return (
        <View testID={testID}>
          <TouchableOpacity
            onPress={() => !disabled && setOpen((prev: boolean) => !prev)}
            testID={`${testID}-toggle`}
          >
            <Text>{displayText}</Text>
          </TouchableOpacity>
          {open && (
            <View testID={`${testID}-list`}>
              {items.map((item) => (
                <Text key={item.value}>{item.label}</Text>
              ))}
            </View>
          )}
        </View>
      );
    },
  };
});

jest.mock('react-native-safe-area-context', () => ({
  SafeAreaProvider: ({
    children,
    ...props
  }: {
    children: React.ReactNode;
    [key: string]: unknown;
  }) => {
    const { View } = require('react-native');
    return <View {...props}>{children}</View>;
  },
}));

describe('EVSelector', () => {
  const mockOnValueChange = jest.fn();

  beforeEach(() => {
    mockOnValueChange.mockClear();
  });

  describe('rendering', () => {
    it('should render without crashing', () => {
      render(<EVSelector onValueChange={mockOnValueChange} />);
    });

    it('should render Car Make label in English by default', () => {
      render(<EVSelector onValueChange={mockOnValueChange} />);

      expect(screen.getByText('Car Make')).toBeTruthy();
    });

    it('should render Car Model label', () => {
      render(<EVSelector onValueChange={mockOnValueChange} />);

      expect(screen.getByText('Car Model')).toBeTruthy();
    });

    it('should render Car Year label', () => {
      render(<EVSelector onValueChange={mockOnValueChange} />);

      expect(screen.getByText('Car Year')).toBeTruthy();
    });

    it('should render Car Trim label', () => {
      render(<EVSelector onValueChange={mockOnValueChange} />);

      expect(screen.getByText('Car Trim')).toBeTruthy();
    });

    it('should render with French language', () => {
      render(
        <EVSelector onValueChange={mockOnValueChange} language="fr" />
      );

      // Note: French translations currently return English text
      expect(screen.getByText('Car Make')).toBeTruthy();
    });
  });

  describe('optionsLevel prop', () => {
    it('should hide model, year, and trim when optionsLevel is "CarMake"', () => {
      render(
        <EVSelector
          onValueChange={mockOnValueChange}
          optionsLevel="CarMake"
        />
      );

      expect(screen.getByText('Car Make')).toBeTruthy();
      expect(screen.queryByText('Car Model')).toBeNull();
      expect(screen.queryByText('Car Year')).toBeNull();
      expect(screen.queryByText('Car Trim')).toBeNull();
    });

    it('should hide year and trim when optionsLevel is "CarModel"', () => {
      render(
        <EVSelector
          onValueChange={mockOnValueChange}
          optionsLevel="CarModel"
        />
      );

      expect(screen.getByText('Car Make')).toBeTruthy();
      expect(screen.getByText('Car Model')).toBeTruthy();
      expect(screen.queryByText('Car Year')).toBeNull();
      expect(screen.queryByText('Car Trim')).toBeNull();
    });

    it('should hide trim when optionsLevel is "CarYear"', () => {
      render(
        <EVSelector
          onValueChange={mockOnValueChange}
          optionsLevel="CarYear"
        />
      );

      expect(screen.getByText('Car Make')).toBeTruthy();
      expect(screen.getByText('Car Model')).toBeTruthy();
      expect(screen.getByText('Car Year')).toBeTruthy();
      expect(screen.queryByText('Car Trim')).toBeNull();
    });

    it('should show all dropdowns when optionsLevel is "CarTrim"', () => {
      render(
        <EVSelector
          onValueChange={mockOnValueChange}
          optionsLevel="CarTrim"
        />
      );

      expect(screen.getByText('Car Make')).toBeTruthy();
      expect(screen.getByText('Car Model')).toBeTruthy();
      expect(screen.getByText('Car Year')).toBeTruthy();
      expect(screen.getByText('Car Trim')).toBeTruthy();
    });
  });

  describe('onValueChange callback', () => {
    it('should call onValueChange on initial render with default values', () => {
      render(<EVSelector onValueChange={mockOnValueChange} />);

      expect(mockOnValueChange).toHaveBeenCalled();

      const lastCall = mockOnValueChange.mock.calls[
        mockOnValueChange.mock.calls.length - 1
      ][0] as Car;

      expect(lastCall).toHaveProperty('make');
      expect(lastCall).toHaveProperty('model');
      expect(lastCall).toHaveProperty('year');
      expect(lastCall).toHaveProperty('trim');
    });

    it('should call onValueChange with Car object structure', () => {
      render(<EVSelector onValueChange={mockOnValueChange} />);

      const lastCall = mockOnValueChange.mock.calls[
        mockOnValueChange.mock.calls.length - 1
      ][0] as Car;

      expect(lastCall.make).toBe('none');
      expect(lastCall.model).toBe('none');
      expect(lastCall.year).toBe('none');
      expect(lastCall.trim).toBe('none');
    });
  });

  describe('custom placeholders', () => {
    it('should accept custom carMakePlaceholder', () => {
      render(
        <EVSelector
          onValueChange={mockOnValueChange}
          carMakePlaceholder="Select a Make"
        />
      );

      // Component should render without error
      expect(screen.getByText('Car Make')).toBeTruthy();
    });

    it('should accept custom carModelPlaceholder', () => {
      render(
        <EVSelector
          onValueChange={mockOnValueChange}
          carModelPlaceholder="Select a Model"
        />
      );

      expect(screen.getByText('Car Model')).toBeTruthy();
    });

    it('should accept custom carYearPlaceholder', () => {
      render(
        <EVSelector
          onValueChange={mockOnValueChange}
          carYearPlaceholder="Select a Year"
        />
      );

      expect(screen.getByText('Car Year')).toBeTruthy();
    });

    it('should accept custom carTrimPlaceholder', () => {
      render(
        <EVSelector
          onValueChange={mockOnValueChange}
          carTrimPlaceholder="Select a Trim"
        />
      );

      expect(screen.getByText('Car Trim')).toBeTruthy();
    });
  });

  describe('styling props', () => {
    it('should accept width prop', () => {
      render(
        <EVSelector onValueChange={mockOnValueChange} width={300} />
      );

      expect(screen.getByText('Car Make')).toBeTruthy();
    });

    it('should accept backgroundColor prop', () => {
      render(
        <EVSelector
          onValueChange={mockOnValueChange}
          backgroundColor="#ffffff"
        />
      );

      expect(screen.getByText('Car Make')).toBeTruthy();
    });

    it('should accept fontColor prop', () => {
      render(
        <EVSelector
          onValueChange={mockOnValueChange}
          fontColor="#000000"
        />
      );

      expect(screen.getByText('Car Make')).toBeTruthy();
    });

    it('should accept labelColor prop', () => {
      render(
        <EVSelector
          onValueChange={mockOnValueChange}
          labelColor="#333333"
        />
      );

      expect(screen.getByText('Car Make')).toBeTruthy();
    });

    it('should accept labelFontSize prop', () => {
      render(
        <EVSelector onValueChange={mockOnValueChange} labelFontSize={20} />
      );

      expect(screen.getByText('Car Make')).toBeTruthy();
    });

    it('should accept minHeight prop', () => {
      render(
        <EVSelector onValueChange={mockOnValueChange} minHeight={50} />
      );

      expect(screen.getByText('Car Make')).toBeTruthy();
    });

    it('should accept borderColor prop', () => {
      render(
        <EVSelector
          onValueChange={mockOnValueChange}
          borderColor="#cccccc"
        />
      );

      expect(screen.getByText('Car Make')).toBeTruthy();
    });
  });

  describe('disabled state', () => {
    it('should accept disabled prop', () => {
      render(
        <EVSelector onValueChange={mockOnValueChange} disabled={true} />
      );

      expect(screen.getByText('Car Make')).toBeTruthy();
    });
  });

  describe('listMode prop', () => {
    it('should accept listMode="MODAL"', () => {
      render(
        <EVSelector onValueChange={mockOnValueChange} listMode="MODAL" />
      );

      expect(screen.getByText('Car Make')).toBeTruthy();
    });

    it('should accept listMode="SCROLLVIEW"', () => {
      render(
        <EVSelector
          onValueChange={mockOnValueChange}
          listMode="SCROLLVIEW"
        />
      );

      expect(screen.getByText('Car Make')).toBeTruthy();
    });
  });

  describe('accessibility', () => {
    it('should accept accessibilityLabel prop', () => {
      render(
        <EVSelector
          onValueChange={mockOnValueChange}
          accessibilityLabel="EV Picker"
        />
      );

      expect(screen.getByText('Car Make')).toBeTruthy();
    });
  });

  describe('callback props', () => {
    it('should accept onCarMakeOpen callback', () => {
      const onCarMakeOpen = jest.fn();
      render(
        <EVSelector
          onValueChange={mockOnValueChange}
          onCarMakeOpen={onCarMakeOpen}
        />
      );

      expect(screen.getByText('Car Make')).toBeTruthy();
    });

    it('should accept onCarMakeClose callback', () => {
      const onCarMakeClose = jest.fn();
      render(
        <EVSelector
          onValueChange={mockOnValueChange}
          onCarMakeClose={onCarMakeClose}
        />
      );

      expect(screen.getByText('Car Make')).toBeTruthy();
    });

    it('should accept onCarModelOpen callback', () => {
      const onCarModelOpen = jest.fn();
      render(
        <EVSelector
          onValueChange={mockOnValueChange}
          onCarModelOpen={onCarModelOpen}
        />
      );

      expect(screen.getByText('Car Model')).toBeTruthy();
    });

    it('should accept onCarModelClose callback', () => {
      const onCarModelClose = jest.fn();
      render(
        <EVSelector
          onValueChange={mockOnValueChange}
          onCarModelClose={onCarModelClose}
        />
      );

      expect(screen.getByText('Car Model')).toBeTruthy();
    });

    it('should accept onCarYearOpen callback', () => {
      const onCarYearOpen = jest.fn();
      render(
        <EVSelector
          onValueChange={mockOnValueChange}
          onCarYearOpen={onCarYearOpen}
        />
      );

      expect(screen.getByText('Car Year')).toBeTruthy();
    });

    it('should accept onCarYearClose callback', () => {
      const onCarYearClose = jest.fn();
      render(
        <EVSelector
          onValueChange={mockOnValueChange}
          onCarYearClose={onCarYearClose}
        />
      );

      expect(screen.getByText('Car Year')).toBeTruthy();
    });

    it('should accept onCarTrimOpen callback', () => {
      const onCarTrimOpen = jest.fn();
      render(
        <EVSelector
          onValueChange={mockOnValueChange}
          onCarTrimOpen={onCarTrimOpen}
        />
      );

      expect(screen.getByText('Car Trim')).toBeTruthy();
    });

    it('should accept onCarTrimClose callback', () => {
      const onCarTrimClose = jest.fn();
      render(
        <EVSelector
          onValueChange={mockOnValueChange}
          onCarTrimClose={onCarTrimClose}
        />
      );

      expect(screen.getByText('Car Trim')).toBeTruthy();
    });
  });
});
