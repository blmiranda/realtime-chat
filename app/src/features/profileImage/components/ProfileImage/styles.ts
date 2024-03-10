import { StyleSheet } from 'react-native';
import theme from '../../../../global/styles/theme';

export default StyleSheet.create({
  iconContainer: {
    backgroundColor: theme.colors.base400,

    width: 40,
    height: 40,

    borderWidth: 3,
    borderColor: theme.colors.neutralWhite,
    borderRadius: 20,

    alignItems: 'center',
    justifyContent: 'center',

    position: 'absolute',
    bottom: 0,
    right: 0,
  },
});
