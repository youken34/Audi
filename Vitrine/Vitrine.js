const banner = document.querySelector('.banner')
const boutonMenu = document.querySelector('#symbole')
const link = document.querySelector('#link')
const liens = document.querySelectorAll('#link a')
const message = document.querySelector('#message');
let timer = null;
let tableauImage = [];
let tableauImage2 = []
let index = 0;
let image = document.getElementById('back');
var url = ["../img/back_bleu.avif", "Garantie & Extension de garantie"];
var url2 = ["../img/e-trons.webp", "La gamme 100% électrique définit la mobilité de demain"];
var url3 = ["../img/gris&noir.jpg", "Audi pour les professionels"];
tableauImage.push(url, url2, url3)
var url11 = ["../img/a-pleine-vitesse.avif", "À pleine vitesse électrique", "Audi a récemment étayé son parcours clair vers l'électromobilité avec des chiffres forts et des jalons importants. Comment les Quatre Anneaux progressent sur leur chemin vers une électrification réussie."];
var url22 = ["../img/travail-en-cours.avif", "#Travail en cours", "Aidez-nous à concevoir la mobilité de demain. Avec des voitures qui utilisent une technologie de pointe pour offrir une expérience de conduite exceptionnelle et, en même temps, ouvrir la voie à un avenir numérique, durable et électrique."];
var url33 = ["../img/e-trons_resp.webp", "Chez Audi, vous trouverez le bon véhicule pour chaque besoin", "Sportif, luxueux ou compact – chez Audi, vous trouverez le véhicule adapté à chaque exigence. Découvrez et configurez dès maintenant nos modèles de série."];
tableauImage2.push(url11, url22, url33)
let randTab = null
document.getElementById('output').innerHTML = tableauImage2[index][1];
document.getElementById('description').innerHTML = tableauImage2[index][2];

window.onload = function () {
    commence();
};


let menu = true



window.addEventListener('resize', function () {


    if (document.documentElement.clientWidth.toFixed() > 750) {
        banner.style.height = "80px";
        menu = true
        document.body.style.overflowY = "visible"
        boutonMenu.className = "fas fa-align-justify"
        message.style.transition = "0s"
        var index = 0, length = liens.length;
        for (; index < length; index++) {
            liens[index].style.display = "block"
        }


    }
    else if (document.documentElement.clientWidth.toFixed() < 750) {
        message.style.transition = "0s"
        if (menu === true) {
            var index = 0, length = liens.length;
            for (; index < length; index++) {
                liens[index].style.display = "none";
            }
        }


    }


})

function MenuDepliant() {
    menu = !menu
    if (menu === true) {
        boutonMenu.className = "fas fa-align-justify"
        boutonMenu.className.remove = "close icon"
        document.body.style.height = "200vh";
        banner.style.height = "80px";
        document.body.style.overflowY = "visible"
        link.classList.remove('linkResponsive')
        var index = 1, length = liens.length;
        for (; index < length; index++) {
            liens[index].style.display = "none";
        }
    }
    else {
        boutonMenu.className = "close icon"
        boutonMenu.className.remove = "fas fa-align-justify"
        document.body.style.height = "100vh";
        banner.style.height = "100%";
        document.body.style.overflowY = "hidden"
        link.classList.add('linkResponsive') // S'additionne seulement, ne modifie pas les propriétés
        var index = 1, length = liens.length;
        for (; index < length; index++) {
            liens[index].style.display = "block";
        }
    }

}

const navigation = document.querySelector('.banner');
window.addEventListener('DOMContentLoaded', () => {

    if (window.scrollY > 200) {
        navigation.style.setProperty('--banner-before-opacity', 'rgba(255, 255, 255, 1)');
    } else {
        navigation.style.setProperty('--banner-before-opacity', 'rgba(255, 255, 255, 0.5)');
    }
})

window.addEventListener('scroll', () => {

    if (window.scrollY > 200) {
        navigation.style.setProperty('--banner-before-opacity', 'rgba(255, 255, 255, 1)');
    } else {
        navigation.style.setProperty('--banner-before-opacity', 'rgba(255, 255, 255, 0.5)');
    }
})


