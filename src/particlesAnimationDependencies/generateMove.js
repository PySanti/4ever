export function generateRandomMove(moveRange){
    return [(Math.random() - 0.5)/moveRange, (Math.random()  - 0.5)/10]
}