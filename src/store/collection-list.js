import { COLLECTION_FORM_FIELD } from '@/components/Collection/Add/const';
import axios from 'axios';
import { isInteger, cloneDeep } from 'lodash';
import { createStore, createHook } from 'react-sweet-state';
import { v4 as uuidv4 } from 'uuid';

const Store = createStore({
  // value of the store on initialisation
  initialState: {
    list: [],
    editList: {},
  },
  actions: {
    fetchCollectionFullListFromBE: () => async ({ setState, getState }) => {
      const draft = getState()
      const timestamp = Date.parse(new Date().toString())
      const response = await axios.get(`/api/collection/list?tid=${timestamp}`)
      if (response?.status === 200 && response?.data?.list) {
        setState({
          ...draft,
          list: response?.data?.list
        })
      }
    },
    onChangeQuantity: ({ id, quantity }) => ({ getState, setState }) => {
      try {
        const draft = getState()
        const list = getState()?.list
        const editList = cloneDeep(getState()?.editList)
        const target = list.find(i => i.id === id)
        if (!target) throw Error('Exception Error No target ID find')
        if (quantity === target.quantity) {
          // delete
          delete editList?.[id]
        } else {
          editList[id] = quantity
        }
        setState({ ...draft, editList })
      } catch (e) {
      }
    },
    onDeleteItem: ({ id }) => ({ getState, setState }) => {
      const draft = getState()
      const editList = cloneDeep(getState()?.editList)
      editList[id] = -1
      setState({ ...draft, editList })
    },
    updateCollectionQuantityToBE: () => async ({ getState }) => {
      try {
        const editList = getState()?.editList
        const list = getState()?.list
        const batchUpdateList = Object.keys(editList)?.map((id) => {
          const target = list.find(i => i.id === id)
          const index = list.findIndex(i => i.id === id)
          if (!target || index === -1) throw Error('Exception Error No target ID/index find')
          target.index = index
          if (editList[id] === -1) {
            target.action = 'DELETE'
          } else {
            target.action = 'UPDATE_QUANTITY'
            target.quantity = editList[id]
          }
          return target
        })
        const res = await axios.post(`/api/collection/batch-update`, { batchUpdateList });
        if (res?.status === 200) {
          return {
            ok: true
          }
        } else {
          throw Error(`API POST ERROR: ${res.message}`)
        }
      } catch (e) {
        return {
          ok: false,
          message: e.message
        }
      }
    },
    resetCollectionEditList: () => ({ setState }) => {
      setState({ editList: {} })
    }
  },
  // optional, unique, mostly used for easy debugging
  name: 'collection-list',
});

// export const useCollectionList = createHook(Store);

export const useTest = createHook(Store, {
  selector: _ => _,
});

export const useCollectionListAction = () => createHook(Store, {
  selector: () => undefined,
})();

export const useCollectionList = () => createHook(Store, {
  selector: (state) => state?.list,
})();

export const useCollectionItemQuantityById = (id) => createHook(Store, {
  selector: (state) => {
    return state?.editList?.[id]
  },
})();