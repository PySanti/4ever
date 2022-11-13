"use strict";
import './index.css';
import "./mouseAnimationDependencies/particles.css"
import "./lateralMsgDependencies/lateralMsg.css"
import { addMouseAnimation } from './addMouseAnimation';
import { addLateralMsgGenerator } from './addLateralMsgGenerator';

let particlesList = []
export const particlesClassName = "particle"
export const lateralMsgClassName = "lateral-msg"
export let counter = 0;

addMouseAnimation(particlesList)
addLateralMsgGenerator()
