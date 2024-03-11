import { StyleProp, StyleSheet, ViewStyle } from 'react-native';
import theme from '../../global/styles/theme';

export function getContainerStyles(centered: boolean): StyleProp<ViewStyle> {
  return {
    flex: 1,
    justifyContent: centered ? 'center' : 'flex-start',
    alignItems: 'center',

    paddingVertical: 120,
  };
}

export default StyleSheet.create({
  icon: {
    marginBottom: 16,
  },

  text: {
    color: theme.colors.base150,

    fontSize: 16,
  },
});
