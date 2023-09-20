import React from 'react'
import ReactDOM from 'react-dom/client'
import { Index } from './Index'
import './global.css';
import { BrowserRouter, Router } from 'react-router-dom';
import { AppRoutes } from './router/AppRoutes';

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <BrowserRouter >
      <AppRoutes />
    </BrowserRouter>
  </React.StrictMode>,
)
