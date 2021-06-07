import { FC, useMemo } from 'react';
import { ThemeProvider } from 'styled-components';
import { light } from '@sekyungk/design-token';

export const SekyungkThemeProvier: FC = ({ children }) => {
  const theme = useMemo(() => {
    return {
      colors: {
        ...light.scheme,
      },
    };
  }, []);

  return (
    <>
      <ThemeProvider theme={theme}>{children}</ThemeProvider>
    </>
  );
};
