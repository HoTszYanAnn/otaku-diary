"use client"
import StyledImageUploader from "@/components/Collection/Add/ImageUploader"
import StyledInput from "@/components/Collection/Add/Input"
import StyledNumberInput from "@/components/Collection/Add/NumberInput"
import { COLLECTION_FORM_FIELD, getCollectionLabelByKey } from "@/components/Collection/Add/const"
import { StyledMain } from "@/components/Collection/Add/styled"
import { useCollectionFormAction, useCollectionFormByField } from "@/store/add-collection"
import { toInteger } from "lodash"
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
  const onChange = (value) => {
    setFormValue({ field, value: value })
  }

  return (
    <StyledInput value={value} onChange={onChange} label={getCollectionLabelByKey(field)} />
  )
}


const NumberInput = ({ field }) => {
  const [value, { setFormValue }] = useCollectionFormByField(field)
  const onChange = (value) => {
    setFormValue({ field, value: toInteger(value) ?? 0 })
  }

  return (
    <StyledNumberInput value={value} onChange={onChange} label={getCollectionLabelByKey(field)} />
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
      <Input field={COLLECTION_FORM_FIELD.NAME.key} />
      <NumberInput field={COLLECTION_FORM_FIELD.QUANTITY.key} />
    </StyledMain>
  )
}

export default AddCollectionPage