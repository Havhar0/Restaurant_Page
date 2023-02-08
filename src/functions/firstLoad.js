import home from "../pages/homePage.js";
import navbar from "../pages/navbar.js";
// import clear from "./clearPage.js";
import menu from  "../pages/menuPage.js";
import contact from  "../pages/contactPage.js";
    

const firstLoad = function() {
    const content = document.querySelector('#content');
    const homePage = home();
    content.append(home);
}


// const firstLoad = function() {
//         const content = document.querySelector('#content');
//         const navigation = navbar();
//         content.append(navigation);
//         home()
//     }
   
export default firstLoad;