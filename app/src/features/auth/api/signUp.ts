import { isAxiosError } from 'axios';

import api from '../../../services/defaultAxiosClient.ts';
import handleAxiosError from '../../../utils/handleAxiosError/indes.ts';

async function signUp(
  username: string,
  firstName: string,
  lastName: string,
  password: string
): Promise<void> {
  try {
    const response = await api({
      method: 'POST',
      url: '/chat/signup/',
      data: {
        username: username,
        first_name: firstName,
        last_name: lastName,
        password: password,
      },
    });

    console.log(response.data);
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

export default signUp;
