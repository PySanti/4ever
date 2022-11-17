import './index.css';
import "./particlesAnimationDependencies/particles.css"
import "./lateralMsgDependencies/lateralMsg.css"
import "./initialTitleDependencies/initialTitle.css"
import "./responsive.css"
import { addLateralMsgGenerator } from './mainAddFunctions/addLateralMsgGenerator';
import { addImgGiftGenerator } from './mainAddFunctions/addImgGiftGenerator';
import { setParticlesInterval } from './particlesAnimationDependencies/setParticlesInterval';
import { addInitialTitle } from './mainAddFunctions/addInitialTitle';

let particlesList = []
export const particlesClassName = "particle"
export const lateralMsgClassName = "lateral-msg"
export const imgGiftClassName = "img-gift"
export const imgClassName = "photo"
export const imgAnimationClassName = "photo-opened"
export const quitImgClassName = "photo-closed"
export const initialTitleClassName = "initial-title"
export const initialTitleAnimationClassName = 'initial-title-animation'
export const clickGiftEmoji ="🧡" 
export let counter = 0;


setParticlesInterval({particlesList : particlesList})
addLateralMsgGenerator()
addImgGiftGenerator({particleList : particlesList})
addInitialTitle("Felices 4 meses miamorcito :)")
