const clear = function(){

    const content = document.querySelector('#content');
    content.style="";
    content.innerHTML = '';
//     while(content.children.length > 1){
//         content.children[1].clear();
//     }
}

export default clear;