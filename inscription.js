let container = document.querySelector(".container")
const formulaire = document.querySelector('.formulaire');
let menu = true;


function demarrer() {
    if (container.getBoundingClientRect().top.toFixed() < 300) {
        container.classList.add('animContainer')
        formulaire.style.transitionDelay = "0.8s"
        setTimeout(formulaire.classList.add('anim')); 

    }
    else{
        container.classList.remove('animContainer')
        setTimeout(formulaire.classList.add('anim')); 

    }
}
function Menu() {
    console.log(menu)
    menu = !menu
    if (menu == true) {
        boutonMenu.className = "fas fa-align-justify"
    }
    else {
        boutonMenu.className = "close icon"
    }
}
