import { StyleSheet } from 'react-native';
import theme from '../../../../global/styles/theme';

export default StyleSheet.create({
  preContainer: {
    flexGrow: 1,
  },

  container: {
    flexGrow: 1,
    justifyContent: 'center',

    paddingHorizontal: 16,
  },

  heading: {
    color: theme.colors.neutralBlack,

    marginBottom: 24,

    fontSize: 36,
    fontWeight: 'bold',
    textAlign: 'center',
  },

  footerText: {
    marginTop: 40,

    textAlign: 'center',
  },
});
