import { StrictMode } from 'react';
import { createRoot } from 'react-dom/client';

import App from './App.jsx';
import classes from './';

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <App />
  </StrictMode>
);