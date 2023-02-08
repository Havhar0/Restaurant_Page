const clear = function(){

    const content = document.querySelector('#content');
    content.style="";
    // content.innerHTML = '';
    while (content.firstChild) {
        content.removeChild(content.lastChild);
    }
   
}

export default clear;

/*
  while (myNode.firstChild) {
    myNode.removeChild(myNode.lastChild); */

    // while (content.firstChild) {
    //     content.removeChild(content.lastChild);
    // }

    // while(content.children.length > 2){
    //     content.children[1].clear();
    // }