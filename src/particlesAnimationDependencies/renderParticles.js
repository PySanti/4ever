export function renderParticles(particlesList){
    particlesList.forEach(particle => {
        particle.render()
    });
}