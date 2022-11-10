import { generateRandomMove } from "./generateMove";
import { generateParticleHtmlObject } from "./generateParticleHtmlObject";
import {Particle} from "./Particle"

export function createNewParticle(initial_pos){
    let pos = [initial_pos[0] + Math.random()*20, initial_pos[1] + Math.random()*20]
    let move = generateRandomMove(10)
    let objId = generateParticleHtmlObject()
    return new Particle({
        initial_pos : pos,
        move : move,
        elementID : objId
    })
}