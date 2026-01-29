/**
 * Mock for react-native-safe-area-context.
 * Provides simplified implementations for testing.
 */

import React from 'react';
import { View, ViewProps } from 'react-native';

/** Props interface for SafeAreaProvider mock */
interface SafeAreaProviderProps extends ViewProps {
  children?: React.ReactNode;
}

/**
 * Mocked SafeAreaProvider component.
 * Simply renders children in a View for testing purposes.
 */
export const SafeAreaProvider = ({
  children,
  ...props
}: SafeAreaProviderProps): React.ReactElement => {
  return <View {...props}>{children}</View>;
};

/**
 * Mocked SafeAreaView component.
 * Simply renders children in a View for testing purposes.
 */
export const SafeAreaView = ({
  children,
  ...props
}: SafeAreaProviderProps): React.ReactElement => {
  return <View {...props}>{children}</View>;
};

/**
 * Mocked useSafeAreaInsets hook.
 * Returns zero insets for testing.
 */
export const useSafeAreaInsets = (): {
  top: number;
  bottom: number;
  left: number;
  right: number;
} => ({
  top: 0,
  bottom: 0,
  left: 0,
  right: 0,
});
