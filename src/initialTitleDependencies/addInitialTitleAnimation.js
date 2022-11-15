import { initialTitleAnimationClassName, initialTitleClassName } from "..";

export function addInitialTitleAnimation(){
    document.getElementsByClassName(initialTitleClassName)[0].classList.add(initialTitleAnimationClassName)
}