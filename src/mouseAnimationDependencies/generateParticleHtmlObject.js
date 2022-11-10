import { nanoid } from "nanoid"
import { particlesClassName } from "../index"

export function generateParticleHtmlObject(){
    let newObject = document.createElement("div")
    newObject.innerHTML = "🧡"
    let id = nanoid()
    newObject.id = id
    newObject.classList.add(particlesClassName)
    document.getElementById("root").appendChild(newObject)
    return id
}