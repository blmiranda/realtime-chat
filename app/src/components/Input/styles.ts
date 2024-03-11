import { StyleSheet } from 'react-native';
import theme from '../../global/styles/theme';

export default StyleSheet.create({
  title: {
    marginVertical: 6,
    paddingLeft: 16,
  },
  titleColor: {
    color: theme.colors.base200,
  },
  errorColor: {
    color: theme.colors.error,
  },

  input: {
    backgroundColor: theme.colors.base100,

    height: 52,

    paddingHorizontal: 16,
    borderRadius: 26,

    fontSize: 16,
  },
  inputError: {
    borderWidth: 1,
    borderColor: theme.colors.error,
  },
});
