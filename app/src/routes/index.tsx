import { JSX, useEffect, useState } from 'react';
import { Alert, StatusBar } from 'react-native';
import { NavigationContainer, DefaultTheme } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';

import theme from '../global/styles/theme';

import useAuth from '../features/auth/hooks/useAuth';

import Splash from '../screens/Splash';
import Messages from '../screens/Messages';
import AuthRoutes from '../features/auth/routes/AuthRoutes';
import HomeRoutes from '../features/home/routes/HomeRoutes';
import { SearchFriendsRoutes } from '../features/searchFriends';

const navigationTheme = {
  ...DefaultTheme,
  colors: {
    ...DefaultTheme.colors,
    background: theme.colors.neutralWhite,
  },
};

const Stack = createNativeStackNavigator();

const Routes = (): JSX.Element => {
  const [isInitialized, setIsInitialized] = useState(false);
  const { userData, getStoredData } = useAuth();

  useEffect(() => {
    async function getData() {
      try {
        // await getStoredData();
      } catch (error) {
        if (error instanceof Error)
          Alert.alert('Authentication failed', undefined, [
            { text: 'OK', style: 'cancel' },
          ]);
      } finally {
        setIsInitialized(true);
      }
    }

    getData();
  }, []);

  return (
    <NavigationContainer theme={navigationTheme}>
      <StatusBar barStyle="dark-content" />

      <Stack.Navigator>
        {!isInitialized ? (
          <>
            <Stack.Screen name="Splash" component={Splash} />
          </>
        ) : !userData ? (
          <>
            <Stack.Screen name="AuthRoutes" component={AuthRoutes} />
          </>
        ) : (
          <>
            <Stack.Screen name="HomeRoutes" component={HomeRoutes} />
            <Stack.Screen
              name="SearchFriendsRoutes"
              component={SearchFriendsRoutes}
            />
            <Stack.Screen name="MessagesRoutes" component={Messages} />
          </>
        )}
      </Stack.Navigator>
    </NavigationContainer>
  );
};

export default Routes;
