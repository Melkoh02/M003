import { useContext } from 'react';
import { StoreContext } from '../../main.tsx';

export const useStore = () => useContext(StoreContext);
