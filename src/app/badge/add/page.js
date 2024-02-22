"use client"
import ImageUploader from "@/components/Badge/Add/ImageUploader"
import Input from "@/components/Badge/Add/Input"
import NumberInput from "@/components/Badge/Add/NumberInput"
import { StyledMain } from "@/components/Badge/Add/styled"
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
      <Input fieldName={"バッジ"} />
      <NumberInput fieldName={"数量"} />
    </StyledMain>
  )
}

export default BadgeAddPage