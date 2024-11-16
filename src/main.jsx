import React from 'react';
import { createRoot } from 'react-dom/client'
import './index.css'
import 'bootstrap/dist/css/bootstrap.min.css';
import { router } from './routes/RoutesConfig';
import {RouterProvider} from 'react-router-dom'

createRoot(document.getElementById('root')).render(
  <React.StrictMode>

    <RouterProvider router={router} />
    
  </React.StrictMode>,
)
