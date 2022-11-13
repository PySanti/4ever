import {  imgClassName } from "../index";

export function setImgAttrs({img, pos}){
    img.src = "http://localhost:3000//imgs/IMG-20221006-WA0074.jpg"
    img.classList.add(imgClassName)
    img.style.left =  `calc(${pos[0]}px - ${(window.innerWidth*30)/200}px)`
    img.style.top =  `calc(${pos[1]}px - ${(window.innerHeight*30)/200}px)`
}