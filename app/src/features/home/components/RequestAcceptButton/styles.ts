import { StyleSheet } from 'react-native';
import theme from '../../../../global/styles/theme';

export default StyleSheet.create({
  container: {
    backgroundColor: theme.colors.base400,

    height: 36,

    paddingHorizontal: 14,
    borderRadius: 18,

    alignItems: 'center',
    justifyContent: 'center',
  },

  text: {
    color: theme.colors.neutralWhite,

    fontWeight: 'bold',
  },
});
