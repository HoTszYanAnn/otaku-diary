import * as React from 'react';
import AppBar from '@mui/material/AppBar';
import Box from '@mui/material/Box';
import Toolbar from '@mui/material/Toolbar';
import IconButton from '@mui/material/IconButton';
import MenuIcon from '@mui/icons-material/Menu';
import AddIcon from '@mui/icons-material/Add';
import SearchIcon from '@mui/icons-material/Search';
import MoreIcon from '@mui/icons-material/MoreVert';

const FooterBar = () => {
  return (
    <AppBar position="fixed" color="white" sx={{ top: 'auto', bottom: 0 }}>
      <Toolbar>
        <IconButton color="inherit" aria-label="open drawer">
          <MenuIcon />
        </IconButton>
        <IconButton color="inherit">
          <SearchIcon />
        </IconButton>
        <IconButton color="inherit">
          <MoreIcon />
        </IconButton>
      </Toolbar>
    </AppBar>
  )
}

export default FooterBar