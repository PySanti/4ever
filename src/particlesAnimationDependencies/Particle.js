import { generateRandomMove } from "./generateMove"

export class Particle{
    constructor({initial_pos, move, elementID}){
        this.pos = initial_pos
        this.move = move
        this.elementID = elementID
        this.render()

    }
    update(){
        let randomMove = generateRandomMove(2)
        this.pos[0] += this.move[0]
        this.pos[1] += this.move[1]
        this.move[0] += randomMove[0]
        this.move[1] += randomMove[1]
    } 

    render(){
        let element = document.getElementById(this.elementID)
        element.style.left  = `${this.pos[0]}px`
        element.style.top   = `${this.pos[1]}px`
    }
    show(){
        console.log(`
        ~~~~~~~~~~~~~~~~~~~~~~
            id : ${this.elementID}
            move : ${this.move}
        `)
    }
}