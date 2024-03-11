import { NavigationProp, ParamListBase } from '@react-navigation/native';

export interface SearchFriendsRoutesParamList extends ParamListBase {
  Search: JSX.Element;
}

export interface Props {
  navigation: NavigationProp<SearchFriendsRoutesParamList>;
}
