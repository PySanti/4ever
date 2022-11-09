import { removeParticle } from "./removeParticle";

export function updateParticles(particlesList){
    let particlesCop = [...particlesList]
    let particle = undefined;
    console.log(particlesList)
    for (let i = 0; i < particlesCop.length ; i++){
        particle = particlesCop[i]
        particle.update()
        if ((particle.size <= 0)){
            console.log(`Eliminando ${particle.elementID} por size`)
            removeParticle(particle, particlesList, particlesList.indexOf(particle))
        }  else if ((particle.pos[0] > window.innerWidth || particle.pos[1] > window.innerHeight)){
            removeParticle(particle, particlesList, particlesList.indexOf(particle) )
            console.log(`Eliminando ${particle.elementID} por posicion`)
        }
    }
    console.log(particlesList)
}