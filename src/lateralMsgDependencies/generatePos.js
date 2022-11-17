import { initialTitleClassName } from "..";
import { generateRandomNumber } from "../globalFunctions/generateRandom";

export function generatePos({lateralMsg = false, lateralMsgSize = null}){
    let pos = [0,0]
    if (lateralMsg){
        let titleHeight = document.getElementsByClassName(initialTitleClassName)[0].getBoundingClientRect().height
        pos[0] = -lateralMsgSize[0];
        pos[1] = generateRandomNumber(titleHeight + (window.innerHeight*0,3), window.innerHeight - lateralMsgSize[1])
    } else{
        let generationRangeX  = [60, 80] 
        let generationRangeY = [30, 70] 
        pos[0] = generateRandomNumber((window.innerWidth*generationRangeX[0]/100), (window.innerWidth*generationRangeX[1]/100))
        pos[1] = generateRandomNumber((window.innerHeight*generationRangeY[0]/100), (window.innerHeight*generationRangeY[1]/100))
    }
    return pos;
}

