import React, { StrictMode } from 'react';
import { createRoot } from 'react-dom/client';
import { BrowserRouter as Router, Routes, Route, Link } from 'react-router-dom';

import App from './App';

const rootElement = document.getElementById('root');
const root = createRoot(rootElement);

root.render(
  <StrictMode>
    <Router>
      <App />
      <Routes>
        <Route exact path="/" element={<App />} />
        <Route exact path="/profile" element={<Resume />} />
      </Routes>
    </Router>
  </StrictMode>
);
