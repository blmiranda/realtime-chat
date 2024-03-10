import { JSX, useLayoutEffect } from 'react';
import {
  Pressable,
  SafeAreaView,
  Text,
  View,
  Keyboard,
  KeyboardAvoidingView,
  ScrollView,
  Platform,
} from 'react-native';

import styles from './styles.ts';
import theme from '../../../../global/styles/theme/index.ts';
import { Props } from './types.ts';

import useKeyboardVisibility from '../../../../hooks/useKeyboardVisibility/index.ts';

import Title from '../../../../components/Title/index.tsx';
import SignInForm from '../../components/SignInForm/index.tsx';

const SignIn = ({ navigation }: Props): JSX.Element => {
  const { keyboardIsVisible } = useKeyboardVisibility();

  useLayoutEffect(() => {
    navigation.setOptions({
      headerShown: false,
    });
  });

  return (
    <SafeAreaView style={styles.preContainer}>
      <KeyboardAvoidingView
        style={styles.preContainer}
        behavior={Platform.OS === 'ios' ? 'padding' : 'height'}
        keyboardVerticalOffset={Platform.select({ ios: 0, android: 30 })}
      >
        <ScrollView
          contentContainerStyle={styles.preContainer}
          scrollEnabled={keyboardIsVisible}
        >
          <Pressable style={styles.preContainer} onPress={Keyboard.dismiss}>
            <View style={styles.container}>
              <Title text="RealtimeChat" color={theme.colors.neutralBlack} />

              <SignInForm />
            </View>
          </Pressable>
        </ScrollView>
      </KeyboardAvoidingView>
    </SafeAreaView>
  );
};

export default SignIn;
