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

//Button generating a task

const taskBlock = document.getElementById('taskBlock')

const createBtn = document.getElementById('createBtn')



createBtn.addEventListener('click', ()=>{

    const taskBlockTitle = document.createElement('input')

    const taskBlockDescription = document.createElement('textarea')

    taskBlockTitle.placeholder = "Write task title"
    taskBlockDescription.placeholder = "Describe the task"

    taskBlockTitle.classList.add('taskInputBlock')
    taskBlockDescription.classList.add('taskBlockDescription')
    
    taskBlock.classList.add('taskBlockStyle')

    taskBlockDescription.onresize = 'vertical'


    taskBlock.appendChild(taskBlockTitle)
    taskBlock.appendChild(taskBlockDescription)

    

    taskBlock.appendChild(createAddBtn())

})


function createAddBtn(){
    const submitTaskBtn = document.createElement('button')
    submitTaskBtn.innerHTML = "ADD"
    submitTaskBtn.classList.add('submitTaskBtn')

    submitTaskBtn.addEventListener('click', ()=>{
        alert("sods")
    })

    return submitTaskBtn
}


    
