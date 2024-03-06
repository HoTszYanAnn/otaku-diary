import { staticGenerationAsyncStorage } from 'next/dist/client/components/static-generation-async-storage.external';
import { createStore, createHook } from 'react-sweet-state';

const Store = createStore({
  // value of the store on initialisation
  initialState: {
    isOpen: false,
    title: '',
    description: '',
    onConfirm: () => { },
    onCancel: () => { },
  },
  actions: {
    triggerConfirmPopup: ({ title, description, onConfirm, onCancel }) => async ({ setState }) => {
      setState({
        isOpen: true,
        title,
        description,
        onConfirm,
        onCancel,
      })
    },
    closePopup: () => async ({ setState }) => {
      setState({
        isOpen: false,
        title: '',
        description: '',
        onConfirm: () => { },
        onCancel: () => { },
      })
    },
  },
  // optional, unique, mostly used for easy debugging
  name: 'confirm-popup`',
});

export const usePopupAction = () => createHook(Store, {
  selector: () => undefined,
})();

export const usePopup = () => createHook(Store, {
  selector: (state) => state,
})();
