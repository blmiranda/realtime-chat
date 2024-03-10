import { JSX } from 'react';
import { Alert, Text } from 'react-native';
import {
  NavigationProp,
  ParamListBase,
  useNavigation,
} from '@react-navigation/native';

import styles from './styles.ts';

import Form from '../../../../components/Form/index.tsx';
import LinkButton from '../../../../components/LinkButton/index.tsx';
import useAuth from '../../hooks/useAuth/index.ts';
import { InputsObject } from '../../../../global/types/inputsObject.types.ts';

const SignInForm = (): JSX.Element => {
  const navigation = useNavigation<NavigationProp<ParamListBase>>();
  const { signIn, loading } = useAuth();

  async function handleSignIn({ username, password }: InputsObject) {
    try {
      await signIn(username!.value.trim(), password!.value.trim());
    } catch (error: unknown) {
      if (error instanceof Error)
        Alert.alert(error.message, undefined, [
          { text: 'OK', style: 'cancel' },
        ]);
    }
  }

  return (
    <Form
      inputs={['username', 'password']}
      buttonText="Sign in"
      footer={(): JSX.Element => {
        return (
          <Text style={styles.footerText}>
            Don't have an account?{' '}
            <LinkButton
              text="Sign Up"
              onPress={() => navigation.navigate('SignUp')}
            />
          </Text>
        );
      }}
      onSubmit={handleSignIn}
      loading={loading}
    />
  );
};

export default SignInForm;
