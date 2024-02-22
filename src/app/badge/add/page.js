"use client"
import ImageUploader from "@/components/Badge/Add/ImageUploader"
import { StyledMain } from "@/styles/Badge/listing"
import AddIcon from "@mui/icons-material/Add"
import RemoveIcon from '@mui/icons-material/Remove';
import { Grid, IconButton } from "@mui/material"
import { useState } from "react"

const BadgeAddPage = () => {
  const [form, setForm] = useState({})

  return (
    <StyledMain>
      <ImageUploader img={form.image} />
      <Grid
        container
        direction="row"
        justifyContent="center"
        alignItems="center"
      >
        <IconButton>
          < RemoveIcon />
        </IconButton>
        <IconButton>
          <AddIcon />
        </IconButton>
      </Grid>
    </StyledMain>
  )
}

export default BadgeAddPage