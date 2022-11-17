import { generatePos} from "./generatePos"
import { lateralMsgClassName } from "../index"
import { createHtmlLateralMsg } from "./createHtmlLateralMsg"
import { setLateralMsg} from "./setLateralMsg"


export function addLateralMsgTimeout(msg, root, titleHeight){
    let element     = createHtmlLateralMsg(lateralMsgClassName)
    let elementRect = element.getBoundingClientRect()
    let msgPos      = generatePos({lateralMsg : true, lateralMsgSize : [elementRect.width, elementRect.height]})
    let leftElement = msgPos[0] < 0;
    setLateralMsg(msg, element,msgPos)
    setTimeout(() => {
        if (leftElement) {
            element.style.left = `1vw`
        } else {
            element.style.left = `${window.innerWidth - elementRect.width}px`
        }
        setTimeout(() => {
            if (leftElement){
                element.style.left = `${-elementRect.width}px`
            } else {
                element.style.left = `${window.innerWidth + elementRect.width}px`
            }
            setTimeout(() => {
                root.removeChild(element)
            }, 2000)
        }, 3000)//msg.length*100
    }, 1000)
}