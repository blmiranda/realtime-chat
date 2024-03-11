import { SetSearchListState } from '../../../../global/types/setSearchListState.types';

function searchForFriends(
  socket: WebSocket | null,
  setSearchList: SetSearchListState,
  query: string
): void {
  if (query !== '') {
    socket?.send(
      JSON.stringify({
        source: 'search',
        query: query,
      })
    );

    socket!.onmessage = (event) => {
      const parsed = JSON.parse(event.data);

      console.log('onmessage:', parsed);

      setSearchList(parsed.data);
    };
  } else {
    setSearchList(null);
  }
}

export default searchForFriends;
