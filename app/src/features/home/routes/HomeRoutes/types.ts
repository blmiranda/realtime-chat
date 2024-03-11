import {
  NavigationProp,
  ParamListBase,
  RouteProp,
} from '@react-navigation/native';
import { IconName } from '@fortawesome/fontawesome-svg-core';

export interface HomeRoutesParamList extends ParamListBase {
  Requests: JSX.Element;
  Friends: JSX.Element;
  Profile: JSX.Element;
}

export interface Route {
  route: RouteProp<HomeRoutesParamList, keyof HomeRoutesParamList>;
}

export interface Props {
  navigation: NavigationProp<HomeRoutesParamList>;
}

export type TabIcons = Record<keyof HomeRoutesParamList, IconName>;
