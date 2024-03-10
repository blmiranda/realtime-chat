import { Dispatch, SetStateAction } from 'react';

import { UserDataObject } from './userDataObject.types';

export type SetUserDataState =
  | Dispatch<SetStateAction<UserDataObject | null>>
  | (() => void);
