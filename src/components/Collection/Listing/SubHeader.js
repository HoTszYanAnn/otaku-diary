"use client";
import * as React from 'react';
import Box from '@mui/material/Box';
import Toolbar from '@mui/material/Toolbar';
import { StyledSubHeaderBar } from '@/styles/header';
import { IconButton, Typography } from '@mui/material';
import GridViewOutlinedIcon from '@mui/icons-material/GridViewOutlined';
import EditIcon from '@mui/icons-material/Edit';
import { kv } from "@vercel/kv";



const SubHeaderBar = () => {

  const onClick = async () => {
    const response = await fetch(
      `/api/collection/push`,
      {
        method: 'POST',
      },
    );
  }

  return (
    <StyledSubHeaderBar position="fixed" color="white">
      <Toolbar>
        <Typography color="primary" variant="h5" >
          バッジコレ
        </Typography>
        <Box sx={{ flexGrow: 1 }} />
        <IconButton color="primary"
          onClick={onClick}
        >
          <EditIcon />
        </IconButton>
      </Toolbar>
    </StyledSubHeaderBar>
  )
}

export default SubHeaderBar