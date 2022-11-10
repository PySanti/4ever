import { particleOutOfLimit } from "./particleOutOfLimit";
import { removeParticle } from "./removeParticle";

export function updateParticles(particlesList){
    let particlesCop = [...particlesList]
    let particle = undefined;
    for (let i = 0; i < particlesCop.length ; i++){
        particle = particlesCop[i]
        particle.update()
        if (particleOutOfLimit(particle.pos)){
            removeParticle(particle, particlesList)
        }
    }
}