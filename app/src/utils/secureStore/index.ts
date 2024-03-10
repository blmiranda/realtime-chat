import EncryptedStorage from 'react-native-encrypted-storage';

import { ObjectToStore } from './types';

async function set(key: string, object: ObjectToStore) {
  try {
    await EncryptedStorage.setItem(key, JSON.stringify(object));
  } catch (error: unknown) {
    if (error instanceof Error) throw new Error(error.message);
  }
}

async function get(key: string) {
  try {
    const data: string | null = await EncryptedStorage.getItem(key);
    if (data) return JSON.parse(data);
  } catch (error: unknown) {
    if (error instanceof Error) throw new Error(error.message);
  }
}

async function remove(key: string) {
  try {
    await EncryptedStorage.removeItem(key);
  } catch (error: unknown) {
    if (error instanceof Error) throw new Error(error.message);
  }
}

async function wipe() {
  try {
    await EncryptedStorage.clear();
  } catch (error: unknown) {
    if (error instanceof Error) throw new Error(error.message);
  }
}

export default { set, get, remove, wipe };
