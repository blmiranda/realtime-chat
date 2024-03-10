import { InputOptions } from '../../global/types/inputOptions.types.ts';

const inputOptions: InputOptions = {
  username: {
    id: 'username',
    title: 'Username',
    value: '',
    error: '',
    inputSettings: {
      autoCapitalize: 'none',
      autoComplete: 'off',
    },
  },
  firstName: {
    id: 'firstName',
    title: 'First Name',
    value: '',
    error: '',
    inputSettings: {},
  },
  lastName: {
    id: 'lastName',
    title: 'Last Name',
    value: '',
    error: '',
    inputSettings: {},
  },
  password: {
    id: 'password',
    title: 'Password',
    value: '',
    error: '',
    inputSettings: {
      secureTextEntry: true,
      autoCapitalize: 'none',
      autoComplete: 'off',
    },
  },
  repeatPassword: {
    id: 'repeatPassword',
    title: 'Retype Password',
    value: '',
    error: '',
    inputSettings: {
      secureTextEntry: true,
      autoCapitalize: 'none',
      autoComplete: 'off',
    },
  },
};

export default inputOptions;
