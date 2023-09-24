import React from 'react'
import ReactDOM from 'react-dom/client'
import 'bootstrap/dist/css/bootstrap.min.css';
import App from './App.jsx'
import './index.css'
import { BrowserRouter } from "react-router-dom";
import ReactGA from "react-ga4";

ReactGA.initialize("G-66W15M5JSW");

ReactDOM.createRoot(document.getElementById('root')).render(

  <React.StrictMode>
  <BrowserRouter>
    <App />
  </BrowserRouter>
  </React.StrictMode>,

)



