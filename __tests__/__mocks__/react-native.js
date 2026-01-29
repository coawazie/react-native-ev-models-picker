const createStyleObject = (style) => {
  if (!style) {
    return {};
  }

  if (Array.isArray(style)) {
    return style.reduce((acc, item) => {
      if (item && typeof item === 'object') {
        return { ...acc, ...item };
      }
      return acc;
    }, {});
  }

  if (typeof style === 'object') {
    return style;
  }

  return {};
};

const StyleSheet = {
  create: (styles) => styles,
  flatten: createStyleObject,
};

const Platform = {
  OS: 'ios',
  select: (options) => (options?.ios ?? options?.default),
};

const AccessibilityInfo = {
  isScreenReaderEnabled: () => Promise.resolve(false),
};

const NativeModules = {};

const reactNativeMock = {
  View: 'View',
  Text: 'Text',
  TextInput: 'TextInput',
  ScrollView: 'RCTScrollView',
  Image: 'Image',
  Switch: 'RCTSwitch',
  Modal: 'Modal',
  Pressable: 'Pressable',
  TouchableOpacity: 'TouchableOpacity',
  StyleSheet,
  Platform,
  AccessibilityInfo,
  NativeModules,
  findNodeHandle: () => null,
};

module.exports = reactNativeMock;
module.exports.default = reactNativeMock;
