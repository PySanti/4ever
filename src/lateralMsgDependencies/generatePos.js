export function generatePos({lateralMsg = false, lateralMsgSize = null}){
    let pos = [0,0]
    if (lateralMsg){
        let random = Math.random()*100 
        pos[0] = (random > 50)? window.innerWidth + 200 : -1000;
        pos[1] = Math.random()*(window.innerHeight - lateralMsgSize[1])
    } else{
        pos[0] = Math.floor(Math.random()*((window.innerWidth*40)/100)) + (window.innerWidth*20)/100;
        pos[1] = Math.floor(Math.random()*(window.innerHeight - (window.innerHeight*30)/100)) + 100
    }
    return pos;
}

