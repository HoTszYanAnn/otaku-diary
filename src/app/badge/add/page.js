"use client"
import ImageUploader from "@/components/Badge/Add/ImageUploader"
import { StyledMain } from "@/styles/Badge/listing"
import AddIcon from "@mui/icons-material/Add"
import RemoveIcon from '@mui/icons-material/Remove';
import { Grid, IconButton } from "@mui/material"
import { useState } from "react"

const BadgeAddPage = () => {
  const [form, setForm] = useState({})
  const onUploadImageFinish = (newImage) => {
    setForm({
      ...form,
      image: newImage
    })
  }
  console.log(form)
  return (
    <StyledMain>
      <ImageUploader image={form.image} onUploadFinish={onUploadImageFinish} />
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