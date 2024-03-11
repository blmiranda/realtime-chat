import { Dispatch, SetStateAction } from 'react';

import { InputsObject } from './inputsObject.types';

export type FormInputsSetter = Dispatch<SetStateAction<InputsObject>>;
