import { Loader } from './components/Loader';

import './App.scss';

import { Routes, Route, Navigate, NavLink } from 'react-router-dom';
import { HomePage } from './components/Loader/HomePage';
import { PeoplePage } from './components/Loader/PeoplePage';
import { NotFoundPage } from './components/Loader/NotFoundPage';
import { Navbar } from './components/Loader/Navbar';
import { PersonDetailsPage } from './components/PersonDetailsPage';

export const App = () => (
  <div data-cy="app">
    <Navbar />

    <main className="section">
      <div className="container">
        <Routes>
          <Route path="/" element={<HomePage />} />
          <Route path="home" element={<Navigate to="/" replace />} />
          <Route path="/people" element={<PeoplePage />} />
          <Route path="/people/:personSlug" element={<PeoplePage />} />
          <Route path="*" element={<NotFoundPage />} />
        </Routes>
      </div>
    </main>
  </div>
);
