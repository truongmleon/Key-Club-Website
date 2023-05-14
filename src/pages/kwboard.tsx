import React from 'react';
import ReactDOM from 'react-dom/client';
import Navbar from '../components/Navbar';
import Board from '../components/Board';
import { useState } from 'react';

ReactDOM.createRoot(document.getElementById('board') as HTMLElement).render(
  <React.StrictMode>
    <Navbar />
    <Board />
  </React.StrictMode>
);