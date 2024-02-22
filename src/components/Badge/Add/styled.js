"use client"
import Box from '@mui/material/Box';
import { styled } from '@mui/system';
import LinearProgress from '@mui/material/LinearProgress';
import Grid from "@mui/material/Grid"

export const StyledMain = styled('main')(({ theme }) => ({
  margin: '96px 20px 86px'
}));

export const StyledLabel = styled('label')(({ theme }) => ({
  width: 200,
  height: 200,
  margin: 'auto',
  display: 'block',
  position: 'relative',
  background: theme.palette.white.main,
  borderRadius: 10,
  overflow: 'hidden'
}));

export const StyledLinearProgress = styled(LinearProgress)(({ theme }) => ({
  position: 'absolute',
  width: '100%',
  bottom: 0
}));

export const StyledImg = styled('img')(({ theme }) => ({
  position: 'absolute',
  width: '100%',
  height: '100%',
  objectFit: 'cover',
  top: 0,
  zIndex: 1,
}));

export const StyledInputContainer = styled(Grid)(({ theme }) => ({
  backgroundColor: theme.palette.white.main,
  borderRadius: 10,
  margin: '20px 0',
  padding: '0 20px',
  height: 56,
}));

export const StyledInput = styled('input')(({ theme, align, width }) => ({
  fontSize: 16,
  outline: 'unset',
  border: 'none',
  textAlign: align || 'right',
  width: width || 'auto'
}));

