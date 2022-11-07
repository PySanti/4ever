import { nanoid } from "nanoid"
import { particlesClassName } from "./index"

export function generateParticleHtmlObject(){
    let newObject = document.createElement("div")
    newObject.id = nanoid()
    newObject.classList.add(particlesClassName)
    document.getElementsByTagName("body")[0].appendChild(newObject)
    return newObject.id
}