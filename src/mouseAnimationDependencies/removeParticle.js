export function removeParticle(particle, particleList, particleIndex){
    let deleteParticle = particleList.splice(particleIndex,1)[0] 
    console.log(`Eliminando ${deleteParticle.elementID}`)
    let element = document.getElementById(particle.elementID)
    if (deleteParticle.elementID === particle.elementID){
        document.getElementById("root").removeChild(element)
    } else {
        throw Error("Error no se esta elminando el elemento que se desea")
    }
}