import { createNewParticle } from "./mouseAnimationDependencies/createNewParticle"

export function addMouseAnimation(particlesList){
    document.getElementsByTagName("html")[0].addEventListener("mousemove", (e) => {
        particlesList.push(createNewParticle([e.clientX,e.clientY]))
        console.log(particlesList.length)
    })
}
