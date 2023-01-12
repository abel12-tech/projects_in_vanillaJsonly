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
const clearTask = document.querySelector('.clear-tasks')
const filtered = document.querySelector('#filter')
const display =document.querySelector('.display')

// load all event listeners

loadAllEventListeners()


function loadAllEventListeners(){
    // Let add the event listener DOM to load the content in the local storage to the DOM
    document.addEventListener('DOMContentLoaded',getTasksInLocalStorage)
    // Add task
    form.addEventListener('submit',addTask)
    // Remove task from tasklist
   taskList.addEventListener('click',removeTask)
   // Delete all task at once
   clearTask.addEventListener('click',deleteAllTask)
   // filter task 
   filtered.addEventListener('keyup',filterTask)
   // display all task that is addes
   display.addEventListener('click',displayAlltask)

   
}
function addTask(e){
    e.preventDefault()
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

      // Append the created li to the task list
      taskList.appendChild(li)
      // Let persist the added task when the browser is refresh using the local storage
       console.log(taskInput.value)
      persistToLocalStorage(taskInput.value)

      // Clear the input after appending the created task to the tasklist(ul)

      taskInput.value = ''
     
}

//  Store task to local storage
function persistToLocalStorage(task){
    let tasks
    if((localStorage.getItem('tasks') === null)){
        tasks = []
    }
    else{
        tasks = JSON.parse(localStorage.getItem('tasks'))
    }
    tasks.push(task)

    localStorage.setItem('tasks',JSON.stringify(tasks))

    // Here above the task is added to the local storage but it is uploaded to the document
}












function removeTask(e){
   if(e.target.parentElement.classList.contains('delete-item')){
    e.target.parentElement.parentElement.remove()
   }
}

function deleteAllTask(){
    // Short way to clear the task 
    // taskList.innerHTML =''
    // using while loop to clear the task

    while(taskList.firstChild){
        taskList.removeChild(taskList.firstChild)
    }
}
 

function filterTask(e){
      // get the text entered in an input and change to the lowercase
      const text = e.target.value.toLowerCase()
      document.querySelectorAll('.collection-item').forEach(function(task){
                 const item = task.firstChild.textContent
                 if(item.toLowerCase().indexOf(text)!=-1){
                        task.style.display ='block'
                 }
                 else{
                    task.style.display ='none'
                 }
     })
 
   
    
}
function displayAlltask(){
    const allTask =document.querySelectorAll('.collection-item')
    console.log(allTask.length)
    for(let i =0;i<allTask.length;i++){
        console.log(allTask[i].textContent)
    }
}