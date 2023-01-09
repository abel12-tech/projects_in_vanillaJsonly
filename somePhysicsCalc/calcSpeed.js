const allForm = document.getElementById('velocity-form')
const checker = document.getElementById('checker')

allForm.addEventListener('submit',submitAllInput)

function submitAllInput(e){
    e.preventDefault()
    //   Input
    const initialDisplacement = document.getElementById('initial-displacement').value
    const finalDisplacement = document.getElementById('final-displacement').value
    const initialTime = document.getElementById('initial-time').value
    const finalTime = document.getElementById('final-time').value
    const mass = document.getElementById('mass').value
    
    

    const changeInDisp = parseFloat(finalDisplacement)-parseFloat(initialDisplacement)
    const changeInTime = parseFloat(finalTime)-parseFloat(initialTime)
    const velocity = changeInDisp / changeInTime
    document.getElementById('acceleration').value =velocity


    // Output
 


    

  
}