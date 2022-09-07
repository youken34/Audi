const boutonMenu = document.querySelector('#symbole')
let menu = true;
    function Menu() {

        menu = !menu
        if (menu === true) {
            boutonMenu.className = "fas fa-align-justify"
        }
        else {
            boutonMenu.className = "close icon"
        }

}
