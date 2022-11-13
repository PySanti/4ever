export function createHtmlLateralMsg(className, content, msgPos){
    let element = document.createElement("div")
    element.classList.add(className);
    element.innerHTML = content 
    element.style.left = `${msgPos[0]}px`
    element.style.top = `${msgPos[1]}px`
    document.getElementById('root').appendChild(element)
    return element
}