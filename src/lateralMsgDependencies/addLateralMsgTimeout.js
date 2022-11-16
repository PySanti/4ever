import { generatePos} from "./generatePos"
import { lateralMsgClassName } from "../index"
import { createHtmlLateralMsg } from "./createHtmlLateralMsg"


export function addLateralMsgTimeout(msg, root){
    let msgPos      = generatePos({lateralMsg : true})
    let element     = createHtmlLateralMsg(lateralMsgClassName, msg, msgPos)
    let leftElement = msgPos[0] < 0 ? true:false;
    let msgTiming = msg.length*100 
    setTimeout(() => {
        element.style.top = `${msgPos[1]}px`
        if (leftElement) {
            element.style.left = `1vw`
        } else {
            if (window.innerWidth <= 500){
                element.style.left = `60vw`
            } else {
                element.style.left = `80vw`
            }
        }
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