import { JSX, useEffect } from 'react';
import { SafeAreaView, StatusBar, Animated } from 'react-native';

import styles from './styles.ts';

import Title from '../../components/Title/index.tsx';

const SplashScreen = (): JSX.Element => {
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
        <Title text="RealtimeChat" />
      </Animated.View>
    </SafeAreaView>
  );
};

export default SplashScreen;
