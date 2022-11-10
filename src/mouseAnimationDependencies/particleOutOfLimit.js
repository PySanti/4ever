export function particleOutOfLimit(pos){
    return ((pos[0] > window.innerWidth || pos[1] > window.innerHeight || pos[0] < 0 || pos[1] < 0))
}