import { JSX } from 'react';

import './src/services/fontawesome.ts';

import Routes from './src/routes';
import AuthProvider from './src/features/auth/providers/AuthProvider/index.tsx';
import SocketProvider from './src/providers/SocketProvider/index.tsx';

const App = (): JSX.Element => {
  return (
    <AuthProvider>
      <SocketProvider>
        <Routes />
      </SocketProvider>
    </AuthProvider>
  );
};

export default App;
