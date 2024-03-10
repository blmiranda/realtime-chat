import { JSX, useLayoutEffect } from 'react';
import { TouchableOpacity } from 'react-native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { FontAwesomeIcon } from '@fortawesome/react-native-fontawesome';

import Search from '../../screens/Search';

import { Props, SearchFriendsRoutesParamList } from './types.ts';

const Stack = createNativeStackNavigator<SearchFriendsRoutesParamList>();

const SearchFriendsRoutes = ({ navigation }: Props): JSX.Element => {
  useLayoutEffect(() => {
    navigation.setOptions({
      headerShown: false,
    });
  }, []);

  return (
    <Stack.Navigator
      screenOptions={{
        headerLeft: () => (
          <TouchableOpacity onPress={() => navigation.goBack()}>
            <FontAwesomeIcon icon="arrow-left" size={24} />
          </TouchableOpacity>
        ),
      }}
    >
      <Stack.Screen name="Search" component={Search} />
    </Stack.Navigator>
  );
};

export default SearchFriendsRoutes;
