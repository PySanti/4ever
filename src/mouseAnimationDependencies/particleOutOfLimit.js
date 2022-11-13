export function particleOutOfLimit(pos, particleRect){
    return ((pos[0] > window.innerWidth || pos[1] > window.innerHeight || pos[0] < 0-particleRect.width || pos[1] < 0 - particleRect.height))
}