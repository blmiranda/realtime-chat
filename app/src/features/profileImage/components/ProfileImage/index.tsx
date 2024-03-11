import { JSX } from 'react';
import { View, TouchableOpacity } from 'react-native';
import { FontAwesomeIcon } from '@fortawesome/react-native-fontawesome';

import theme from '../../../../global/styles/theme/index.ts';
import styles from './styles.ts';

import useSocket from '../../../../hooks/useSocket/index.ts';
import useAuth from '../../../auth/hooks/useAuth/index.ts';
import Thumbnail from '../../../../components/Thumbnail/index.tsx';
import accessImageLibrary from '../../api/accessImageLibrary/index.ts';

const ProfileImage = (): JSX.Element => {
  const { userData, setUserData } = useAuth();
  const { socket } = useSocket();

  function imageLibraryHandler(): void {
    accessImageLibrary(socket, setUserData);
  }

  return (
    <TouchableOpacity onPress={imageLibraryHandler}>
      <Thumbnail url={userData?.user.thumbnail} size={180} />

      <View style={styles.iconContainer}>
        <FontAwesomeIcon icon="pencil" size={15} color={theme.colors.base150} />
      </View>
    </TouchableOpacity>
  );
};

export default ProfileImage;
