"use strict";
import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import { addMouseAnimation } from './addMouseAnimation';
import { updateParticles } from './updateParticles';

const root = ReactDOM.createRoot(document.getElementById('root'));
const particlesList = []
export const particlesClassName = "particle"

addMouseAnimation(particlesList)


root.render(
  <React.StrictMode>

  </React.StrictMode>
);

setInterval(() => {
  updateParticles(particlesList)
  
}, 10)
