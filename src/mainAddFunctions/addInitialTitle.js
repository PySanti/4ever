import { initialTitleClassName } from "../index"
import { addInitialTitleAnimation } from "../initialTitleDependencies/addInitialTitleAnimation"

export function addInitialTitle(titleContent){
    let title = document.createElement("h1")
    title.innerHTML = titleContent
    title.classList.add(initialTitleClassName)
    document.getElementById("root").appendChild(title)
    setTimeout(() => {
        addInitialTitleAnimation()
    }, 1000)
}