function move(params, tableauImage) {
    if (tableauImage[index + params]) {
        index = index + params
        image.style.transition = "1s";
        image.src = tableauImage[index][0]
        document.getElementById('output').innerHTML = tableauImage[index][1];
        document.getElementById('description').innerHTML = tableauImage2[index][2];

    }
    else if (params > 0) {
        index = 0;
        image.src = tableauImage[index][0]
        document.getElementById('output').innerHTML = tableauImage[index][1];
        document.getElementById('description').innerHTML = tableauImage2[index][2];
    }
    else {
        index = tableauImage.length - 1;
        image.src = tableauImage[index][0]
        document.getElementById('output').innerHTML = tableauImage[index][1];
        document.getElementById('description').innerHTML = tableauImage2[index][2];
    }
}
function getRandomInt(min, max) {
    min = Math.ceil(min); // Returns the smallest integer greater than or equal to its numeric argument
    max = Math.floor(max); // // Returns the greatest integer less than or equal to its numeric argument
}
function commence() {
    let randTab = tableauImage2
    image.src = randTab[index][0]

    timer = setInterval(function () {
        // Le bout de code sert à faire en sorte que si l'on clique pour déplacer une image, le déplacement automatique d'image s'anulle pour les 3 prochaines secondes
        document.getElementById('button').onclick = function () {
            move(-1, randTab)
            clearInterval(timer);
            return commence();
        },
            document.getElementById('button2').onclick = function () {
                move(1, randTab)
                clearInterval(timer);
                return commence();
            }
        move(1, randTab)

    }, 5000);
}


/* carré filling animation */
var carré = document.getElementsByClassName('carré')[0]
var actualités = document.getElementById('actualités')

window.addEventListener('scroll', () => {
    var rate = 0
    switch (true) {
        case (document.documentElement.clientWidth < 3000 && document.documentElement.clientWidth > 1000):
            rate = 0.9;
            break;
        case (document.documentElement.clientWidth < 1000 && document.documentElement.clientWidth > 750):
            rate = 1.3;
            break;
        case (document.documentElement.clientWidth < 750 && document.documentElement.clientWidth > 550):
            rate = 1;
            break;
        case (document.documentElement.clientWidth < 550 && document.documentElement.clientWidth > 450):
            rate = 0.8;
            break;
        case (document.documentElement.clientWidth < 450 && document.documentElement.clientWidth > 400):
            rate = 0.7;
            break;
        default:
            rate = 0.6;
            break;
    }

    const { scrollTop, clientHeight } = document.documentElement;
    // ClientHeight est la hauteur (en px) de la partie visible du client (elle peut être réduite avec l'inspecteur ou en réduisant l'onglet)
    // scrollTop est le nombre de pixel que j'ai scrollé depuis le haut du document
    const topElementToTopViewport = message.getBoundingClientRect().top;
    // getBoundingClientRect() est un objet qui stock toute les propriétés relative à la position d'une balise
    // Ici on spécifie vouloir la valeur 'top' qui indique la distance (en px) entre le haut de notre élément et le haut du client

    if (scrollTop > (scrollTop + topElementToTopViewport).toFixed() - clientHeight * rate) {
        carré.classList.add('hovered');
        carré.classList.remove('hovered2');
        setTimeout(() => {
            actualités.style.color = "#000"
        }, 250);
    }
    else {
        carré.classList.remove('hovered');
        carré.classList.add('hovered2');
        setTimeout(() => {
            actualités.style.color = "#fff"
        }, 250);


    }
})








// function getBackgroundImageHeight(containerElement) {
//     const backgroundImage = new Image();
//     backgroundImage.src = getComputedStyle(containerElement).backgroundImage.replace(/url\(['"]?(.*?)['"]?\)/, '$1');

//     return new Promise(resolve => {
//         backgroundImage.onload = function () {
//             const containerWidth = containerElement.clientWidth;
//             const imageWidth = backgroundImage.width;
//             const imageHeight = backgroundImage.height;

//             const scaledImageHeight = (containerWidth / imageWidth) * imageHeight;
//             resolve(scaledImageHeight);
//         };
//     });
// }

// Usage
// window.addEventListener('resize', function () {
//     const containerElement = document.getElementById('back');
//     getBackgroundImageHeight(containerElement).then(height => {
//         document.getElementById('back').style.height = `${height + 1}px`

//     });
// })
// window.addEventListener('load', function () {
//     const containerElement = document.getElementById('back');
//     getBackgroundImageHeight(containerElement).then(height => {
//         document.getElementById('back').style.height = `${height - 1}px`

//     });
// })


// setInterval(function () {
//     const containerElement = document.getElementById('back');
//     getBackgroundImageHeight(containerElement).then(height => {
//         document.getElementById('back').style.height = `${height + 2}px`
//     });

// }, 100)





