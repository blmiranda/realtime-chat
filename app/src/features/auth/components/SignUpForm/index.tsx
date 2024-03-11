import { JSX, useState } from 'react';
import { Alert, Text } from 'react-native';
import {
  NavigationProp,
  ParamListBase,
  useNavigation,
} from '@react-navigation/native';

import styles from './styles.ts';
import useAuth from '../../hooks/useAuth/index.ts';

import { InputsObject } from '../../../../global/types/inputsObject.types.ts';

import Form from '../../../../components/Form/index.tsx';
import LinkButton from '../../../../components/LinkButton/index.tsx';

const SignUpForm = (): JSX.Element => {
  const navigation = useNavigation<NavigationProp<ParamListBase>>();
  const { signUp, loading } = useAuth();

  async function handleSignUp({
    username,
    firstName,
    lastName,
    password,
  }: InputsObject) {
    try {
      await signUp(
        username!.value.trim(),
        firstName!.value.trim(),
        lastName!.value.trim(),
        password!.value.trim()
      );
    } catch (error: unknown) {
      if (error instanceof Error)
        Alert.alert(error.message, undefined, [
          { text: 'OK', style: 'cancel' },
        ]);
    }
  }

  return (
    <Form
      inputs={[
        'username',
        'firstName',
        'lastName',
        'password',
        'repeatPassword',
      ]}
      buttonText="Sign Up"
      footer={(): JSX.Element => {
        return (
          <Text style={styles.footerText}>
            Don't have an account?{' '}
            <LinkButton
              text="Sign In"
              onPress={() => navigation.navigate('SignIn')}
            />
          </Text>
        );
      }}
      onSubmit={handleSignUp}
      loading={loading}
    />
  );
};

export default SignUpForm;
