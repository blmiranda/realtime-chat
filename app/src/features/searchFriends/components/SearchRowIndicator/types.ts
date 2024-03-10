import { SetSearchListState } from '../../../../global/types/setSearchListState.types';
import { SearchListItem } from '../../types/searchListItem.types';

export interface Props {
  user: SearchListItem;
  searchList: Array<SearchListItem>;
  setSearchList: SetSearchListState;
}
