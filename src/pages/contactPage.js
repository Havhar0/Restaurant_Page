import firstLoad from "../functions/firstLoad.js";
import menuLoad from "../functions/menuLoad.js";
import clear from "../functions/clearPage.js";

export default function contact() {

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
    tab1.classList.add('navbar-tab-not-active');
    tab1.id="home";
    tab1.textContent = 'HOME';
    tab1.addEventListener("click", (e) => {
        clear();
        firstLoad();
    })
    navbar.append(tab1);

    let tab2 = document.createElement('div');
    tab2.classList.add('navbar-tab-not-active');
    tab2.id="menu";
    tab2.textContent = 'MENU';
    tab2.addEventListener("click", (e) => {
        clear();
        menuLoad();
    })
    navbar.append(tab2);

    let tab3 = document.createElement('div');
    tab3.classList.add('navbar-tab-active');
    tab3.id="contact";
    tab3.textContent = 'CONTACT';
    navbar.append(tab3);

    let midPage = document.createElement('div');
    midPage.classList.add('mid-page');
    wrapper.append(midPage);

// ------------------------------ MID LEFT

let contactContainer = document.createElement('div');
contactContainer.classList.add('contact-container');
midPage.appendChild(contactContainer);

let contactMap = document.createElement('div');
contactMap.classList.add('contact-map');
contactContainer.append(contactMap);

let contactItem = document.createElement('div');
contactItem.classList.add('contact-item');
contactContainer.append(contactItem);

let contactPara1 = document.createElement('div');
contactPara1.classList.add('contact-para1');
contactPara1.textContent = 'Phone: 123 456 789';
contactItem.append(contactPara1);

let contactPara2 = document.createElement('div');
contactPara2.classList.add('contact-para2');
contactPara2.textContent = 'e-mail: mr_odin@odinsfeast.com';
contactItem.append(contactPara2);

let contactPara3 = document.createElement('div');
contactPara3.classList.add('contact-para3');
contactPara3.textContent = 'address: 123 Valhalla St, Norway';
contactItem.append(contactPara3);
    

// ------------------------------ FOOTER

    let footer = document.createElement('div');
    footer.classList.add('footer');
    wrapper.append(footer);

    let footerCont = document.createElement('div');
    footerCont.classList.add('footer-cont');
    footerCont.textContent = 'Developed by Damian Grabowski';
    footer.append(footerCont);

    let footerGit = document.createElement('div');
    footerGit.classList.add('footer-git');
    footer.append(footerGit);
}

