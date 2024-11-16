import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import 'bootstrap/dist/css/bootstrap.min.css';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Home from './pages/Home';
import About from './pages/About';
import SignUp from './pages/SignUp';
import GamesPage from './pages/GamesPage';

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <Router>
      <Routes>
          <Route path='/' element={<Home />} />
          <Route path='/signup' element={<SignUp />} />
          <Route path='/games' element={<GamesPage />} />
      </Routes>
    </Router>
    
  </StrictMode>,
)
