import { Dispatch, SetStateAction } from 'react';

export interface Props {
  value: string;
  setValue: Dispatch<SetStateAction<string>>;
}
