import {create} from 'zustand';

interface DataProps {
  name: string;
  setName: (name: string) => void;
}

export const useDataStore = create<DataProps>(set => ({
  name: '',
  setName: name => set({name}),
}));

interface WidgetProps {
  nowModal: string;
  setModal: (nowModal: string) => void;
  closeModal: () => void;
}

export const useWidgetStore = create<WidgetProps>(set => ({
  nowModal: '',
  setModal: nowModal => set({nowModal}),
  closeModal: () => set({nowModal: ''}),
}));
