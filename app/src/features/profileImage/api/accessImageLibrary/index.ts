import {
  launchImageLibrary,
  ImagePickerResponse,
  Asset,
} from 'react-native-image-picker';

import { SocketImageResponseObject } from './types';
import { SetUserDataState } from '../../../../global/types/setUserDataState.types';

function accessImageLibrary(
  socket: WebSocket | null,
  setUserData: SetUserDataState
): void {
  launchImageLibrary(
    { includeBase64: true, mediaType: 'photo' },
    (response: ImagePickerResponse) => {
      if (response.didCancel) return;

      const file: Asset | undefined = response.assets?.[0];

      socket?.send(
        JSON.stringify({
          source: 'thumbnail',
          base64: file?.base64,
          filename: file?.fileName,
        })
      );

      socket!.onmessage = (event) => {
        const parsed: SocketImageResponseObject = JSON.parse(event.data);

        console.log('onmessage:', parsed);

        setUserData((prev) => {
          if (prev) {
            return {
              ...prev,
              user: parsed.data,
            };
          }

          return null;
        });
      };
    }
  );
}

export default accessImageLibrary;
