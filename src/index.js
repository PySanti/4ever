"use strict";
import './index.css';
import "./particlesAnimationDependencies/particles.css"
import "./lateralMsgDependencies/lateralMsg.css"
import { addLateralMsgGenerator } from './addLateralMsgGenerator';
import { addImgGiftGenerator } from './addImgGiftGenerator';
import { setParticlesInterval } from './particlesAnimationDependencies/setParticlesInterval';

let particlesList = []
export const particlesClassName = "particle"
export const lateralMsgClassName = "lateral-msg"
export const imgGiftClassName = "img-gift"
export const imgClassName = "photo"
export const imgAnimationClassName = "photo-opened"
export let counter = 0;


setParticlesInterval({particlesList : particlesList})
addLateralMsgGenerator()
addImgGiftGenerator({particleList : particlesList})
