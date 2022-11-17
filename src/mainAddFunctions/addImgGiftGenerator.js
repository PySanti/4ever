import { addImgGift } from "../imgGiftGeneratorDependencies/addImgGift"
import { imgClassName, imgGiftClassName } from "../index"

export function addImgGiftGenerator({particleList}){
    let imgGifts = document.getElementsByClassName(imgGiftClassName)
    let imgs = document.getElementsByClassName(imgClassName)
    setInterval(() => {
        if ((imgGifts.length === 0) && (imgs.length === 0)){
            addImgGift({particlesList : particleList})
        }
    }, 2000)
}