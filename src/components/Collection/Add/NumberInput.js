import AddIcon from "@mui/icons-material/Add"
import RemoveIcon from '@mui/icons-material/Remove';
import IconButton from "@mui/material/IconButton"
import { StyledInput, StyledInputContainer } from "./styled";
import { Typography } from "@mui/material";

const NumberInput = ({ fieldName }) => {
  return (
    <StyledInputContainer
      container
      direction="row"
      justifyContent="space-between"
      alignItems="center"
    >
      <Typography>{fieldName}</Typography>
      <div>
        <IconButton color="primary">
          <RemoveIcon />
        </IconButton>
        <StyledInput align={'center'} width={44} />
        <IconButton color="primary">
          <AddIcon />
        </IconButton>
      </div>
    </StyledInputContainer>
  )
}

export default NumberInput