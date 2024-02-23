"use client";
import * as React from 'react';
import Box from '@mui/material/Box';
import Toolbar from '@mui/material/Toolbar';
import AddIcon from '@mui/icons-material/Add';
import Button from '@mui/material/Button';
import IconButton from '@mui/material/IconButton';
import { StyledHeaderBar } from '@/styles/header';
import ChevronLeftIcon from '@mui/icons-material/ChevronLeft';
import DoneOutlinedIcon from '@mui/icons-material/DoneOutlined';
import { useRouter } from 'next/navigation'

import { usePathname } from 'next/navigation'
import { useCollectionFormAction } from '@/store/add-collection';

const HeaderBar = () => {
  const router = useRouter()
  const pathname = usePathname()
  const [, { addCollectionToBE }] = useCollectionFormAction()

  const ACTION_BUTTON = {
    '/collection': {
      text: '追加',
      icon: <AddIcon />,
      func: () => router.push('/collection/add')
    },
    '/collection/add': {
      text: '保存',
      icon: <DoneOutlinedIcon />,
      func: () => addCollectionToBE()
    }
  }

  const button = ACTION_BUTTON?.[pathname]
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
          startIcon={button.icon}
          onClick={button.func}
        >
          {button.text}
        </Button>
      </Toolbar>
    </StyledHeaderBar>
  )
}

export default HeaderBar