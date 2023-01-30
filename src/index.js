    let content = document.querySelector('#content');
    let wrapper = document.createElement('div');
    wrapper.classList.add('wrapper');
    content.append(wrapper);

// -------------------- top page

    let topPage = document.createElement('div');
    topPage.classList.add('top');
    wrapper.append(topPage);

    let topLeft = document.createElement('div');
    topLeft.classList.add('top-left');
    topPage.append(topLeft);

    let topRight = document.createElement('div');
    topRight.classList.add('top-right');
    topPage.append(topRight);
  
// -------------------- mid page

let midPage = document.createElement('div');
midPage.classList.add('mid-page');
wrapper.append(midPage);

// -------------------- footer

let footer = document.createElement('div');
footer.classList.add('footer');
wrapper.append(footer);

// -------------------- top right navbar

    let navbar = document.createElement('div');
    navbar.classList.add('navbar');
    topRight.append(navbar);

    let tab1 = document.createElement('div');
    tab1.classList.add('navbar-tab1');
    navbar.append(tab1);

    let tab2 = document.createElement('div');
    tab2.classList.add('navbar-tab2');
    navbar.append(tab2);

    let tab3 = document.createElement('div');
    tab3.classList.add('navbar-tab3');
    navbar.append(tab3);



