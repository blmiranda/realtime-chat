import { JSX, useEffect, useLayoutEffect, useState } from 'react';
import {
  SafeAreaView,
  Text,
  View,
  Pressable,
  Keyboard,
  KeyboardAvoidingView,
  ScrollView,
  Platform,
} from 'react-native';

import styles from './styles.ts';
import { Props } from './types.ts';

import SignUpForm from '../../components/SignUpForm/index.tsx';

const SignUp = ({ navigation }: Props): JSX.Element => {
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
        keyboardVerticalOffset={Platform.select({ ios: 0, android: 50 })}
      >
        <ScrollView contentContainerStyle={styles.preContainer}>
          <Pressable style={styles.preContainer} onPress={Keyboard.dismiss}>
            <View style={styles.container}>
              <Text style={styles.heading}>Sign Up</Text>

              <SignUpForm />
            </View>
          </Pressable>
        </ScrollView>
      </KeyboardAvoidingView>
    </SafeAreaView>
  );
};

export default SignUp;
