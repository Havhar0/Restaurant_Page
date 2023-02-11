import firstLoad from "../functions/firstLoad.js";
import contactLoad from "../functions/contactLoad.js";
import clear from "../functions/clearPage.js";


export default function menu() {

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
    tab2.classList.add('navbar-tab-active');
    tab2.id="menu";
    tab2.textContent = 'MENU';
    navbar.append(tab2);

    let tab3 = document.createElement('div');
    tab3.classList.add('navbar-tab-not-active');
    tab3.id="contact";
    tab3.textContent = 'CONTACT';
    tab3.addEventListener("click", (e) => {
        clear();
        contactLoad();
    })
    navbar.append(tab3);

    let midPage = document.createElement('div');
    midPage.classList.add('mid-page');
    wrapper.append(midPage);

// ------------------------------ MID LEFT

    let menuContainer = document.createElement('div');
    menuContainer.classList.add('menu-container');
    midPage.appendChild(menuContainer);

    let menuItem1 = document.createElement('div');
    menuItem1.classList.add('menu-item1');
    menuContainer.append(menuItem1);

    let menuItem1pic = document.createElement('div');
    menuItem1pic.classList.add('menu-item1-pic');
    menuItem1.append(menuItem1pic);

    let menuItem1para = document.createElement('div');
    menuItem1para.classList.add('menu-item1-para');
    menuItem1para.textContent = 'Odins Steak!';
    menuItem1.append(menuItem1para);

    let menuItem1price = document.createElement('div');
    menuItem1price.classList.add('menu-item-price');
    menuItem1price.textContent = '£55';
    menuItem1.append(menuItem1price);

    let menuItem1body = document.createElement('div');
    menuItem1body.classList.add('menu-item-body');
    menuItem1body.textContent = 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate';
    menuItem1.append(menuItem1body);

    let menuItem2 = document.createElement('div');
    menuItem2.classList.add('menu-item2');
    menuContainer.append(menuItem2);

    let menuItem2pic = document.createElement('div');
    menuItem2pic.classList.add('menu-item2-pic');
    menuItem2.append(menuItem2pic);

    let menuItem2para = document.createElement('div');
    menuItem2para.classList.add('menu-item2-para');
    menuItem2para.textContent = 'Odins Fish!';
    menuItem2.append(menuItem2para);

    let menuItem2price = document.createElement('div');
    menuItem2price.classList.add('menu-item-price');
    menuItem2price.textContent = '£25';
    menuItem2.append(menuItem2price);

    let menuItem2body = document.createElement('div');
    menuItem2body.classList.add('menu-item2-body');
    menuItem2body.textContent = 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate';
    menuItem2.append(menuItem2body);

    let menuItem3 = document.createElement('div');
    menuItem3.classList.add('menu-item3');
    menuContainer.append(menuItem3);

    let menuItem3pic = document.createElement('div');
    menuItem3pic.classList.add('menu-item3-pic');
    menuItem3.append(menuItem3pic);

    let menuItem3para = document.createElement('div');
    menuItem3para.classList.add('menu-item3-para');
    menuItem3para.textContent = 'Odins Ribbs!';
    menuItem3.append(menuItem3para);

    let menuItem3price = document.createElement('div');
    menuItem3price.classList.add('menu-item-price');
    menuItem3price.textContent = '£45';
    menuItem3.append(menuItem3price);

    let menuItem3body = document.createElement('div');
    menuItem3body.classList.add('menu-item3-body');
    menuItem3body.textContent = 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate';
    menuItem3.append(menuItem3body);


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

