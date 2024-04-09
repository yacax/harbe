import React from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import HomePage from './components/pages/HomePage/HomePage';
import AboutPage from './components/pages/AboutPage/AboutPage';
import NotFoundPage from './components/pages/NotFoundPage/NotFoundPage';
import TemplatePage from './components/pages/TemplatesPage/TemplatesPage';
import Analytics from './utils/Analytics';

function App() {
  return (
    <BrowserRouter>
      <Analytics />
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/templates" element={<TemplatePage />} />
        <Route path="/about" element={<AboutPage />} />
        <Route path="*" element={<NotFoundPage />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
