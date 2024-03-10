import { SetSearchListState } from '../../../../global/types/setSearchListState.types';
import { SearchListItem } from '../../types/searchListItem.types';

function requestConnection(
  socket: WebSocket | null,
  myUsername: string,
  username: string,
  searchList: Array<SearchListItem>,
  setSearchList: SetSearchListState
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

    console.log('sender: ', connection.sender.username);
    console.log('receiver: ', connection.receiver.username);

    if (myUsername === connection.sender.username) {
      const searchListCopy: Array<SearchListItem> = [...searchList];
      console.log('search list copy: ', searchListCopy);
      const searchIndex: number = searchListCopy.findIndex(
        (item) => item.username === connection.receiver.username
      );

      console.log('searchIndex: ', searchIndex);

      if (searchIndex >= 0) {
        searchListCopy[searchIndex].status = 'pending-them';
        console.log('Search list item: ', searchListCopy[searchIndex]);
        setSearchList(searchListCopy);
      }
    } else {
    }
  };
}

export default requestConnection;
