export function updateParticles(particlesList){
    let particlesCop = [...particlesList]
    let i = 0;
    particlesCop.forEach(particle => {
        particle.update()
        if (particle.size <= 0){
            particlesList.pop(i)
            console.log(particle.elementID)
            let element = document.getElementById(particle.elementID)
            document.getElementsByTagName("html")[0].removeChild(element)
        }
        i += 1;
    });
}