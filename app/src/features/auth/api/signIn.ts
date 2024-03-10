import { isAxiosError } from 'axios';

import api from '../../../services/defaultAxiosClient.ts';
import handleAxiosError from '../../../utils/handleAxiosError/indes.ts';

import { UserDataObject } from '../../../global/types/userDataObject.types.ts';

async function signIn(
  username: string,
  password: string
): Promise<UserDataObject> {
  try {
    const response = await api({
      method: 'POST',
      url: '/chat/signin/',
      data: {
        username: username,
        password: password,
      },
    });

    console.log(response.data);
    const userData: UserDataObject = response.data;

    return userData;
  } catch (error: unknown) {
    if (isAxiosError(error)) {
      throw handleAxiosError(error);
    } else if (error instanceof Error) {
      throw new Error(error.message);
    } else {
      throw new Error('An unknown error ocurred');
    }
  }
}

export default signIn;
