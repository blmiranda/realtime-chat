import { StyleSheet } from 'react-native';
import theme from '../../../../global/styles/theme';

export default StyleSheet.create({
  container: {
    height: 106,

    flexDirection: 'row',
    alignItems: 'center',

    paddingHorizontal: 20,
    borderBottomWidth: 1,
    borderColor: theme.colors.base150,
  },

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
