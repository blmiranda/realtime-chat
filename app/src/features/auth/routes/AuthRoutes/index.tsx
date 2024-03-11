import { JSX, useLayoutEffect } from 'react';
import { createNativeStackNavigator } from '@react-navigation/native-stack';

import { Props, AuthRoutesParamList } from './types.ts';

import SignIn from '../../screens/SignIn';
import SignUp from '../../screens/SignUp';

const Stack = createNativeStackNavigator<AuthRoutesParamList>();

const AuthRoutes = ({ navigation }: Props): JSX.Element => {
  useLayoutEffect(() => {
    navigation.setOptions({
      headerShown: false,
    });
  });

  return (
    <Stack.Navigator>
      <Stack.Screen name="SignIn" component={SignIn} />
      <Stack.Screen name="SignUp" component={SignUp} />
    </Stack.Navigator>
  );
};

export default AuthRoutes;
