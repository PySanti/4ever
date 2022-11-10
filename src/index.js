"use strict";
import './index.css';
import { addMouseAnimation } from './addMouseAnimation';
import { updateParticles } from './mouseAnimationDependencies/updateParticles';
import { renderParticles} from "./mouseAnimationDependencies/renderParticles"
import "./particles.css"
import { createRoot } from 'react-dom/client';

let particlesList = []
let root = createRoot(document.getElementById('root'))
export const particlesClassName = "particle"
export let counter = 0;

root.render(

)

addMouseAnimation(particlesList)
setInterval(() => {
  updateParticles(particlesList)
  renderParticles(particlesList)
}, 10)
