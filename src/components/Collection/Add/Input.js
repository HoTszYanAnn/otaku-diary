import { Typography } from "@mui/material";
import { StyledInputContainer, StyledInput } from "./styled";

const Input = ({ label, onChange, value }) => {
  return (
    <StyledInputContainer
      textInput
      container
      direction="row"
      justifyContent="space-between"
      alignItems="center"
    >
      <Typography>{label}</Typography>
      <StyledInput type="text" onChange={(e) => onChange(e.target.value)} value={value} placeholder="未設定" />
    </StyledInputContainer>
  )
}

export default Input