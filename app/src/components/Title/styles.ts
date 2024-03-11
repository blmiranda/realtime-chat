import { StyleSheet } from 'react-native';
import theme from '../../global/styles/theme';

export default StyleSheet.create({
  text: {
    color: theme.colors.neutralWhite,

    marginBottom: 40,

    fontFamily: theme.fonts.primary.regular,
    fontSize: 40,
    textAlign: 'center',
  },
});
