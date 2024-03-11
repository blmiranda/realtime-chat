import { StyleSheet } from 'react-native';
import theme from '../../../../global/styles/theme';

export default StyleSheet.create({
  userInfo: {
    flex: 1,
    paddingHorizontal: 16,
  },

  name: {
    color: theme.colors.base400,

    marginBottom: 4,

    fontWeight: 'bold',
  },

  username: {
    color: theme.colors.base200,
  },
});
