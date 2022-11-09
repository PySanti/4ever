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
  console.log(particlesList.length)
  updateParticles(particlesList)
  let i = 0 
  particlesList.forEach((particle) => {
    console.log(`${i} -> ${particle.elementID}`)
    i++;
  })
  renderParticles(particlesList)
}, 10)
