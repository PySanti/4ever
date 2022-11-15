export function generatePos({lateralMsg}){
    let pos = [0,0]
    if (lateralMsg){
        let random = Math.random()*100 
        pos[0] = (random > 50)? window.innerWidth + 200 : -1000;
        if (pos[0] > 0){
            pos[1] = Math.floor(Math.random()*(window.innerHeight - (window.innerHeight*30)/100)) + 100
        } else {
            pos[1] = Math.floor(Math.random()*(window.innerHeight -  (window.innerHeight*30)/100)) + 100
        }
    } else{
        pos[0] = Math.floor(Math.random()*((window.innerWidth*40)/100)) + (window.innerWidth*20)/100;
        pos[1] = Math.floor(Math.random()*(window.innerHeight - (window.innerHeight*30)/100)) + 100
    }
    return pos;
}

