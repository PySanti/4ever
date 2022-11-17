export function setLateralMsg(msg, element, pos){
    element.style.left = `${pos[0]}px`
    element.style.top = `${pos[1]}px`
    element.innerHTML = msg 
}