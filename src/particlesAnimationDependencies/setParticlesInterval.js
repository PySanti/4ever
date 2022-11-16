import { updateParticles } from './updateParticles';
import { renderParticles} from "./renderParticles"

export function setParticlesInterval({particlesList}){
    let updateTimer = window.innerWidth > 500? 10 : 50;
    setInterval(() => {
        if (particlesList.length !== 0){
            updateParticles(particlesList)
            renderParticles(particlesList)
        }
    }, updateTimer)
}