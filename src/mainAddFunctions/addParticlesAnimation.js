import { createNewParticle } from "../particlesAnimationDependencies/createNewParticle"

export function addParticlesAnimation({particlesList, eventPos}){
    for (let i = 0; (i < (40 - particlesList.length)); i++){
        let newParticle = createNewParticle(eventPos)
        particlesList.push(newParticle)
    }
}

