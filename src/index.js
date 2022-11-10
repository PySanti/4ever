"use strict";
import './index.css';
import { addMouseAnimation } from './addMouseAnimation';
import { updateParticles } from './mouseAnimationDependencies/updateParticles';
import { renderParticles} from "./mouseAnimationDependencies/renderParticles"
import "./particles.css"

let particlesList = []
export const particlesClassName = "particle"
export let counter = 0;

addMouseAnimation(particlesList)

setInterval(() => {
  updateParticles(particlesList)
  renderParticles(particlesList)
}, 10)
