import React from 'react';
import ReactDOM from 'react-dom';
import AppRouter from './routes';
import './index.css';
import { BrowserRouter } from 'react-router-dom';

ReactDOM.render(
  <BrowserRouter>
   <React.StrictMode>
        <AppRouter/>
      </React.StrictMode>
  </BrowserRouter>,
   
      
  document.getElementById('root')
);



