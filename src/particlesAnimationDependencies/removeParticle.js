export function removeParticle(particle, particleList){
    let deleteParticle = particleList.splice(particleList.indexOf(particle),1)[0] 
    let element = document.getElementById(particle.elementID)
    if (deleteParticle.elementID === particle.elementID){
        document.getElementById("root").removeChild(element)
    } else {

        throw Error("Error no se esta elminando el elemento que se desea")
    }
}