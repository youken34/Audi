
const navigation = document.querySelector('nav');

window.addEventListener('scroll', () => {
    
    if (window.scrollY > 200) {
        navigation.classList.add('anim-nav');
    } else {
        navigation.classList.remove('anim-nav');

    }
})
let timer = null;
let tableauImage = [];
let index = 0;
let image = document.getElementById('back');
var url = ["https://www.audi.fr/content/dam/nemo/fr/RubriqueElectrique/Gamme/1920x600_q4_ed1_2021_V2.jpg?imwidth=1920", "Découvrez notre nouvelle gamme de voiture 100% électrique"];
var url2 = ["https://www.audi.fr/content/dam/nemo/fr/Service/2021/Service-2021/Entretenir/1920x600_Audi_APV_entretenir_header.jpg?imwidth=1920", "Obtenir un devis pour une réparation"];
var url3 = ["https://www.audi.fr/content/dam/nemo/fr/Audi-Sport/2020/refonte/Audi_Desktop.png?imwidth=1920", "Découvrez l'histoire Audi Sport"];
tableauImage.push(url, url2, url3)
document.getElementById('output').innerHTML = tableauImage[index][1];
image.style.backgroundImage = "url(" + tableauImage[index][0] + ")";

function move(params) {
    if (tableauImage[index + params]) {
        index = index + params
        // image.style.backgroundSize = "unset";
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
    console.log(Math.ceil(Math.random() * (max - min + 1)) + min -1);
}

function commence() {
    let rand = 0
    timer = setInterval(function () {
        move(1);
        // Le bout de code sert à faire en sorte que si l'on clique pour déplacer une image, le déplacement automatique d'image s'anulle pour les 3 prochaines secondes
        document.getElementById('button').onclick = function () {
            move(-1)
            clearInterval(timer);
            return commence();
        },
            document.getElementById('button2').onclick = function () {
                move(1)
                clearInterval(timer);
                return commence();
            }

    }, 3000);
}
const message = document.querySelector('#message');

window.addEventListener('scroll', () => {

    const { scrollTop, clientHeight } = document.documentElement;
    // ClientHeight est la hauteur (en px) de la partie visible du client (elle peut être réduite avec l'inspecteur ou en réduisant l'onglet)
    // scrollTop est le nombre de pixel que j'ai scrollé depuis le haut du document
    console.log(document.documentElement.clientHeight)
    const topElementToTopViewport = message.getBoundingClientRect().top;
    // getBoundingClientRect() est un objet qui stock toute les propriétés relative à la position d'une balise
    // Ici on spécifie vouloir la valeur 'top' qui indique la distance (en px) entre le haut de notre élément et le haut du client
    if (scrollTop > (scrollTop + topElementToTopViewport).toFixed() - clientHeight * 0.8) {
        message.classList.add('active')
    }
    else {
        message.classList.remove('active')
    }
})
