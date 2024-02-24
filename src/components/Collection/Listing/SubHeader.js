"use client";
import * as React from 'react';
import Box from '@mui/material/Box';
import Toolbar from '@mui/material/Toolbar';
import { StyledSubHeaderBar } from '@/styles/header';
import { IconButton, Typography } from '@mui/material';
import EditIcon from '@mui/icons-material/Edit';
import { usePathname, useRouter } from 'next/navigation';
import RefreshOutlinedIcon from '@mui/icons-material/RefreshOutlined';
import { useCollectionListAction } from '@/store/collection-list';
const SubHeaderBar = () => {
  const router = useRouter()
  const pathname = usePathname()
  const [, { resetCollectionEditList }] = useCollectionListAction()
  const ACTION_BUTTON = {
    '/collection': {
      icon: <EditIcon />,
      func: () => router.push('/collection/edit')
    },
    '/collection/edit': {
      icon: <RefreshOutlinedIcon />,
      func: () => resetCollectionEditList()
    }
  }
  const button = ACTION_BUTTON?.[pathname]

  return (
    <StyledSubHeaderBar position="fixed" color="white">
      <Toolbar>
        <Typography color="primary" variant="h5" >
          コレクション
        </Typography>
        <Box sx={{ flexGrow: 1 }} />
        {button && <IconButton color="primary"
          onClick={button?.func}
        >
          {button?.icon}
        </IconButton>}
      </Toolbar>
    </StyledSubHeaderBar>
  )
}

export default SubHeaderBar