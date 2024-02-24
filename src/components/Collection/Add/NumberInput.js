import AddIcon from "@mui/icons-material/Add"
import RemoveIcon from '@mui/icons-material/Remove';
import IconButton from "@mui/material/IconButton"
import { StyledInput, StyledInputContainer } from "./styled";
import { Grid, Typography } from "@mui/material";
import { useState } from "react";
import { toInteger } from "lodash";

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
        <IconButton color="primary" onClick={() => onChange(value > 0 ? value - 1 : value)}>
          <RemoveIcon />
        </IconButton>
        <StyledInput type="number" min="0" align={'center'} width={44} value={value} onChange={(e) => onChange(toInteger(e?.target?.value) || value)} onKeyDown={(evt) => ["e", "E", "+", "-"].includes(evt.key) && evt.preventDefault()} />
        <IconButton color="primary" onClick={() => onChange(value + 1)}>
          <AddIcon />
        </IconButton>
      </Grid>
    </StyledInputContainer>
  )
}

export default NumberInput