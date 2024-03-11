import { StyleSheet } from 'react-native';
import theme from '../../global/styles/theme';

export default StyleSheet.create({
  container: {
    height: 106,

    flexDirection: 'row',
    alignItems: 'center',

    paddingHorizontal: 20,
    borderBottomWidth: 1,
    borderColor: theme.colors.base150,
  },
});
