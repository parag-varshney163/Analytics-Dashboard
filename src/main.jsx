// import { StrictMode } from 'react'
// import { createRoot } from 'react-dom/client'
// import './index.css'
// import App from './App.jsx'
// createRoot(document.getElementById('root')).render(
//   <StrictMode>
//     <App />
//   </StrictMode>,
// )
import './index.css';

import { createRoot } from 'react-dom/client';
import { StrictMode } from 'react';
import React from 'react';

import { QCPageProvider } from './components/ui/QcPageContext.jsx';
import App from './App.jsx';


createRoot(document.getElementById('root')).render(
  <StrictMode>
    <div className='text-sm'>
      <QCPageProvider>
        <App />
      </QCPageProvider>
    
    </div>
  </StrictMode>,
)
