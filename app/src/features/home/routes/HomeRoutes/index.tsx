import { JSX, useEffect, useLayoutEffect } from 'react';
import { TouchableOpacity, Image, View } from 'react-native';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { FontAwesomeIcon } from '@fortawesome/react-native-fontawesome';
import { IconName } from '@fortawesome/fontawesome-svg-core';

import styles from './styles.ts';
import theme from '../../../../global/styles/theme';
import { HomeRoutesParamList, Route, Props, TabIcons } from './types.ts';

import useAuth from '../../../auth/hooks/useAuth/index.ts';
import useSocket from '../../../../hooks/useSocket/index.ts';

import Requests from '../../screens/Requests';
import Friends from '../../screens/Friends';
import Profile from '../../screens/Profile';
import Thumbnail from '../../../../components/Thumbnail/index.tsx';

const Tab = createBottomTabNavigator<HomeRoutesParamList>();

const HomeRoutes = ({ navigation }: Props): JSX.Element => {
  const { userData } = useAuth();
  const { socketConnect, socketClose } = useSocket();

  useEffect(() => {
    socketConnect();

    return () => {
      socketClose();
    };
  }, []);

  useLayoutEffect(() => {
    navigation.setOptions({
      headerShown: false,
    });
  }, []);

  return (
    <Tab.Navigator
      screenOptions={({ route }: Route) => ({
        headerLeft: () => (
          <View style={styles.headerLeftContainer}>
            <Thumbnail url={userData?.user.thumbnail} size={28} />
          </View>
        ),
        headerRight: () => (
          <TouchableOpacity
            onPress={() => navigation.navigate('SearchFriendsRoutes')}
          >
            <FontAwesomeIcon
              icon="magnifying-glass"
              size={28}
              color={theme.colors.base400}
              style={styles.headerRightIcon}
            />
          </TouchableOpacity>
        ),
        tabBarIcon: ({ color }: { color: string }) => {
          const icons: TabIcons = {
            Requests: 'bell',
            Friends: 'inbox',
            Profile: 'user',
          };

          const icon: IconName = icons[route.name];

          return <FontAwesomeIcon icon={icon} size={28} color={color} />;
        },
        tabBarActiveTintColor: theme.colors.base400,
        tabBarShowLabel: false,
      })}
    >
      <Tab.Screen name="Requests" component={Requests} />
      <Tab.Screen name="Friends" component={Friends} />
      <Tab.Screen name="Profile" component={Profile} />
    </Tab.Navigator>
  );
};

export default HomeRoutes;
