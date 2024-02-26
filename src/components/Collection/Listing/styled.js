"use client"
import { Box, ImageListItem } from '@mui/material';
import { styled } from '@mui/system';
import Grid from "@mui/material/Grid"
import ImageListItemBar from '@mui/material/ImageListItemBar';
import IconButton from "@mui/material/IconButton"
import Badge from "@mui/material/Badge"

export const StyledMain = styled('main')(({ theme }) => ({
  margin: '142px 10px 86px 30px'
}));

export const StyledBadge = styled(Badge)(({ theme, hidden }) => ({
  height: '100%',
  width: '100%',
  '.MuiBadge-badge': {
    display: hidden ? 'none' : 'flex',
    height: 36,
    width: 36,
    borderRadius: 100,
    fontSize: 16
  }
}));

export const StyledImageListItem = styled(ImageListItem)(({ theme }) => ({
  padding: "20px 20px 0 0",
  paddingBottom: 0,
  aspectRatio: '1/1',
  position: 'relative',
  overflow: 'hidden'
}));

export const StyledContainerBox = styled(Box)(({ theme }) => ({
  background: theme.palette.white.main,
  position: 'absolute',
  top: 0,
  left: 0,
  height: 'calc(100% - 20px)',
  width: '100%',
  borderRadius: 10,
  overflow: 'hidden'
}));

export const StyledOverlayBox = styled(Box)(({ isEdit }) => ({
  position: 'absolute',
  bottom: 0,
  left: 0,
  height: isEdit ? '100%' : '50%',
  backgroundImage: isEdit ? 'linear-gradient(180deg, #00000020, #00000030,#00000020)' : 'linear-gradient(180deg, transparent, #00000030)',
  width: '100%',
}));

export const StyledImage = styled('img')(({ isEdit }) => ({
  aspectRatio: '1/1',
  objectFit: 'contain',
  width: '100%',
  filter: isEdit ? 'blur(1px)' : 'blur(0)',
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
  width: 60,
  color: theme.palette.white.main,
  backgroundColor: 'transparent'
}));


export const StyledIconButton = styled(IconButton)(({ theme }) => ({
  background: theme.palette.primary.main,
  '&:hover': {
    background: theme.palette.primary.dark,
  }
}));

export const StyledQuantityBox = styled(Box)(({ theme }) => ({
  position: 'absolute',
  top: 0,
  right: -10,

  fontSize: 16,
}));

export const StyledChipBox = styled(Box)(({ theme }) => ({
  position: 'absolute',
  left: 0,
  bottom: 10,
  display: 'flex',
  justifyContent: 'center',
  padding: '0 10px'
}));

export const StyledDeleteButton = styled(IconButton)(({ theme }) => ({
  position: 'absolute',
  top: -14,
  right: -14,
  zIndex: 2,
  backgroundColor: theme.palette.primary.main,
  '&:hover': {
    backgroundColor: theme.palette.primary.dark,
  }
}));

export const StyledDeletedOverlay = styled(Box)(({ theme }) => ({
  position: 'absolute',
  left: 0,
  top: 0,
  width: '100%',
  height: '100%',
  zIndex: 1,
  borderRadius: 10,
  display: 'flex',
  justifyContent: 'center',
  alignItems: 'center',
  '.MuiSvgIcon-root': {
    fontSize: 150
  }
}));