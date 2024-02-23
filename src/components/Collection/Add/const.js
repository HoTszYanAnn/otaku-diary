export const COLLECTION_FORM_FIELD = {
  'ID': {
    key: 'id',              // uuid
  },
  'NAME': {
    key: 'name',            // string
    label: 'バッジ',
  },
  'IMAGE': {
    key: 'image',           // url
  },
  'QUANTITY': {
    key: 'quantity',        // number
    label: '数量',
  },
  'TAG': {
    key: 'tag',            // string array
    label: 'タグ',
  },
}

export const getCollectionLabelByKey = (key) => Object.values(COLLECTION_FORM_FIELD)?.find((i) => i.key === key)?.label
