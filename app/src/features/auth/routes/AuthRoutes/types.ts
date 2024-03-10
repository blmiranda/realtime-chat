import { NavigationProp, ParamListBase } from '@react-navigation/native';

export interface AuthRoutesParamList extends ParamListBase {
  SignIn: undefined;
  SignUp: undefined;
}

export interface Props {
  navigation: NavigationProp<AuthRoutesParamList>;
}
