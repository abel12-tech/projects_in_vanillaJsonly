/* 
     =====General description of what i am gonna to do====
                  ===Add Task to the task list=====
step1 :Take the input from the user .i.e.the value entered in the input box 
step2:Add the value in the input text to the task list
step3:Clear what is entered in the input text before

*/
const form = document.querySelector('#task-form')
const taskInput =document.querySelector('#task')
const taskList = document.querySelector('.collection')
const addTaskbtn =document.querySelector('.btn')


// load all event listeners

loadAllEventListeners()


function loadAllEventListeners(){
    form.addEventListener('submit',addTask)

}
function addTask(e){
        if(taskInput.value === ''){
            alert('please enter the task')
        }
        // create li element with text node is the value of input and link to delete the task in the tasklist
      const li = document.createElement('li')
      li.className ='collection-item'
      li.appendChild(document.createTextNode(taskInput.value))

      // create link that i want to apppend to the li

      const link =document.createElement('a')
      link.className = 'delete-item secondary-content'
      link.innerHTML ='<i class="fa fa-remove"></i>'

      // Append that link to the li

      li.appendChild(link)

      console.log(li)
      // Append the created li to the task list
      taskList.appendChild(li)

      // Clear the input after appending the created task to the tasklist(ul)

      taskInput.value = ''
     
    e.preventDefault()
}


