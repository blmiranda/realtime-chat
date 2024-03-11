import { createContext, SetStateAction } from 'react';

import { AuthContextObject } from '../../types/authContextObject.types';

const AuthContext = createContext<AuthContextObject>({
  loading: false,
  userData: null,
  setUserData: () => {},
  getStoredData: async () => {},
  signIn: async (username: string, password: string) => {},
  signUp: async (
    username: string,
    firstName: string,
    lastName: string,
    password: string
  ) => {},
  signOut: async () => {},
});

export default AuthContext;
