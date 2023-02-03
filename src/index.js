import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';

// Pages
import HomePage from './Pages/HomePage';
import CoachesPage from './Pages/CoachesPage'
import PlayersPage from './Pages/PlayersPage';
import TeamsPage from './Pages/TeamsPage';
import CourtsPage from './Pages/CourtsPage';
import EquipmentsPage from './Pages/EquipmentsPage';
import TournamentsPage from './Pages/TournamentsPage';
import AboutPage from './Pages/AboutPage';
import RegisterPage from './Pages/RegisterPage';

// Header
import Header from './components/Header/Header';

import reportWebVitals from './reportWebVitals';

// Routing
import {
  BrowserRouter,
  Routes,
  Route,
} from "react-router-dom";

// DOM
const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <BrowserRouter>
        <Header />
        <Routes>
          <Route path="/" element={<HomePage />} />
          <Route path="sports-club/" element={<HomePage />} />
          <Route path="sports-club/home" element={<HomePage />} />
          <Route path="sports-club/coaches" element={<CoachesPage />} />
          <Route path="sports-club/players" element={<PlayersPage />} /> 
          <Route path="sports-club/teams" element={<TeamsPage />} />
          <Route path="sports-club/courts" element={<CourtsPage />} /> 
          <Route path="sports-club/equipments" element={<EquipmentsPage />} /> 
          <Route path="sports-club/tournaments" element={<TournamentsPage />} />   
          <Route path="sports-club/about" element={<AboutPage />} />      
          <Route path="sports-club/register" element={<RegisterPage />} /> 
                 
        </Routes>
    </BrowserRouter>
  </React.StrictMode>
);

reportWebVitals();
