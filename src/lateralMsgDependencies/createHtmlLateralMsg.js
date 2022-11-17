export function createHtmlLateralMsg(className){
    let element = document.createElement("div")
    document.getElementById('root').appendChild(element)
    element.classList.add(className);

    return element
}