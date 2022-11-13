import { generatePos } from "../lateralMsgDependencies/generatePos";
import "./imgGift.css"
import { addImgGiftAnimation } from "./addImgGiftAnimation";
import { setGiftAttrs } from "./setGiftAttrs";
import { setImgAttrs } from "./setImgAttrs";

export function addImgGift({root, particlesList}){
    let pos = generatePos({lateralMsg : false})
    let element = document.createElement("div")
    let img = document.createElement("img")
    setGiftAttrs({element : element, pos : pos})
    setImgAttrs({img : img, pos : pos})
    root.appendChild(img)
    root.appendChild(element)
    addImgGiftAnimation({particlesList : particlesList, gift : element, container : root, img : img})
}