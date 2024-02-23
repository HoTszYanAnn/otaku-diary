import AddIcon from "@mui/icons-material/Add"
import RemoveIcon from '@mui/icons-material/Remove';
import IconButton from "@mui/material/IconButton"
import { StyledInput, StyledInputContainer } from "./styled";
import { Grid, Typography } from "@mui/material";
import { useState } from "react";

const NumberInput = ({ label, onChange, value }) => {

  return (
    <StyledInputContainer
      numberInput
      container
      direction="row"
      justifyContent="space-between"
      alignItems="center"
    >
      <Typography>{label}</Typography>
      <Grid container direction="row" style={{ width: 'unset' }}>
        <IconButton color="primary" onClick={() => onChange(value - 1)}>
          <RemoveIcon />
        </IconButton>
        <StyledInput type="number" min="0" align={'center'} width={44} value={value} onChange={(e) => onChange(e.target.value)} />
        <IconButton color="primary" onClick={() => onChange(value + 1)}>
          <AddIcon />
        </IconButton>
      </Grid>
    </StyledInputContainer>
  )
}

export default NumberInput