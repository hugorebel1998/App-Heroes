import React from 'react'
import ReactDOM from 'react-dom/client'
import { BrowserRouter } from "react-router-dom";
import 'animate.css';
 
import './styles.css'
import { HeroresApp } from './HeroresApp'


ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <BrowserRouter>
      <HeroresApp />
    </BrowserRouter>
  </React.StrictMode>
)
