export function addRemovingGiftAnimation({gift, container}){
    gift.style.transform = "scale(0,0)" 
    setTimeout(() => {
        container.removeChild(gift)
    }, 1000)
}