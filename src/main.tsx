import React, { createContext, StrictMode } from 'react';
import { createRoot } from 'react-dom/client';

import './index.css';
import App from './pages/App';
import rootStore from './lib/stores/rootStore.ts';

export const StoreContext = createContext(rootStore);

createRoot(document.getElementById('root')!).render(
  <StrictMode>
    <StoreContext.Provider value={rootStore}>
      <App />
    </StoreContext.Provider>
  </StrictMode>,
);
