const parent=document.querySelector('.parent');
// console.log(parent);
// console.log(parent.children);
// console.log(parent.children[1].innerHTML)

// for(let i=0;i<parent.children.length;i++){
//     console.log(parent.children[i].innerHTML);
// }

const dayOne=document.querySelector('.day');
console.log(dayOne.parentElement);
console.log(dayOne.nextElementSibling);


//Discussion regarding the nodelist
console.log("Nodes:",parent.childNodes);
        /*
        Nodes: NodeList(9) [text, div.day, text, div.day, text, div.day, text, div.day, text]
        */
