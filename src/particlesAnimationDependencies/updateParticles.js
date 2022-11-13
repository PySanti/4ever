import { particleOutOfLimit } from "./particleOutOfLimit";
import { removeParticle } from "./removeParticle";

export function updateParticles(particlesList){
    let particlesCop = [...particlesList]
    let particle = undefined;
    for (let i = 0; i < particlesCop.length ; i++){
        particle = particlesCop[i]
        particle.update()
        let particleRect = document.getElementById(particle.elementID).getBoundingClientRect()
        if (particleOutOfLimit(particle.pos, particleRect)){
            removeParticle(particle, particlesList)
        }
    }
}