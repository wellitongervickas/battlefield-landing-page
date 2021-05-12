import 'styled-components';

declare module 'styled-components' {
  export interface DefaultTheme {
    colors: {
      primary: string;
      white: string;
      light_gray: string;
      dark_gray: string;
      darkness: string;
      black: string;
    };
    fonts: {
      weights: {
        regular: number;
        bold: number;
      };
      sizes: {
        xs: string;
        sm: string;
        xm: string;
        md: string;
        lg: string;
        xl: string;
      };
    };
  }
}
