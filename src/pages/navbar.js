import home from  "./homePage.js";
import menu from  "./menuPage.js";
import contact from  "./contactPage.js";


const navbar = function() {

let wrapper = document.createElement('div');
wrapper.classList.add('wrapper');
content.append(wrapper);

let topPage = document.createElement('div');
topPage.classList.add('top');
wrapper.append(topPage);

let topLeft = document.createElement('div');
topLeft.classList.add('top-left');
topLeft.textContent = 'ODINSFEAST';
topPage.append(topLeft);

let topRight = document.createElement('div');
topRight.classList.add('top-right');
topPage.append(topRight);

// ------------------------------ NAVBAR


let navbar = document.createElement('div');
navbar.classList.add('navbar');
topRight.append(navbar);

let tab1 = document.createElement('div');
tab1.classList.add('navbar-tab-active');
tab1.id="home";
tab1.textContent = 'HOME';
tab1.addEventListener("click", (e) => {
    console.log("home works")
    // clear();
    home();
})
navbar.append(tab1);

let tab2 = document.createElement('div');
tab2.classList.add('navbar-tab-not-active');
tab2.id="menu";
tab2.textContent = 'MENU';
tab2.addEventListener("click", (e) => {
    console.log("menu works")

    // clear();
    menu();
})
navbar.append(tab2);

let tab3 = document.createElement('div');
tab3.classList.add('navbar-tab-not-active');
tab3.id="contact";
tab3.textContent = 'CONTACT';
tab3.addEventListener("click", (e) => {
    console.log("contact works")
    // clear();
    contact();
})
navbar.append(tab3);


}

export default navbar;