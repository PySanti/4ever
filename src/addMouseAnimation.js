import { createNewParticle } from "./mouseAnimationDependencies/createNewParticle"
import { updateParticles } from './mouseAnimationDependencies/updateParticles';
import { renderParticles} from "./mouseAnimationDependencies/renderParticles"

export function addMouseAnimation(particlesList){
    setInterval(() => {
        if (particlesList.length !== 0){
            updateParticles(particlesList)
            renderParticles(particlesList)
        }
    }, 10)
    document.getElementsByTagName("html")[0].addEventListener("click", (e) => {
        for (let i = 0; (i < (20 - particlesList.length)); i++){
            let pos = [e.x,e.y]
            let newParticle = createNewParticle(pos)
            particlesList.push(newParticle)
        }
    })
}

