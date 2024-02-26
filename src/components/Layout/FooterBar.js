import * as React from 'react';
import AppBar from '@mui/material/AppBar';
import Toolbar from '@mui/material/Toolbar';
import { Grid } from '@mui/material';
import { StyledButtonBox, StyledButtonContainerBox } from './styled'
import WidgetsOutlinedIcon from '@mui/icons-material/WidgetsOutlined';

const FooterBar = () => {
  return (
    <AppBar position="fixed" color="white" sx={{ top: 'auto', bottom: 0 }}>
      <Toolbar>
        <Grid container justifyContent="space-around">
          <StyledButtonContainerBox color="inherit" active>
            <StyledButtonBox active>
              <WidgetsOutlinedIcon color='primary' />
            </StyledButtonBox>
          </StyledButtonContainerBox>
        </Grid>
      </Toolbar>
    </AppBar>
  )
}

export default FooterBar