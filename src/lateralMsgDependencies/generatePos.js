export function generatePos(){
    let pos = [0,0]
    let random = Math.random()*100 
    pos[0] = (random > 50)? window.innerWidth + 200 : -1000;
    pos[1] = Math.floor(Math.random()*(window.innerHeight - 200)) + 100
    return pos;
}

