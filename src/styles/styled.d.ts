import 'styled-components';

declare module 'styled-components' {
  export interface DefaultTheme {
    title: string;

    colors: {
      primary: string;
      secondary: string;
      error: string;
      icon: string;

      background: string;
      text: string;
      title: string;
    };
  }
}
