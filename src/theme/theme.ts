import '@emotion/react';

import { borders } from './borders';
import { breakpoints } from './breakpoints';
import { colors } from './colors';
import { elevations } from './elevations';
import { sizes } from './sizes';
import { spaces } from './spaces';
import { typography } from './typography';

interface ThemeType {
  borders: typeof borders;
  breakpoints: typeof breakpoints;
  colors: typeof colors;
  elevations: typeof elevations;
  typography: typeof typography;
  spaces: typeof spaces;
  sizes: typeof sizes;
}

const theme: ThemeType = {
  borders,
  breakpoints,
  colors,
  elevations,
  typography,
  spaces,
  sizes
};

export { theme };
export type { ThemeType };
