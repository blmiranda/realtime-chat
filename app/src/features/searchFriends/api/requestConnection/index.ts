import { Platform } from 'react-native';
import { SetRequestListState } from '../../../../global/types/setRequestListState.types';
import { SetSearchListState } from '../../../../global/types/setSearchListState.types';
import { RequestListObject } from '../../../home/types/requestListObject.types';
import { SearchListItem } from '../../types/searchListItem.types';

function requestConnection(
  socket: WebSocket | null,
  myUsername: string,
  username: string,
  searchList: Array<SearchListItem>,
  setSearchList: SetSearchListState,
  requestList: Array<RequestListObject> | null,
  setRequestList: SetRequestListState
): void {
  socket?.send(
    JSON.stringify({
      source: 'request.connect',
      username: username,
    })
  );

  socket!.onmessage = (event) => {
    const parsed = JSON.parse(event.data);
    const connection = parsed.data;

    console.log(`[${Platform.OS}]: `, connection.sender.username);

    if (myUsername === connection.sender.username) {
      const searchListCopy: Array<SearchListItem> = [...searchList];
      const searchIndex: number = searchListCopy.findIndex(
        (item) => item.username === connection.receiver.username
      );

      if (searchIndex >= 0) {
        searchListCopy[searchIndex].status = 'pending-them';
        console.log('Search list item: ', searchListCopy[searchIndex]);
        setSearchList(searchListCopy);
      }
    } else {
      console.log('IM HERRRREEE');
      const requestListCopy: Array<RequestListObject> = [...requestList!];
      const requestIndex: number = requestListCopy.findIndex(
        (item) => item.sender.username === connection.receiver.username
      );

      if (requestIndex === -1) {
        requestListCopy.unshift(connection);
        setRequestList(requestListCopy);
      }
    }
  };
}

export default requestConnection;
