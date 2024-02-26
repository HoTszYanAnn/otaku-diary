"use client"
import { styled } from "@mui/material";
import Box from "@mui/material/Box"

export const StyledButtonBox = styled(Box)(({ theme, active }) => ({
  ...(active ? {
    position: 'absolute',
    left: 10,
    bottom: 16,
    backgroundColor: 'white',
    borderRadius: '50%',
    height: 80,
    width: 80,
    display: 'flex',
    justifyContent: "center",
    alignItems: "center",
    zIndex: 2,
    '.MuiSvgIcon-root': {
      fontSize: 52
    },
  } : {
  })
}));
export const StyledButtonContainerBox = styled(Box)(({ theme, active }) => ({
  ...(active ? {
    position: 'relative',
    height: 56,
    width: 100,
    '&::after': {
      position: 'absolute',
      bottom: 6,
      left: 0,
      height: 50,
      width: 100,
      borderRadius: '0 0 50% 50%/0 0 100% 100%',
      backgroundColor: '#f8f8f8',
      content: '""',
      display: 'block'
    }

  } : {
  })
}));
export const StyledFixedRouteLoadingBox = styled(Box)(({ theme }) => ({
  position: 'fixed',
  width: '100%',
  top: 0,
  left: 0,
  zIndex: 10000,
  '.MuiLinearProgress-root': {
    height: 2
  }
}))