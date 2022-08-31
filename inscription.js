let container = document.querySelector(".container")
const formulaire = document.querySelector('.formulaire');



function demarrer() {
    if (container.getBoundingClientRect().top.toFixed() < 300) {
        container.classList.add('animContainer')
        formulaire.style.transitionDelay = "0.8s"
        setTimeout(formulaire.classList.add('anim'), 1000000); 

    }
    else{
        container.classList.remove('animContainer')
        setTimeout(formulaire.classList.add('anim'), 3000); 

    }
}

