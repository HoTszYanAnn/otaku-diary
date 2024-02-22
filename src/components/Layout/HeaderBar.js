"use client";
import * as React from 'react';
import Box from '@mui/material/Box';
import Toolbar from '@mui/material/Toolbar';
import AddIcon from '@mui/icons-material/Add';
import Button from '@mui/material/Button';
import IconButton from '@mui/material/IconButton';
import { StyledHeaderBar } from '@/styles/header';
import ArrowBackIosNewIcon from '@mui/icons-material/ArrowBackIosNew';
import ChevronLeftIcon from '@mui/icons-material/ChevronLeft';

const HeaderBar = () => {
  return (
    <StyledHeaderBar position="fixed" color="white">
      <Toolbar style={{ paddingLeft: 10 }}>
        <IconButton color="primary">
          <ChevronLeftIcon />
        </IconButton>
        <Box sx={{ flexGrow: 1 }} />
        <Button
          color="primary"
          variant="contained"
          startIcon={<AddIcon />}
        >
          Add
        </Button>
      </Toolbar>
    </StyledHeaderBar>
  )
}

export default HeaderBar