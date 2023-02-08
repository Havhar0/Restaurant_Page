// import home from "./homePage.js";s
// import contact from "./contactPage.js";
// import clear from "../functions/clearPage.js";


export default function menu() {
    


// ------------------------------ NAVBAR CLASS

    // let navbar = document.createElement('div');
    // navbar.classList.add('navbar');
    // topRight.append(navbar);

    // let tab1 = document.createElement('div');
    // let tab1 = document.querySelector('.tab1');
    // tab1.classList.add('navbar-tab-not-active');
    
    // navbar.append(tab1);

    // tab2.classList.add('navbar-tab-active');
    // navbar.append(tab2);

    let wrapper = document.querySelector('#content');

    let midPage = document.createElement('div');
    midPage.classList.add('mid-page');
    wrapper.append(midPage);

// ------------------------------ MID LEFT

    let midLeft = document.createElement('div');
    midLeft.classList.add('mid-left');
    midPage.append(midLeft);

    let midLeftcont = document.createElement('div');
    midLeftcont.classList.add('mid-left-cont');
    midLeft.append(midLeftcont);

    let midLeftpara = document.createElement('div');
    midLeftpara.classList.add('mid-left-para');
    midLeftpara.textContent = 'Welcome to menu page!';
    midLeftcont.append(midLeftpara);

    let midLeftpara2 = document.createElement('div');
    midLeftpara2.classList.add('mid-left-para2');
    midLeftpara2.textContent = 'Worlds most renowned nordic restaurant. One you will always come back to!';
    midLeftcont.append(midLeftpara2);

    let midLeftbody = document.createElement('div');
    midLeftbody.classList.add('mid-left-body');
    midLeftbody.textContent = 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.';
    midLeftcont.append(midLeftbody);


// ------------------------------  MID RIGHT

    let midRight = document.createElement('div');
    midRight.classList.add('mid-right');
    midPage.append(midRight);

    let midRightcont = document.createElement('div');
    midRightcont.classList.add('mid-right-cont');
    midRight.append(midRightcont);

    let midRightbody = document.createElement('div');
    midRightcont.classList.add('mid-right-body');
    midRightcont.append(midRightbody);
    

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

