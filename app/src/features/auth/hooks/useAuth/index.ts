import { useContext } from 'react';

import { AuthContextObject } from '../../types/authContextObject.types';

import AuthContext from '../../contexts/AuthContext';

function useAuth(): AuthContextObject {
  const context = useContext(AuthContext);

  return context;
}

export default useAuth;
