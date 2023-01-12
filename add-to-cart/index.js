const foodCards =document.querySelectorAll('.food-card')
const addCardbtns =document.querySelectorAll('.add-to-cart')
let cartCounter = document.querySelector('.counter-in-cart')
const foodInCart =document.querySelector('.food-in-cart')
let amountOftheSamefood = document.querySelectorAll('.number')

console.log(amountOftheSamefood)

// amountOftheSamefood.forEach(span=>{
//     console.log(span.parentElement)
//     // identify the span by their parent element and then manipulate them independetly
//     if(span.parentElement.firstChild)
// })

for(let j =0;j<amountOftheSamefood.length;j++){
    console.log(amountOftheSamefood[j].parentElement)
    parentElementForFirstSpan = amountOftheSamefood[0]
    if(amountOftheSamefood[j].parentElement.textContent === 'Pasta'){
        amountOftheSamefood[j].textContent = 7
    }
}


// console.log(foodInCart.children)

let foodName
let price
// addCardbtns.forEach(addCardbtn=>{
//      const parentElement =addCardbtn.parentElement
//      for(let i =0;i<parentElement.children.length;i++){
//         //  console.log(parentElement.children[i].textContent)
//         if(parentElement.children[i].classList.contains('food-name')) {
//             const foodName = parentElement.children[i].textContent
//             console.log(foodName)      
//         }
//         else if(parentElement.children[i].classList.contains('price')){
//             const price = parentElement.children[i].textContent
//             console.log(price)
//         }
        
//      }
// })

addCardbtns.forEach(addCardbtn =>{
    addCardbtn.addEventListener('click',addToCart)
})
function addToCart(e){
    if(foodInCart.children.length === 0){
        console.log('no food in food list')
    }
    const btnParentElement = e.target.parentElement
      for(let i =0;i<btnParentElement.children.length;i++){
        //  console.log(parentElement.children[i].textContent)
        if(btnParentElement.children[i].classList.contains('food-name')) {
            foodName =  btnParentElement.children[i].textContent
             if(foodInCart.textContent.includes(foodName)){
                
             }
                 
        }
        else if(btnParentElement.children[i].classList.contains('price')){
             price = btnParentElement.children[i].textContent
            
        }
    
     }




        // create the list element that is to be inserted to the food in cart
   
    



        let li = document.createElement('li')
        li.className = 'food-name'
        li.appendChild(document.createTextNode(foodName))
         // span
        let span = document.createElement('span')
        span.className ='number'
        span.appendChild(document.createTextNode(2))
         // paragraph
        let p =document.createElement('p')
        p.className ='price'
        p.appendChild(document.createTextNode(price))
        // button1
        let btn1 =document.createElement('button')
        btn1.className='add'
        btn1.appendChild(document.createTextNode('+'))
        // btn2
        let btn2 =document.createElement('button')
        btn2.className='minus'
        btn2.appendChild(document.createTextNode('-'))
           // Let append all child of li
           li.appendChild(span)
           li.appendChild(p)
           li.appendChild(btn1)
           li.appendChild(btn2)

           // let append the created li to the foods list and count them
           // let append based on condition mean  that if the food is there before add only the
           // amount but if not append it
             





                  foodInCart.appendChild(li)
                 cartCounter.textContent = foodInCart.children.length
          


//    addCardbtns.forEach(addCardbtn=>{
//      const parentElement =addCardbtn.parentElement
//      for(let i =0;i<parentElement.children.length;i++){
//         //  console.log(parentElement.children[i].textContent)
//         if(parentElement.children[i].classList.contains('food-name')) {
//             const foodName = parentElement.children[i].textContent
//             console.log(foodName)      
//         }
//         else if(parentElement.children[i].classList.contains('price')){
//             const price = parentElement.children[i].textContent
//             console.log(price)
//         }
        
//      }
// })
}