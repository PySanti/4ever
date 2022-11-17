import { initialTitleClassName } from "..";
import { generateRandomNumber } from "../globalFunctions/generateRandom";

export function generatePos({lateralMsg = false, lateralMsgSize = null}){
    let pos = [0,0]
    if (lateralMsg){
        let random = generateRandomNumber(0,100)
        let titleHeight = document.getElementsByClassName(initialTitleClassName)[0].getBoundingClientRect().height
        if (window.innerWidth <= 800){
            pos[0] = -lateralMsgSize[0];
        } else {
            pos[0] = (random > 50)? window.innerWidth + lateralMsgSize[0] : -lateralMsgSize[0];
        }
        pos[1] = generateRandomNumber(titleHeight + (window.innerHeight*0,2), window.innerHeight - lateralMsgSize[1])
    } else{
        let generationRange = [20,80]
        pos[0] = generateRandomNumber((window.innerWidth*generationRange[0]/100), (window.innerWidth*generationRange[1]/100))
        pos[1] = generateRandomNumber((window.innerHeight*generationRange[0]/100), (window.innerHeight*generationRange[1]/100))
    }
    return pos;
}

