import {  imgClassName } from "../index";
import { generateRandomIndex } from "../lateralMsgDependencies/generateRandomIndex";
import { addRemovingImgFunction } from "./addRemovingImgFunction";

const imgsMaxCount = 212

export function setImgAttrs({img, pos}){
    let photo = generateRandomIndex(imgsMaxCount)
    img.src = `http://localhost:3000//imgs/${photo}.jpg` 
    img.classList.add(imgClassName)
    img.style.left =  `calc(${pos[0]}px - ${(window.innerWidth*30)/170}px)`
    img.style.top =  `calc(${pos[1]}px - ${(window.innerHeight*30)/220}px)`
    addRemovingImgFunction(img)
}