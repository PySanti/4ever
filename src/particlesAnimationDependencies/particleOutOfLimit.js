export function particleOutOfLimit(pos, particleRect){
    let bodyElement = document.getElementsByTagName("body")[0]
    let bodyRect = bodyElement.getBoundingClientRect()
    return ((pos[0] > bodyRect.width || pos[1] > bodyRect.innerHeight || pos[0] < -particleRect.width || pos[1] < 0 - particleRect.height))
}