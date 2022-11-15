import {quitImgClassName } from "..";

export function addRemovingImgFunction(photo){
    photo.addEventListener("click", () => {
        photo.classList.add(quitImgClassName)
        setTimeout(() => {
            document.getElementById('root').removeChild(photo)
        }, 3000)
    })
}