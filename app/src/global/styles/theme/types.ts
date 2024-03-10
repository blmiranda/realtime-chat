type HexColor = `#${string}`;

type FontWeights =
  | 'thin'
  | 'extraLight'
  | 'light'
  | 'regular'
  | 'medium'
  | 'semiBold'
  | 'bold'
  | 'extraBold'
  | 'black';

export interface Theme {
  colors: {
    [key: string]: HexColor;
  };

  fonts: {
    [key: string]: {
      [key in FontWeights]?: string;
    };
  };
}
