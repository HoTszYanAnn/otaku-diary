"use client";
import { useState } from 'react';
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
import { useCollectionListAction } from '@/store/collection-list';
import { CircularProgress } from '@mui/material';

const HeaderBar = () => {
  const router = useRouter()
  const pathname = usePathname()
  const [isButtonLoading, setButtonLoading] = useState(false)
  const [, { addCollectionToBE }] = useCollectionFormAction()
  const [, { updateCollectionQuantityToBE }] = useCollectionListAction()
  const ACTION_BUTTON = {
    '/collection': {
      text: '追加',
      icon: <AddIcon />,
      func: () => router.push('/collection/add')
    },
    '/collection/add': {
      text: '保存',
      icon: <DoneOutlinedIcon />,
      func: async () => {
        setButtonLoading(true)
        const res = await addCollectionToBE()
        if (res?.ok) {
          router.push('/collection')
        } else {
          alert(res?.message)
        }
        setButtonLoading(false)
      }
    },
    '/collection/edit': {
      text: '保存',
      icon: <DoneOutlinedIcon />,
      func: async () => {
        if (window.confirm('really save')) {
          setButtonLoading(true)
          const res = await updateCollectionQuantityToBE()
          if (res?.ok) {
            router.push('/collection')
          } else {
            alert(res?.message)
          }
          setButtonLoading(false)
        } else {
        }
      }
    }
  }

  const button = ACTION_BUTTON?.[pathname]
  return (
    <StyledHeaderBar position="fixed" color="white">
      <Toolbar style={{ paddingLeft: 10 }}>
        <IconButton color="primary" onClick={() => {
          const path = pathname?.split('/')?.slice(0, -1)?.join('/') || '/'
          router.push(path)
        }} >
          <ChevronLeftIcon />
        </IconButton>
        <Box sx={{ flexGrow: 1 }} />
        {button && <Button
          color="primary"
          variant="contained"
          startIcon={button.icon}
          onClick={button.func}
          disabled={isButtonLoading}
        >
          {isButtonLoading ? <CircularProgress color="inherit" size={16} /> : button.text}
        </Button>}
      </Toolbar>
    </StyledHeaderBar >
  )
}

export default HeaderBar