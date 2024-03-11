import { StyleSheet } from 'react-native';
import theme from '../../../../global/styles/theme';

export default StyleSheet.create({
  container: {
    flex: 1,
  },

  profileContainer: {
    alignItems: 'center',

    paddingTop: 100,
  },

  fullName: {
    color: theme.colors.base300,

    marginTop: 20,
    marginBottom: 6,

    fontSize: 20,
    fontWeight: 'bold',
    textAlign: 'center',
  },

  username: {
    color: theme.colors.base200,

    fontSize: 14,
    textAlign: 'center',
  },

  buttonWrapper: {
    marginTop: 40,
    paddingHorizontal: 30,
  },
});
