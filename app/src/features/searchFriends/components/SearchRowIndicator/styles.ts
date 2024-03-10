import {
  StyleProp,
  StyleSheet,
  TouchableOpacity,
  ViewStyle,
  TextStyle,
} from 'react-native';

import { SearchRowButtonData } from '../../types/searchRowButtonData.types';
import theme from '../../../../global/styles/theme';

export function getContainerStyles(
  buttonData: SearchRowButtonData
): StyleProp<ViewStyle> {
  return {
    backgroundColor: buttonData.disabled
      ? theme.colors.base150
      : theme.colors.base400,

    height: 36,

    paddingHorizontal: 14,
    borderRadius: 18,

    justifyContent: 'center',
    alignItems: 'center',
  };
}

export default StyleSheet.create({
  text: {
    color: theme.colors.neutralWhite,
    fontWeight: 'bold',
  },

  connectedIcon: {
    marginRight: 10,
  },
});
