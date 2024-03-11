import { Dispatch, SetStateAction } from 'react';

import { SearchListItem } from '../../features/searchFriends/types/searchListItem.types';

export type SetSearchListState =
  | Dispatch<SetStateAction<Array<SearchListItem> | null>>
  | (() => void);
