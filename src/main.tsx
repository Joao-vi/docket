import React from 'react';
import ReactDOM from 'react-dom/client';

import App from './App';
import './global.css';
import { AppServicesProvider } from './features/common/services/app-services';

ReactDOM.createRoot(document.getElementById('root') as HTMLElement).render(
  <React.StrictMode>
    <AppServicesProvider>
      <App />
    </AppServicesProvider>
  </React.StrictMode>
);
