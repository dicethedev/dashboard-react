import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './App';

import { DarkModeContextProvider } from './context/darkModeContext';


const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    {/* add this Context funtion for darkmode functionality */}
    <DarkModeContextProvider>
    <App />
    </DarkModeContextProvider>
  </React.StrictMode>
);
