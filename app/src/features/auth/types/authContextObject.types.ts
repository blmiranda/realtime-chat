import { Dispatch, SetStateAction } from 'react';
import { UserDataObject } from '../../../global/types/userDataObject.types';

export interface AuthContextObject {
  loading: boolean;
  userData: UserDataObject | null;
  setUserData: Dispatch<SetStateAction<UserDataObject | null>> | (() => void);
  getStoredData: () => Promise<void>;
  signIn: (username: string, password: string) => Promise<void>;
  signUp: (
    username: string,
    firstName: string,
    lastName: string,
    password: string
  ) => Promise<void>;
  signOut: () => Promise<void>;
}
