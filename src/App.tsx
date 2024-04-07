import React from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import HomePage from './components/pages/HomePage/HomePage';
import AboutPage from './components/pages/AboutPage/AboutPage';
import NotFoundPage from './components/pages/NotFoundPage/NotFoundPage';
import { SEO_OPTIONS } from './utils/config';
import { useEffect } from 'react';
import ReactGA from 'react-ga';

function App() {
  useEffect(() => {
    ReactGA.initialize(SEO_OPTIONS.GOOGLE_ANALYTICS_ID);
    ReactGA.pageview(window.location.pathname + window.location.search);
  }, []);
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/about" element={<AboutPage />} />
        <Route path="*" element={<NotFoundPage />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
