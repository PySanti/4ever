import { generatePos} from "./generatePos"
import { lateralMsgClassName } from "../index"
import { createHtmlLateralMsg } from "./createHtmlLateralMsg"


export function addLateralMsgTimeout(msg, root){
    let msgPos      = generatePos({lateralMsg : true})
    let element     = createHtmlLateralMsg(lateralMsgClassName, msg, msgPos)
    let leftElement = msgPos[0] < 0 ? true:false;
    let msgTiming = msg.length*100 
    console.log(`Posicion del mensaje ${msgPos}`)
    setTimeout(() => {
        if (leftElement) {
            element.style.left = `1vw`
        } else {
            element.style.left = `80vw`
        }
        element.style.top = `${msgPos[1]}px`
        setTimeout(() => {
            if (leftElement){
                element.style.left = `-30vw`
            } else {
                element.style.left = `130vw`
            }
            setTimeout(() => {
                root.removeChild(element)
            }, 5000)
        }, msgTiming)
    }, 1000)
}