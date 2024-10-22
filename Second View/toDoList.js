//Transfer input name from homepage.html to toDoList.html

function getQueryParam(param){
    const urlParams = new URLSearchParams(window.location.search)

    return urlParams.get(param)

}

const userName = getQueryParam('name')

if(userName){
    document.getElementById('name').textContent = `${userName}`
}  else {
    document.getElementById('name').textContent = `${userName}`

}

//Create a task

const taskBlock = document.getElementById('taskBlock')

const taskBlockTitle = document.createElement('input')

const taskBlockDescription = document.createElement('textarea')
const createBtn = document.getElementById('createBtn')

const submitTaskBtn = document.createElement('button')
submitTaskBtn.innerHTML = "ADD"


createBtn.addEventListener('click', ()=>{

    taskBlockTitle.placeholder = "Write task title"
    taskBlockDescription.placeholder = "Describe the task"

    taskBlockTitle.classList.add('taskInputBlock')
    taskBlockDescription.classList.add('taskBlockDescription')
    
    taskBlock.classList.add('taskBlockStyle')

    taskBlockDescription.onresize = 'vertical'


    taskBlock.appendChild(taskBlockTitle)
    taskBlock.appendChild(taskBlockDescription)

    
    submitTaskBtn.classList.add('submitTaskBtn')

    taskBlock.appendChild(submitTaskBtn)


})


//Adding items to list

const listOfTasks = document.getElementById('listOfTasks')


submitTaskBtn.addEventListener('click', ()=>{

    const taskRow = document.createElement('div')
    taskRow.classList.add('taskRow')

    const task = document.createElement('div');
    
    const taskTitle = document.createElement('li');
    const taskDescription = document.createElement('li')

    taskTitle.innerHTML = `${taskBlockTitle.value}`
    taskTitle.style.fontWeight = 'bold'
    taskDescription.innerHTML = `${taskBlockDescription.value}`

    task.appendChild(taskTitle)
    task.appendChild(taskDescription)

    const doneButton = document.createElement('button')
    doneButton.innerHTML = "DONE"

    taskRow.appendChild(task)
    taskRow.appendChild(doneButton)
    
    listOfTasks.appendChild(taskRow)
    

    taskBlockTitle.value = ""
    taskBlockDescription.value = ""
})

