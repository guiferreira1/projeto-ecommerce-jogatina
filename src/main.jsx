import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import 'bootstrap/dist/css/bootstrap.min.css';
import { router } from './routes/RoutesConfig';
import {RouterProvider} from 'react-router-dom'

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <RouterProvider router={router} />
    
  </StrictMode>,
)
