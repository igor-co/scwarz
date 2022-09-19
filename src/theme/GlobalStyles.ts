import { css } from '@emotion/react';

import { typography } from './typography';
import { colors } from './colors';

export const GlobalStyles = css`
  '@font-face': [ {
    font-family: ${typography.medium};
    font-weight: ${typography.weight.medium};
    font-style: normal;
    src: local('Roboto Medium'), local('Roboto-Medium'),
      url('../assets/fonts/LidlFontCondPro-Semibold.woff') format('truetype');
  }
   {
    font-family: ${typography.regular};
    font-weight: ${typography.weight.regular};
    font-style: normal;
    src: local('Roboto'), local('Roboto-Regular'),
      url('../assets/fonts/LidlFontCondPro-Regular.woff') format('truetype');
  }
  ],
  * {
    box-sizing: border-box;
    margin: 0;
    padding: 0;
  }

  input,
  textarea,
  button,
  select {
    outline: none;
  }

  body {
    color: ${colors.black};
    font-family: ${typography.regular};
    -webkit-font-smoothing: antialiased;
    -moz-osx-font-smoothing: grayscale;
  }

  button {
    color: ${colors.black};
    font-family: ${typography.regular};
  }

  input,
  textarea {
    line-height: ${typography.lineHeight.medium};
  }

  a {
    text-decoration: none;   
  }

  h1 {
    font-size: ${typography.typeScale.xlarge};
    font-weight: ${typography.weight.regular};
    line-height: ${typography.lineHeight.xlarge};
  }

  h2 {
    font-size: ${typography.typeScale.large};
    font-weight: ${typography.weight.regular};
    line-height: ${typography.lineHeight.large};
  }

  h3 {
    font-size: ${typography.typeScale.caption};
    font-weight: ${typography.weight.regular};
    line-height:${typography.lineHeight.caption};
  }

  h4
   {
    font-size: ${typography.typeScale.medium};
    font-weight: ${typography.weight.regular};
    line-height: ${typography.lineHeight.medium};
  }

  h5
  {
    font-family: ${typography.medium};
    font-size: ${typography.typeScale.normal};
    font-weight: ${typography.weight.medium};
    line-height: ${typography.lineHeight.normal};
  }

  h6,
   {
    font-family: ${typography.medium};
    font-size: ${typography.typeScale.small};
    font-weight: ${typography.weight.medium};
    line-height: ${typography.lineHeight.small};
  }  

  label {
    font-family: ${typography.medium};
    font-size: ${typography.typeScale.small};
    line-height: ${typography.lineHeight.small};
  } 
`;
