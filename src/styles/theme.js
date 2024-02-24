
// src/theme.ts
'use client';
import { Roboto } from 'next/font/google';
import { createTheme } from '@mui/material/styles';
import { GlobalStyles } from '@mui/material';
import { styled } from '@mui/system';

const roboto = Roboto({
  weight: ['300', '400', '500', '700'],
  subsets: ['latin'],
  display: 'swap',
});

const theme = createTheme({
  typography: {
    fontFamily: roboto.style.fontFamily,
  },
  palette: {
    primary: {
      light: '#BFACE2',
      main: '#A084DC',
      dark: '#645CBB',
      contrastText: '#fff',
    },
    secondary: {
      light: '#ff7961',
      main: '#f44336',
      dark: '#ba000d',
      contrastText: '#000',
    },
    white: {
      light: '#ffffff',
      main: '#ffffff',
      dark: '#ffffff',
      contrastText: '#000',
    },
    background: '#F8F8F8',
    text: {
      light: '#707070',
      main: '#707070',
      dark: '#707070',
    },
  },
  components: {
    MuiButton: {
      styleOverrides: {
        root: {
          boxShadow: 'unset',
          borderRadius: 20,
          "&:hover": {
            boxShadow: 'unset',
          }
        }
      }
    },
    MuiAppBar: {
      styleOverrides: {
        root: {
          boxShadow: 'unset',
          height: 56
        }
      }
    },
    MuiTypography: {
      styleOverrides: {
        root: {
          fontWeight: 'bold',
          color: "#707070"
        }
      }
    }
  }
});

export const globalStyles = (
  <GlobalStyles
    styles={(theme) => ({
      body: {
        backgroundColor: theme.palette.background,
        margin: 0
      }
    })}
  />
);

export default theme;