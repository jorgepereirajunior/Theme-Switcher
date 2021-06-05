import 'styled-components'

declare module 'styled-components' {
  export interface DefaultTheme {
    name: string;

    colors: {
      primary: string;

      switch: string;
      title: string;
      background: string;
    }
  }
}