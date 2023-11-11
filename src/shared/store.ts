import {create} from 'zustand';
interface DataProps {
  name: string;
  setName: (name: string) => void;
}

export const useDataStore = create<DataProps>(set => ({
  name: '',
  setName: name => set({name}),
}));
