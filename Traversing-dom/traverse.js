
///===========Traversing through the Dom===========



let val;

const ulList = document.querySelector('ul.ul-class')
const liList = document.querySelector('li.li-class:first-child')

val =ulList.childNodes[0]
val =ulList.children[0].children
liList.children[0].id='test-id'
liList.children[0].href ='https://google.com'
val =liList.children

val =ulList.children[0].children[0]
// Getting the first child
val =ulList.firstChild // node
val =ulList.firstElementChild//element

// Getting  the last child
val= ulList.lastChild //node
val =ulList.lastElementChild

//  Getting the parent 
val =liList.parentNode //node
val =liList.parentElement

val = liList.parentElement.parentElement.parentElement

// Getting the siblings
val = liList.nextSibling // node
val =liList.nextElementSibling.nextElementSibling.previousElementSibling

// Getting the previous siblings
// val =liList.previousSibling         //node
// val =liList.previousElementSibling


console.log(val)