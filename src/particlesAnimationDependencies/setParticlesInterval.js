import { updateParticles } from './updateParticles';
import { renderParticles} from "./renderParticles"

export function setParticlesInterval({particlesList}){
    setInterval(() => {
        if (particlesList.length !== 0){
            updateParticles(particlesList)
            renderParticles(particlesList)
        }
    }, 10)
}