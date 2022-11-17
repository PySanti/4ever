import { initialTitleClassName } from "..";
import { generateRandomNumber } from "../globalFunctions/generateRandom";
import { isAndroid } from "../globalFunctions/isAndroid";
import { isIos } from "../globalFunctions/isIos";

export function generatePos({lateralMsg = false, lateralMsgSize = null}){
    let pos = [0,0]
    if (lateralMsg){
        let random = generateRandomNumber(0,100)
        let titleHeight = document.getElementsByClassName(initialTitleClassName)[0].getBoundingClientRect().height
        if (isAndroid() || isIos()){
            pos[0] = -lateralMsgSize[0];
        } else {
            pos[0] = (random > 50)? window.innerWidth + lateralMsgSize[0] : -lateralMsgSize[0];
        }
        pos[1] = generateRandomNumber(titleHeight + (window.innerHeight*0,3), window.innerHeight - lateralMsgSize[1])
    } else{
        let generationRangeX = isAndroid() || isIos() ? [50, 80] : [40, 60]
        let generationRangeY = [30, 70] 
        pos[0] = generateRandomNumber((window.innerWidth*generationRangeX[0]/100), (window.innerWidth*generationRangeX[1]/100))
        pos[1] = generateRandomNumber((window.innerHeight*generationRangeY[0]/100), (window.innerHeight*generationRangeY[1]/100))
    }
    return pos;
}

