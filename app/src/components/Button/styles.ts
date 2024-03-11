import { StyleSheet } from 'react-native';
import theme from '../../global/styles/theme';

export default StyleSheet.create({
  container: {
    backgroundColor: theme.colors.base400,

    justifyContent: 'center',
    alignItems: 'center',

    height: 52,

    marginTop: 20,
    borderRadius: 26,
  },

  iconButtonContainer: {
    flexDirection: 'row',
  },

  text: {
    color: theme.colors.neutralWhite,

    fontSize: 16,
    fontWeight: 'bold',
  },

  buttonPressed: {
    backgroundColor: theme.colors.base200,
  },

  loading: {
    width: 200,
    aspectRatio: 1 / 1,
  },
});
