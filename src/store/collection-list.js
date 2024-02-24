import { COLLECTION_FORM_FIELD } from '@/components/Collection/Add/const';
import axios from 'axios';
import { isInteger, cloneDeep } from 'lodash';
import { createStore, createHook } from 'react-sweet-state';
import { v4 as uuidv4 } from 'uuid';

const Store = createStore({
  // value of the store on initialisation
  initialState: {
    list: [],
    editList: {}
  },
  actions: {
    fetchCollectionFullListFromBE: () => async ({ setState, getState }) => {
      const draft = getState()
      const response = await axios.get(`/api/collection/list`);
      if (response?.status === 200 && response?.data) {
        setState({
          ...draft,
          list: response?.data
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
        alert(e)
      }

    },
    updateCollectionQuantityToBE: () => async ({ }) => {

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