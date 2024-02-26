"use client"
import { styled } from "@mui/material";
import Box from "@mui/material/Box"

export const StyledButtonBox = styled(Box)(({ theme, active }) => ({
  ...(active ? {
    backgroundColor: 'white',
    border: `10px solid #F8F8F8`,
    borderRadius: '50%',
    height: 80,
    width: 80,
    marginBottom: 60,
    display: 'flex',
    justifyContent: "center",
    alignItems: "center",
    '.MuiSvgIcon-root': {
      fontSize: 52
    }
  } : {
  })
}));
