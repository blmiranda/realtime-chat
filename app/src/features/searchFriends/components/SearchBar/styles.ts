import { StyleSheet } from 'react-native';
import theme from '../../../../global/styles/theme';

export default StyleSheet.create({
  container: {
    padding: 16,
    borderBottomWidth: 1,
    borderColor: theme.colors.base150,
  },

  input: {
    backgroundColor: theme.colors.base100,

    height: 52,

    padding: 16,
    paddingLeft: 50,
    borderRadius: 26,

    fontSize: 16,
  },

  icon: {
    position: 'absolute',
    top: 17,
    left: 18,
  },
});
