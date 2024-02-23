import { Box, ImageListItem } from '@mui/material';
import { styled } from '@mui/system';
import Grid from "@mui/material/Grid"
import ImageListItemBar from '@mui/material/ImageListItemBar';

export const StyledImageListItem = styled(ImageListItem)(({ theme }) => ({
  background: theme.palette.white.main,
  borderRadius: 10,
  overflow: 'hidden',
  padding: 6
}));

export const StyledBox = styled(Box)(({ theme }) => ({
  position: 'absolute',
  bottom: 0,
  left: 0,
  height: '50%',
  backgroundImage: 'linear-gradient(180deg, transparent, #00000040)',
  width: '100%',
}));

export const StyledImage = styled('img')(({ theme }) => ({
  aspectRatio: '1/1',
  objectFit: 'contain',
  width: '100%',
  filter: 'blur(1px)',
}));


export const StyledInputContainer = styled(Grid)(({ theme, textInput, numberInput }) => ({
  height: '100%',
  width: '100%',
  alignSelf: 'center'
}));

export const StyledInput = styled('input')(({ theme, align, width }) => ({
  fontSize: 30,
  outline: 'unset',
  border: 'none',
  textAlign: align || 'right',
  width: 20,
  color: theme.palette.white.main,
  backgroundColor: 'transparent'
}));
