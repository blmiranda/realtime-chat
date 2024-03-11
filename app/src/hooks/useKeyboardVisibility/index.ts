import { useState, useEffect } from 'react';
import { Keyboard, EmitterSubscription, Platform } from 'react-native';

import { KeyboardStatus } from './types.ts';

function useKeyboardVisibility(): KeyboardStatus {
  const [keyboardIsVisible, setKeyboardIsVisible] = useState<boolean>(false);

  useEffect(() => {
    if (Platform.OS === 'android') {
      setKeyboardIsVisible(true);
    }

    const keyboardDidShowListener: EmitterSubscription = Keyboard.addListener(
      'keyboardDidShow',
      () => setKeyboardIsVisible(true)
    );
    const keyboardDidHideListener: EmitterSubscription = Keyboard.addListener(
      'keyboardDidHide',
      () => setKeyboardIsVisible(false)
    );

    return () => {
      keyboardDidShowListener.remove();
      keyboardDidHideListener.remove();
    };
  }, []);

  return {
    keyboardIsVisible: keyboardIsVisible,
  };
}

export default useKeyboardVisibility;
