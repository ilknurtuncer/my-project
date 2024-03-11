/* eslint-disable no-unused-vars */
import React from 'react';
import { Routes, Route } from 'react-router-dom';
import Cards from '../pages/Cards';
import Forms from '../pages/Forms';
import App from './App';

const AppRouter = () => {
  return (
    <Routes>
      <Route path="/" element={<App />} />
      <Route path="/forms" element={<Forms />} />
      <Route path="/cards" element={<Cards />} />
    </Routes>
  );
};

export default AppRouter;
