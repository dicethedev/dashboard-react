import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './App';

import { DarkModeContextProvider } from './context/darkModeContext';
import { AuthContextProvider } from './context/AuthContext';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    {/* add this Context funtion for darkmode functionality */}
    <DarkModeContextProvider>
      <AuthContextProvider>
    <App />
    </AuthContextProvider>
    </DarkModeContextProvider>
  </React.StrictMode>
);
