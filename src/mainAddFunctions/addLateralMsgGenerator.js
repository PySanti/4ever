import { lateralMsgClassName } from "../index"
import { addLateralMsgTimeout } from "../lateralMsgDependencies/addLateralMsgTimeout"
import { generateRandomIndex } from "../lateralMsgDependencies/generateRandomIndex"

let currentLateralIndexMsg = 0;

export function addLateralMsgGenerator(root){
    let mensajes = [
        "Queria hacerte este regalo para que vieras una coleccion de las mejores fotos de nuestros primeros 4 meses bebe, son muchas y se generan aleatoriamente, asi cada vez que quieras ver la pagina veras una foto diferente de nosotros. Para ver las fotos nada mas haz click en los regalos y cuando quieras quitar la foto, haz click en la foto :)",
        "Te amo mi princesa :)",
        "A pesar de que no soy perfecto y que se me hace dificil mejorar, lo unico que te puedo prometer es que hare todo lo posible por que estemos juntos toda la vida",
        "Amor no quiero que nunca dudes de lo que siento por ti, me equivoco, me equivoque y me equivocare, pero nunca dudare que eres el amor de mi vida",
        "Bebe y queria decirte que si te voy a regalar una rosa, y cuando lo haga lo recordaras para toda la vida (o al menos eso espero)",
        "Amor y aunque a pesar de que a veces nos sintamos mal, de que a veces tengamos inconformidades, recuerda que siempre estare mejor contigo que sin ti bebe, siempre estaremos juntos mientras quieras",
        "Eres el amor de mi vida",
        "Que loco que a pesar de que han pasado ya 4 meses, parece que hubiese sido 1 año desde aquel dia de plaza las americas despues del ensayo del colegio",
        "Me encantas como eres bebe, me encanta todo de ti",
        "Como quisiera regresar el tiempo nada mas para volver a pasar por los 4 mejores meses de mi vida de nuevo",
        "Ojala emporio pueda ver esto algun dia",
        "Extraño esa fiesta en casa de julio en la que bailamos de todo, nos besamos, nos regañaron, nos dejaron botados en la calle, vimos juntos el amanecer ...",
        "Eres lo mas importante de mi vida",
        "Uno de los momentos que me hicieron darme cuenta de lo importante que eras para mi, fue ese sabado en street market, cuando a pesar de que pasaron solamente 2 semanas que no nos veiamos, lo senti como 2 años mas tristes de mi vida, y cuando vi que llegabas y ponias esa cara de pena mezclada con felicidad senti la mayor alegria del mundo",
        "Podre ser empalagoso, podra costarme saber cuando necesitas que te apoye, podre no tener demasiada plata, podre ser exagerado, podre quedarme dormido en cualquier sitio, pero jamas podre dejar de amarte",
        "Que lindo cuando empezamos a hablar, cuando me dijiste que te encantaban los chivos, que creamos la palabra chocha, que hablabamos de collares y pulseras, que debatiamos sobre estupideces",
        "Amor tienes que mejorar tu alimentacion el coñodelamadre",
        "Quiero que sepas que, mientras estemos juntos vales tanto para mi como yo mismo, que si tu estas mal yo estoy mal y si tu esta feliz yo tambien estere feliz bebe",
    ]
    setInterval(() => {
        let lateralMsgs = document.getElementsByClassName(lateralMsgClassName)
        if (lateralMsgs.length === 0){
            let emojisList = ["🧡", "💛", "💚", "💙", "💜", "🤎", "🖤", "🤍", "💗", "💖", "💘", "💝", "❤️‍🔥", "❤️‍🩹", "👫"]
            let emoji = emojisList[generateRandomIndex(emojisList.length)]
            console.log(currentLateralIndexMsg)
            let mensaje = mensajes[currentLateralIndexMsg] + `<a class='msg-emoji'> ${emoji}</a>`
            let root = document.getElementById('root')
            currentLateralIndexMsg += 1
            if (currentLateralIndexMsg > (mensajes.length - 1)){
                currentLateralIndexMsg = 0;
            } 
            addLateralMsgTimeout(mensaje, root)
        }
    },2000)

}