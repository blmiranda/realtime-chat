import { StyleProp, ImageStyle } from 'react-native';
import theme from '../../global/styles/theme';

export function getThumbnailStyle(size: number): StyleProp<ImageStyle> {
  return {
    backgroundColor: theme.colors.base150,

    width: size,
    height: size,

    borderRadius: size / 2,
  };
}
