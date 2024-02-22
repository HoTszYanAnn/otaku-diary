"use client";
import * as React from 'react';
import Box from '@mui/material/Box';
import Toolbar from '@mui/material/Toolbar';
import AddIcon from '@mui/icons-material/Add';
import Button from '@mui/material/Button';
import IconButton from '@mui/material/IconButton';
import { StyledHeaderBar } from '@/styles/header';
import ChevronLeftIcon from '@mui/icons-material/ChevronLeft';
import { useRouter } from 'next/navigation'

import { usePathname } from 'next/navigation'
const HeaderBar = () => {
  const router = useRouter()
  const pathname = usePathname()

  return (
    <StyledHeaderBar position="fixed" color="white">
      <Toolbar style={{ paddingLeft: 10 }}>
        <IconButton color="primary">
          <ChevronLeftIcon onClick={() => {
            const path = pathname?.split('/')?.slice(0, -1)?.join('/') || '/'
            router.push(path)
          }} />
        </IconButton>
        <Box sx={{ flexGrow: 1 }} />
        <Button
          color="primary"
          variant="contained"
          startIcon={<AddIcon />}
          onClick={() => router.push('/badge/add')}
        >
          Add
        </Button>
      </Toolbar>
    </StyledHeaderBar>
  )
}

export default HeaderBar