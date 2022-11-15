import { initialTitleClassName } from "../index"
import { addInitialTitleAnimation } from "../initialTitleDependencies/addInitialTitleAnimation"

export function addInitialTitle(titleContent){
    let title = document.createElement("h1")
    title.innerHTML = titleContent
    title.classList.add(initialTitleClassName)
    document.getElementById("root").appendChild(title)
    console.log("Agregando animacion al intial title")
    setTimeout(() => {
        console.log("Agregando animacion al intial title")
        addInitialTitleAnimation()
    }, 1000)
}