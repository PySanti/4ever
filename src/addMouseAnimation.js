import { createNewParticle } from "./mouseAnimationDependencies/createNewParticle"

export function addMouseAnimation(particlesList){
    document.getElementsByTagName("html")[0].addEventListener("click", (e) => {
        for (let i = 0; i < 10; i++){
            let pos = [e.x,e.y]
            let newParticle = createNewParticle(pos)
            particlesList.push(newParticle)
        }
    })
}
