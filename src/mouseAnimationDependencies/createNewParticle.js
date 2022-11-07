import { generateRandomMove } from "./generateMove";
import { generateParticleHtmlObject } from "./generateParticleHtmlObject";
import {generateRandomSize} from "./generateRandomSize"
import { generateSizeChange } from "./generateSizeChange";
import {Particle} from "./Particle"

export function createNewParticle(initial_pos){
    let move = generateRandomMove()
    let move_change = generateRandomMove()
    let size = generateRandomSize()
    let size_change = generateSizeChange()
    let objId = generateParticleHtmlObject()
    return new Particle({
        initial_pos : initial_pos,
        move : move,
        size : size,
        move_change : move_change,
        size_change : size_change,
        elementID : objId
    })
}