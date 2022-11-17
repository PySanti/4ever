import {  clickGiftEmoji, imgGiftClassName } from "../index";

export function setGiftAttrs({element, pos}){
    element.style.left = `${pos[0]}px`
    element.style.top =   `${pos[1]}px`
    element.innerHTML = clickGiftEmoji
    element.classList.add(imgGiftClassName)

}