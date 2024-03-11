import { JSX, useEffect, useState } from 'react';

import { Props } from './types.ts';

import signIn from '../../api/signIn.ts';
import signUp from '../../api/signUp.ts';
import secureStore from '../../../../utils/secureStore';

import { AuthContextObject } from '../../types/authContextObject.types.ts';
import { UserDataObject } from '../../../../global/types/userDataObject.types.ts';

import AuthContext from '../../contexts/AuthContext/index.ts';

const AuthProvider = ({ children }: Props): JSX.Element => {
  const [loading, setLoading] = useState<boolean>(false);
  const [userData, setUserData] = useState<UserDataObject | null>(null);

  console.log(userData);

  async function getStoredData() {
    try {
      const data: UserDataObject = await secureStore.get('userData');

      setUserData(data);
    } catch (error: unknown) {
      if (error instanceof Error) throw new Error(error.message);
    }
  }

  async function signInHandler(
    username: string,
    password: string
  ): Promise<void> {
    try {
      setLoading(true);

      const data: UserDataObject = await signIn(username, password);

      await secureStore.set('userData', data);

      setUserData(data);
    } catch (error: unknown) {
      if (error instanceof Error) throw new Error(error.message);
    } finally {
      setLoading(false);
    }
  }

  async function signUpHandler(
    username: string,
    firstName: string,
    lastName: string,
    password: string
  ): Promise<void> {
    try {
      setLoading(true);

      await signUp(username, firstName, lastName, password);
      await signInHandler(username, password);
    } catch (error: unknown) {
      if (error instanceof Error) throw new Error(error.message);
    } finally {
      setLoading(false);
    }
  }

  async function signOutHandler(): Promise<void> {
    try {
      setLoading(true);

      await secureStore.wipe();

      setUserData(null);
    } catch (error: unknown) {
      if (error instanceof Error)
        throw new Error('Logout could not be completed');
    } finally {
      setLoading(false);
    }
  }

  const value: AuthContextObject = {
    loading: loading,
    userData: userData,
    setUserData: setUserData,
    getStoredData: getStoredData,
    signIn: signInHandler,
    signUp: signUpHandler,
    signOut: signOutHandler,
  };

  return <AuthContext.Provider value={value}>{children}</AuthContext.Provider>;
};

export default AuthProvider;
