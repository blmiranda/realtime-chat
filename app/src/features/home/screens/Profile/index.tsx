import { JSX } from 'react';
import { Text, View, Image, Alert } from 'react-native';

import theme from '../../../../global/styles/theme/index.ts';
import styles from './styles.ts';

import useAuth from '../../../auth/hooks/useAuth/index.ts';

import Button from '../../../../components/Button/index.tsx';
import { ProfileImage } from '../../../profileImage/index.ts';

const Profile = (): JSX.Element => {
  const { signOut, loading, userData } = useAuth();

  async function handleSignOut() {
    try {
      await signOut();
    } catch (error: unknown) {
      if (error instanceof Error)
        Alert.alert(error.message, undefined, [
          { text: 'OK', style: 'cancel' },
        ]);
    }
  }

  return (
    <View style={styles.container}>
      <View style={styles.profileContainer}>
        <ProfileImage />
        <Text style={styles.fullName}>{userData?.user.name}</Text>
        <Text style={styles.username}>@{userData?.user.username}</Text>
      </View>

      <View style={styles.buttonWrapper}>
        <Button
          title="Logout"
          onPress={handleSignOut}
          loading={loading}
          icon={{
            icon: 'right-from-bracket',
            size: 20,
            color: theme.colors.base150,
            style: { marginRight: 12 },
          }}
        />
      </View>
    </View>
  );
};

export default Profile;
