const inputValue =document.querySelector('.input-value')
inputValue.addEventListener('keydown',takeInputvalue)


function takeInputvalue(e){
    const outputList = document.querySelector('.output-list')
    for(let i =0;i<outputList.children.length;i++){
      outputList.children[0].textContent = e.target.value
     
    }
}