import {
  createGlobalStyle,
  css,
  GlobalStyleComponent,
  DefaultTheme,
} from "styled-components";

export const GlobalStyles: GlobalStyleComponent<
  UnmappedObject,
  DefaultTheme
> = createGlobalStyle`
  *,
  *::before,
  *::after {
    margin: 0;
    padding: 0;
    box-sizing: border-box;
  }

  body
  #root {
    min-height: 100vh;
    overflow-x: 0;
  }

  #root {
    position: relative;
  }
`;

export const theme: UnmappedObject = {
  /* Layout */
  flexin: (
    jc: string = `center`,
    ai: string = `center`,
    fd: string = `row`,
    wrap: string = `nowrap`
  ) => css`
    display: flex;
    justify-content: ${jc};
    align-items: ${ai};
    flex-direction: ${fd};
    flex-wrap: ${wrap};
  `,

  /* Typography */
  fontLine: (fontSize: string, lineHeight?: string) => css`
    font-size: ${fontSize};
    line-height: ${lineHeight ?? fontSize};
  `,
};
