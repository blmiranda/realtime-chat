import { JSX, useEffect, useLayoutEffect } from 'react';
import { SafeAreaView, StatusBar, Animated } from 'react-native';
import { NavigationProp, ParamListBase } from '@react-navigation/native';

import theme from '../../global/styles/theme/index.ts';
import styles from './styles.ts';

import Title from '../../components/Title/index.tsx';

interface props {
  navigation: NavigationProp<ParamListBase>;
}

const SplashScreen = ({ navigation }: props): JSX.Element => {
  useLayoutEffect(() => {
    navigation.setOptions({
      headerShown: false,
    });
  }, []);

  const translateY = new Animated.Value(0);
  const duration: number = 800;

  useEffect(() => {
    Animated.loop(
      Animated.sequence([
        Animated.timing(translateY, {
          toValue: 20,
          duration: duration,
          useNativeDriver: true,
        }),
        Animated.timing(translateY, {
          toValue: 0,
          duration: duration,
          useNativeDriver: true,
        }),
      ])
    ).start();
  });

  return (
    <SafeAreaView style={styles.container}>
      <StatusBar barStyle="light-content" />

      <Animated.View style={{ transform: [{ translateY: translateY }] }}>
        <Title text="RealtimeChat" color={theme.colors.neutralWhite} />
      </Animated.View>
    </SafeAreaView>
  );
};

export default SplashScreen;
