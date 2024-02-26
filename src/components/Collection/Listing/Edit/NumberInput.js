import AddIcon from "@mui/icons-material/Add"
import RemoveIcon from '@mui/icons-material/Remove';
import { StyledInput, StyledInputContainer, StyledIconButton } from "../styled";
import { Button, Grid, Typography } from "@mui/material";
import { useParams } from "next/navigation";
import { toInteger } from "lodash";

const NumberInput = ({ label, onChange, value = 0 }) => {

  return (
    <StyledInputContainer
      numberInput
      container
      direction="row"
      justifyContent="center"
      alignItems="center"
    >
      <Typography>{label}</Typography>
      <Grid container direction="row" style={{ width: 'unset' }} alignItems="center" justifyContent="center">
        <StyledIconButton color="white" variant="contained" onClick={() => onChange(value > 0 ? value - 1 : value)} >
          <RemoveIcon fontSize="small" />
        </StyledIconButton>
        <StyledInput onKeyDown={(evt) => ["e", "E", "+", "-"].includes(evt.key) && evt.preventDefault()} type="number" min="0" align={'center'} width={30} value={value} onChange={(e) => onChange(toInteger(e?.target?.value) || value)} />
        <StyledIconButton color="white" variant="contained" onClick={() => onChange(value + 1)}>
          <AddIcon fontSize="small" />
        </StyledIconButton>
      </Grid>
    </StyledInputContainer>
  )
}

export default NumberInput