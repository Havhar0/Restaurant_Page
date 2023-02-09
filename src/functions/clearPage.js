const clear = function(){

    const content = document.querySelector('#content');
    content.style="";
    while (content.firstChild) {
        content.removeChild(content.lastChild);
    }
}

export default clear;

