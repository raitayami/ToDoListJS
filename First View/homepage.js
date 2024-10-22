
const openingContent = document.querySelector('.openingContent')

const inputDiv = document.createElement('div')

function askName(){

    const question = document.createElement('h2')
    question.innerHTML = "What is your name?"

    inputDiv.appendChild(question)
    openingContent.appendChild(inputDiv)
}

setTimeout(askName, 1000)

const submitNameBtn = document.createElement('button')
submitNameBtn.innerHTML = "Submit"
submitNameBtn.classList.add('styleSubmitBtn')
const inputForName = document.createElement('input')


function inputBox(){
    inputForName.style.width = "300px"
    inputForName.placeholder = "Write name..."
    inputDiv.appendChild(inputForName)


    inputForName.addEventListener('keypress', ()=>{
        inputDiv.appendChild(submitNameBtn)
    })

}

setTimeout(inputBox, 2000)


submitNameBtn.addEventListener('click', ()=>{

    const name = inputForName.value
    window.location.href = `../Second View/toDoList.html?name=${encodeURIComponent(name)}`
})

