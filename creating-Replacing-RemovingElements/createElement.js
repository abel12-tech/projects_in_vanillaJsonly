//   =====Creating html elements with vanilla javascript====

//   create element

const li =document.createElement('li')
//  Add class to the created element

li.className ='li-class'
//  Add id
li.id='new-li'

//  set attribute to the created element

li.setAttribute('title','New Li')

// append child in it

li.appendChild(document.createTextNode('Hello world'))

// append the li created as i child to the parent ul
let parentofcreatedElement =document.querySelector('ul.ul-class').children
document.querySelector('ul.ul-class').appendChild(li)

//  console.log(parentofcreatedElement)

// Add the anchor element in li

const anchorElement = document.createElement('a')

anchorElement.className ='anchor'
anchorElement.id ='anchor-element'

anchorElement.appendChild(document.createTextNode('link to other node'))

anchorElement.innerHTML='<h1>Link </h1>'
anchorElement.setAttribute('href','https://google.com')
//Now let add the created anchor element as a child to li
li.appendChild(anchorElement)

console.log(anchorElement)
//===============Replacing the element in the document==========
//  let the first li element by other

const oldSecondli =document.querySelector('ul.ul-class').children[1]
const newli = document.createElement('li')

newli.className ='newSecondli'
newli.appendChild(document.createTextNode('new second li'))

const ulClass = document.querySelector('ul.ul-class')

console.log(ulClass)

//  Now let replace the li2 with newli

ulClass.replaceChild(newli,oldSecondli)





console.log(newli)

console.log(li)

console.log("====Removing and replacing element===")


console.log("Task 1:replace the 4th li element in ul with other")

const newForthElement = document.createElement('li')

newForthElement.className ='forth-element'
newForthElement.id ='new-forth-element'
newForthElement.appendChild(document.createTextNode('NEW FORTH'))
newForthElement.innerHTML ='<h1>The new forth element</h1>'

const oldForthElement = document.querySelector('.ul-class').children[3]
     console.log("oldforth element before replacing : ")
     console.log(oldForthElement)
const parentforLielements =document.querySelector('ul.ul-class')
//  Now let the new created forth element with the old one 

parentforLielements.replaceChild(newForthElement,oldForthElement)

console.log(parentforLielements.children[3].textContent)

console.log("Task 2:remove three li in ul ")

parentforLielements.children[0].remove()
parentforLielements.children[1].remove()
parentforLielements.children[2].remove()

const liElements =document.querySelectorAll('li')
liElements[0].remove()
console.log(liElements[0])


console.log(parentofcreatedElement)

//==============Event listening=========

console.log("======All about event listeners=====")
 const buttonTag = document.querySelector('.add-list')
 /*
 Events that i am going to see
 1.click
 2.mousedown
 3.mouseup
 4.mouseenter
 
 
 
 */

  buttonTag.addEventListener('mouseenter',onClick)
  //===let use the named function 

  function onClick(e){
     let val
     // Event target element
       val =e.target
       val = e.target.className
       e.target.id = 'btn'
       val = e.target.id
       val =e.target.textContent
       e.target.textContent ='Hello'
       val =e.target.textContent
       val =e.target.classList
       e.target.classList.add('addedclass-list')
       val =e.target.classList
       val =e.target
       val = `Event Type:${e.type}`

     console.log(val)
  }








