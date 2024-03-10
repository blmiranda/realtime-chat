import { JSX } from 'react';
import { Image } from 'react-native';

import { getThumbnailStyle } from './styles';

import { Props } from './types.ts';

import thumbnail from '../../features/profileImage/utils/thumbnail';

const Thumbnail = ({ url, size }: Props): JSX.Element => {
  const thumbnailStyles = getThumbnailStyle(size);

  return <Image source={thumbnail(url)} style={thumbnailStyles} />;
};

export default Thumbnail;
