export class Particle{
    constructor({initial_pos, move, move_change, size, size_change, elementID}){
        this.pos = initial_pos
        this.move = move
        this.move_change = move_change
        this.size = size
        this.size_change = size_change
        this.elementID = elementID

    }
    update(){
        this.pos[0] += this.move[0]
        this.pos[1] += this.move[1]
        this.move[0] += this.move_change[0]
        this.move[1] += this.move_change[1]
        this.size += this.size_change
    } 
    render(){
        let element = document.getElementById(this.objId)
        let rect = element.getBoundingClientRect()
        rect.x = this.pos[0]
        rect.y = this.pos[1]
        element.style.padding = `${this.size}px`
    }
}