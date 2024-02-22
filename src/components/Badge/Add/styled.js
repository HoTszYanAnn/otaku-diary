"use client"
import Box from '@mui/material/Box';
import { styled } from '@mui/system';
import LinearProgress from '@mui/material/LinearProgress';

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


