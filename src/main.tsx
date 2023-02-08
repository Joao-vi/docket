import React from 'react';
import ReactDOM from 'react-dom/client';

import App from './App';
import './global.css';
import { AppServicesProvider } from './features/common/services/app-services';
import { CustomQueryClientProvider } from './features/common/lib/react-query';

ReactDOM.createRoot(document.getElementById('root') as HTMLElement).render(
  <React.StrictMode>
    <CustomQueryClientProvider>
      <AppServicesProvider>
        <App />
      </AppServicesProvider>
    </CustomQueryClientProvider>
  </React.StrictMode>
);
