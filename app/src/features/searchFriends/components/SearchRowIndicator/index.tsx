import { JSX } from 'react';
import { View, Text, TouchableOpacity } from 'react-native';
import { FontAwesomeIcon } from '@fortawesome/react-native-fontawesome';

import theme from '../../../../global/styles/theme/index.ts';
import styles, { getContainerStyles } from './styles.ts';

import friendStatusMap from '../../utils/friendStatusMap/index.ts';

import { Props } from './types.ts';
import { SearchRowButtonData } from '../../types/searchRowButtonData.types.ts';

import useSocket from '../../../../hooks/useSocket/index.ts';
import useAuth from '../../../auth/hooks/useAuth/index.ts';

const SearchRowIndicator = ({
  user,
  searchList,
  setSearchList,
}: Props): JSX.Element => {
  const { userData } = useAuth();
  const { socket } = useSocket();

  const buttonData: SearchRowButtonData = friendStatusMap[user.status];

  const containerStyles = getContainerStyles(buttonData);

  function handlePress() {
    switch (user.status) {
      case 'not-connected':
        buttonData.onPress(
          socket,
          userData!.user.username,
          user.username,
          searchList,
          setSearchList
        );
        break;
    }
  }

  if (user.status === 'connected') {
    return (
      <FontAwesomeIcon
        icon="circle-check"
        size={30}
        color={theme.colors.success}
        style={styles.connectedIcon}
      />
    );
  }

  return (
    <TouchableOpacity
      style={containerStyles}
      disabled={buttonData.disabled}
      onPress={handlePress}
    >
      <Text style={styles.text}>{buttonData.text}</Text>
    </TouchableOpacity>
  );
};

export default SearchRowIndicator;
