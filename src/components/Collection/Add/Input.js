import { Typography } from "@mui/material";
import { StyledInputContainer, StyledInput } from "./styled";

const Input = ({ fieldName }) => {
  return (
    <StyledInputContainer
      container
      direction="row"
      justifyContent="space-between"
      alignItems="center"
    >
      <Typography>{fieldName}</Typography>
      <StyledInput type="text" />
    </StyledInputContainer>
  )
}

export default Input