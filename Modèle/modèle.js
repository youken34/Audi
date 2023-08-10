let menu = true;
const boutonMenu = document.querySelector('#symbole')
const banner = document.querySelector('.banner')
const link = document.querySelector('#link')
const liens = document.querySelectorAll('#link a')


const backgroundImage = document.getElementById('backgroundImage');

window.addEventListener('resize', function () {


    if (document.documentElement.clientWidth.toFixed() > 750) {
        banner.style.height = "80px";
        menu = true
        document.body.style.overflowY = "visible"
        boutonMenu.className = "fas fa-align-justify"
        var index = 1, length = liens.length;
        for (; index < length; index++) {
            liens[index].style.display = "block"
        }


    }
    else if (document.documentElement.clientWidth.toFixed() < 750) {
        if (menu === true) {
            var index = 1, length = liens.length;
            for (; index < length; index++) {
                liens[index].style.display = "none";
            }
        }


    }

})


window.addEventListener("resize", function () {
    if (document.documentElement.clientWidth.toFixed() < 570) {
        backgroundImage.src = "../img/etronGT_resp.avif";
    }
    else {
        backgroundImage.src = "../img/etronGT.avif";
    }
})
window.addEventListener("load", function () {
    if (document.documentElement.clientWidth.toFixed() < 570) {
        backgroundImage.src = "../img/etronGT_resp.avif";
    }
    else {
        backgroundImage.src = "../img/etronGT.avif";
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

const voitures = [
    {
        modèle: "Audi e-tron",
        categorie: "e-tron",
        consommation: "24,3-22,0 kWh/100km",
        emission: "Émissions de CO2 mixtes : 0 g/km",
        image: "https://mediaservice.audi.com/media/live/50900/fly1400x601n8/genaa/2021.png?imwidth=250",
        prix: "78 800,00 EUR"
    },
    {
        modèle: "Audi e-tron Sportback",
        categorie: "e-tron",
        consommation: "24,3-22,0 kWh/100km",
        emission: "Émissions de CO2 mixtes : 0 g/km",
        image: "https://mediaservice.audi.com/media/live/50900/fly1400x601n8/geaaa/2021.png?imwidth=250",
        prix: "81 400,00 EUR"
    },
    {
        modèle: "Audi e-tron S",
        categorie: "e-tron / S",
        consommation: "24,3-22,0 kWh/100km",
        emission: "Émissions de CO2 mixtes : 0 g/km",
        image: "https://mediaservice.audi.com/media/live/50900/fly1400x601n8/gens/2021.png?imwidth=250",
        prix: "96 600,00 EUR"
    },
    {
        modèle: "Audi e-tron S Sportback",
        categorie: "e-tron / S",
        consommation: "24,3-22,0 kWh/100km",
        emission: "Émissions de CO2 mixtes : 0 g/km",
        image: "https://mediaservice.audi.com/media/live/50900/fly1400x601n8/geas/2021.png?imwidth=250",
        prix: "99 200,00 EUR"
    },
    {
        modèle: "Audi RS e-tron GT",
        categorie: "e-tron / Rs",
        consommation: "21,7-20,6 kWh/100km",
        emission: "Émissions de CO2 mixtes : 0 g/km",
        image: "https://mediaservice.audi.com/media/live/50900/fly1400x601n8/f83rh7/2022.png?imwidth=250",
        prix: "132 220,00 EUR"
    },
    {
        modèle: "S3	Sportback",
        categorie: "S",
        consommation: "8,2-8,0 l/100km",
        emission: "Émissions de CO2 mixtes : 0 g/km",
        image: "https://mediaservice.audi.com/media/live/50900/fly1400x601n8/8yas3/2021.png?imwidth=250",
        prix: "132 220,00 EUR"
    },
    {
        modèle: "S3	Berline",
        categorie: "S",
        consommation: "9,5-9,0 l/100km",
        emission: "Émissions de CO2 mixtes : 0 g/km",
        image: "https://mediaservice.audi.com/media/live/50900/fly1400x601n8/8yss3/2021.png?imwidth=250",
        prix: "132 220,00 EUR"
    },
    {
        modèle: "RS 3 Sportback",
        categorie: "Rs",
        consommation: "24,3-22,0 kWh/100km",
        emission: "Émissions de CO2 mixtes : 0 g/km",
        image: "https://mediaservice.audi.com/media/live/50900/fly1400x601n8/8yarwy/2022.png?imwidth=250",
        prix: "132 220,00 EUR"
    },



]

function productCategories() {
    return [...new Set(this.voitures.map(({ categorie }) => categorie))]
}
