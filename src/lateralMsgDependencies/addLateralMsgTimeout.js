import { generatePos} from "./generatePos"
import { lateralMsgClassName } from "../index"
import { createHtmlLateralMsg } from "./createHtmlLateralMsg"
import { setLateralMsg} from "./setLateralMsg"


export function addLateralMsgTimeout(msg, root, titleHeight){
    let element     = createHtmlLateralMsg(lateralMsgClassName)
    let elementRect = element.getBoundingClientRect()
    let msgPos      = generatePos({lateralMsg : true, lateralMsgSize : [elementRect.width, elementRect.height]})
    setLateralMsg(msg, element,msgPos)
    setTimeout(() => {
        element.style.left = `1vw`
        setTimeout(() => {
            element.style.left = `${-elementRect.width}px`
            setTimeout(() => {
                root.removeChild(element)
            }, 2000)
        }, 3000)//msg.length*100
    }, 1000)
}