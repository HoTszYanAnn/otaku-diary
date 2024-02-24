import { COLLECTION_FORM_FIELD } from '@/components/Collection/Add/const';
import axios from 'axios';
import { isInteger } from 'lodash';
import { createStore, createHook } from 'react-sweet-state';
import { v4 as uuidv4 } from 'uuid';

const Store = createStore({
  // value of the store on initialisation
  initialState: {
    [COLLECTION_FORM_FIELD.ID.key]: undefined,
    [COLLECTION_FORM_FIELD.NAME.key]: undefined,
    [COLLECTION_FORM_FIELD.QUANTITY.key]: 1,
    [COLLECTION_FORM_FIELD.IMAGE.key]: undefined,
  },
  actions: {
    setFormValue: ({ field, value }) => ({ setState, getState }) => {
      const draft = getState()
      setState({
        ...draft,
        [field]: value
      })
    },
    resetForm: () => ({ setState, getState }) => {
      setState({
        [COLLECTION_FORM_FIELD.ID.key]: uuidv4(),
        [COLLECTION_FORM_FIELD.NAME.key]: undefined,
        [COLLECTION_FORM_FIELD.QUANTITY.key]: 1,
        [COLLECTION_FORM_FIELD.IMAGE.key]: undefined,
      })
    },
    addCollectionToBE: () => async ({ getState }) => {
      try {
        const form = getState()
        console.log(form, !form?.[COLLECTION_FORM_FIELD.ID.key])
        if (!form?.[COLLECTION_FORM_FIELD.ID.key]) throw Error('ID Undefined')
        if (!form?.[COLLECTION_FORM_FIELD.NAME.key]) throw Error('NAME Undefined')
        if (!form?.[COLLECTION_FORM_FIELD.QUANTITY.key]) throw Error('QUANTITY Undefined')
        if (!form?.[COLLECTION_FORM_FIELD.IMAGE.key]) throw Error('IMAGE Undefined')
        if (!isInteger(form?.[COLLECTION_FORM_FIELD.QUANTITY.key])) throw Error('QUANTITY Not INTEGER')

        await axios.post('/api/collection/push', form)
        return {
          ok: true
        }
      } catch (e) {
        return {
          ok: false,
          message: e
        }
      }
    },
  },
  // optional, unique, mostly used for easy debugging
  name: 'add-collection-form',
});

export const useCollectionForm = createHook(Store);

export const useCollectionFormAction = createHook(Store, {
  selector: () => { },
});

export const useCollectionFormByField = (field) => createHook(Store, {
  selector: (state) => state?.[field],
})();