//==== Adding the list element in ul element===
//===Adding success or error message based on some conditions
//===Simple calculator

document.getElementById('number-1').addEventListener('click',getValue)
document.getElementById('number-2').addEventListener('click', getValue)
let btnvalue
function getValue(e){
    btnvalue = e.target.textContent
   console.log(btnvalue)
}
