"use client"
import StyledImageUploader from "@/components/Collection/Add/ImageUploader"
import StyledInput from "@/components/Collection/Add/Input"
import NumberInput from "@/components/Collection/Add/NumberInput"
import { COLLECTION_FORM_FIELD, getCollectionLabelByKey } from "@/components/Collection/Add/const"
import { StyledMain } from "@/components/Collection/Add/styled"
import { useCollectionFormAction, useCollectionFormByField } from "@/store/add-collection"
import { useEffect } from "react"
import { defaults } from 'react-sweet-state';
defaults.devtools = true

const ImageUploader = () => {
  const [image, { setFormValue }] = useCollectionFormByField(COLLECTION_FORM_FIELD.IMAGE.key)

  const onUploadImageFinish = (newImage) => {
    setFormValue({ field: COLLECTION_FORM_FIELD.IMAGE.key, value: newImage })
  }
  return (
    <StyledImageUploader image={image} onUploadFinish={onUploadImageFinish} />
  )
}

const Input = ({ field }) => {
  const [value, { setFormValue }] = useCollectionFormByField(field)

  const onChange = (newValue) => {
    setFormValue({ field, value: newValue })
  }
  return (
    <StyledInput value={value} onChange={onChange} label={getCollectionLabelByKey(field)} />
  )
}
const AddCollectionPage = () => {
  const [, { resetForm }] = useCollectionFormAction()


  useEffect(() => {
    resetForm()
    return () => {
      resetForm()
    }
  }, [])

  return (
    <StyledMain>
      <ImageUploader />
      <Input fieldName={COLLECTION_FORM_FIELD.NAME.key} />
      <NumberInput fieldName={COLLECTION_FORM_FIELD.QUANTITY.key} />
    </StyledMain>
  )
}

export default AddCollectionPage