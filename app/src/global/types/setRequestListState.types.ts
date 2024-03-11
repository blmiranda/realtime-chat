import { Dispatch, SetStateAction } from 'react';

import { RequestListObject } from '../../features/home/types/requestListObject.types';

export type SetRequestListState =
  | Dispatch<SetStateAction<Array<RequestListObject> | null>>
  | (() => void);
