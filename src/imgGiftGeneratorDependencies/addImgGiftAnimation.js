import { imgAnimationClassName } from "../index";
import { addParticlesAnimation } from "../mainAddFunctions/addParticlesAnimation";

import { addRemovingGiftAnimation } from "./addRemovingGiftAnimation";

export function addImgGiftAnimation({particlesList, gift, container, img}){
    gift.addEventListener("click", (e) => {
        img.classList.add(imgAnimationClassName)
        addRemovingGiftAnimation({gift : gift, container : container})
        addParticlesAnimation({particlesList : particlesList, eventPos : [e.x,e.y]})
    })
}