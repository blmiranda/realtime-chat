import { UserObject } from './userObject.types';

export interface UserDataObject {
  tokens: {
    access: string;
    refresh: string;
  };
  user: UserObject;
}
