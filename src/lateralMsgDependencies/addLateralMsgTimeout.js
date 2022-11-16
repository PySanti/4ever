import { generatePos} from "./generatePos"
import { lateralMsgClassName } from "../index"
import { createHtmlLateralMsg } from "./createHtmlLateralMsg"
import { setLateralMsgPos } from "./setLateralMsgPos"


export function addLateralMsgTimeout(msg, root){
    let element     = createHtmlLateralMsg(lateralMsgClassName, msg)
    let elementRect = element.getBoundingClientRect()
    let msgPos      = generatePos({lateralMsg : true, lateralMsgSize : [elementRect.width, elementRect.height]})
    setLateralMsgPos(element, msgPos)
    let leftElement = msgPos[0] < 0 ? true:false;
    let msgTiming = msg.length*100 
    setTimeout(() => {
        if (leftElement) {
            element.style.left = `1vw`
        } else {
            element.style.left = `${window.innerWidth - elementRect.width}px`
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