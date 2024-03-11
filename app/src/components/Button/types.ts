import { IconProp } from '@fortawesome/fontawesome-svg-core';
import { FontAwesomeIconStyle } from '@fortawesome/react-native-fontawesome';

export interface Props {
  title: string;
  onPress: () => void;
  loading: boolean;
  icon?: {
    icon: IconProp;
    size: number;
    color: `${string}`;
    style?: FontAwesomeIconStyle;
  };
}

export interface PressableState {
  pressed: boolean;
}
