console.log(document.documentElement.clientWidth)
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
var url11 = ["../img/back_bleu_resp.avif", "Garantie & Extension de garantie"];
var url22 = ["../img/e-trons_resp.webp", "La gamme 100% électrique définit la mobilité de demain"];
var url33 = ["../img/gris&noir_resp.avif", "Audi pour les professionels"];
tableauImage2.push(url11, url22, url33)
let randTab = null
document.getElementById('output').innerHTML = tableauImage[index][1];
window.onload = function () {
    commence();
};

let menu = true
window.addEventListener('resize', function () {
    let randTab = []
    setInterval(function () {
        if (document.documentElement.clientWidth.toFixed() < 500) {
            randTab = tableauImage2

        } else if (document.documentElement.clientWidth.toFixed() > 500) {
            randTab = tableauImage
        }
        image.style.backgroundImage = "url(" + randTab[index][0] + ")"

    }, 100)
})


window.addEventListener('resize', function () {


    if (document.documentElement.clientWidth.toFixed() > 750) {
        banner.style.height = "100px";
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
        banner.style.height = "100px";
        document.body.style.overflowY = "visible"
        link.classList.remove('linkResponsive')
        var index = 0, length = liens.length;
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
        var index = 0, length = liens.length;
        for (; index < length; index++) {
            liens[index].style.display = "block";
        }
    }

}

const navigation = document.querySelector('nav');

window.addEventListener('DOMContentLoaded', () => {

    if (window.scrollY > 200) {
        navigation.classList.add('anim-nav');
    } else {
        navigation.classList.remove('anim-nav');

    }
})

window.addEventListener('scroll', () => {

    if (window.scrollY > 200) {
        navigation.classList.add('anim-nav');
    } else {
        navigation.classList.remove('anim-nav');

    }
})


function move(params, tableauImage) {
    if (tableauImage[index + params]) {
        index = index + params
        image.style.transition = "1s";
        image.style.backgroundImage = "url(" + tableauImage[index][0] + ")";
        document.getElementById('output').innerHTML = tableauImage[index][1];

    }
    else if (params > 0) {
        index = 0;
        image.style.backgroundImage = "url(" + tableauImage[index][0] + ")";
        document.getElementById('output').innerHTML = tableauImage[index][1];
    }
    else {
        index = tableauImage.length - 1;
        image.style.backgroundImage = "url(" + tableauImage[index][0] + ")";
        document.getElementById('output').innerHTML = tableauImage[index][1];
    }
}
function getRandomInt(min, max) {
    min = Math.ceil(min); // Returns the smallest integer greater than or equal to its numeric argument
    max = Math.floor(max); // // Returns the greatest integer less than or equal to its numeric argument
    console.log(Math.ceil(Math.random() * (max - min + 1)) + min - 1);
}
function commence() {
    let randTab = []

    if (document.documentElement.clientWidth.toFixed() < 500) {
        randTab = tableauImage2

    } else if (document.documentElement.clientWidth.toFixed() > 500) {
        randTab = tableauImage
    }
    image.style.backgroundImage = "url(" + randTab[index][0] + ")"

    let rand = 0
    timer = setInterval(function () {
        document.documentElement.clientWidth.toFixed() > 750 ?
            randTab = tableauImage : randTab = tableauImage2
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

    }, 3000);
}

window.addEventListener('scroll', () => {

    const { scrollTop, clientHeight } = document.documentElement;
    // ClientHeight est la hauteur (en px) de la partie visible du client (elle peut être réduite avec l'inspecteur ou en réduisant l'onglet)
    // scrollTop est le nombre de pixel que j'ai scrollé depuis le haut du document
    const topElementToTopViewport = message.getBoundingClientRect().top;
    // getBoundingClientRect() est un objet qui stock toute les propriétés relative à la position d'une balise
    // Ici on spécifie vouloir la valeur 'top' qui indique la distance (en px) entre le haut de notre élément et le haut du client
    if (scrollTop > (scrollTop + topElementToTopViewport).toFixed() - clientHeight * 0.8) {
        message.classList.add('active')
    }
    else {
        message.classList.remove('active')
        message.style.transition = "1s"
    }
})

function getBackgroundImageHeight(containerElement) {
    const backgroundImage = new Image();
    backgroundImage.src = getComputedStyle(containerElement).backgroundImage.replace(/url\(['"]?(.*?)['"]?\)/, '$1');

    return new Promise(resolve => {
        backgroundImage.onload = function () {
            const containerWidth = containerElement.clientWidth;
            const imageWidth = backgroundImage.width;
            const imageHeight = backgroundImage.height;

            const scaledImageHeight = (containerWidth / imageWidth) * imageHeight;
            resolve(scaledImageHeight);
        };
    });
}

// Usage
window.addEventListener('resize', function () {
    const containerElement = document.getElementById('back');
    getBackgroundImageHeight(containerElement).then(height => {
        document.getElementById('back').style.height = `${height + 2}px`

    });
})
window.addEventListener('load', function () {
    const containerElement = document.getElementById('back');
    getBackgroundImageHeight(containerElement).then(height => {
        document.getElementById('back').style.height = `${height + 2}px`

    });
})


setInterval(function () {
    const containerElement = document.getElementById('back');
    getBackgroundImageHeight(containerElement).then(height => {
        document.getElementById('back').style.height = `${height + 2}px`
    });

}, 100)





