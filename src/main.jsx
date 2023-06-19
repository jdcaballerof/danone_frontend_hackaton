import React from 'react'
import ReactDOM from 'react-dom/client'
import './styles/index.css'
//theme
import "primereact/resources/themes/lara-light-indigo/theme.css";     
//core
import "primereact/resources/primereact.min.css";
// Icons
import 'primeicons/primeicons.css';
// PrimeFelx
import '/node_modules/primeflex/primeflex.css';
        

import { BrowserRouter } from "react-router-dom";
import { Router } from './router/Router.jsx';



ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <BrowserRouter>
      <Router />
    </BrowserRouter>
  </React.StrictMode>,
)
