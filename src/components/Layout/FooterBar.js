import * as React from 'react';
import AppBar from '@mui/material/AppBar';
import Toolbar from '@mui/material/Toolbar';
import { Grid } from '@mui/material';
import { StyledButtonBox } from './styled'
import WidgetsOutlinedIcon from '@mui/icons-material/WidgetsOutlined';

const FooterBar = () => {
  return (
    <AppBar position="fixed" color="white" sx={{ top: 'auto', bottom: 0 }}>
      <Toolbar>
        <Grid container justifyContent="space-around">
          <StyledButtonBox color="inherit" active>
            <WidgetsOutlinedIcon color='primary' />
          </StyledButtonBox>
        </Grid>
      </Toolbar>
    </AppBar>
  )
}

export default FooterBar