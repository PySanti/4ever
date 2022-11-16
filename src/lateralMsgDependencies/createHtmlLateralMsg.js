export function createHtmlLateralMsg(className, content){
    let element = document.createElement("div")
    element.classList.add(className);
    element.innerHTML = content 
    document.getElementById('root').appendChild(element)
    return element
}