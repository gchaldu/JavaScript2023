//element references
const taskList = document.querySelector(".task-list")
const modalWindow = document.querySelector("#modal-add-task") //modal window
const addTaskButton = document.querySelector("#add-task")  //button to trigger modal
const closeModalButton = document.querySelector("#close-modal") 
const form = document.querySelector("#new-task-form")

//Task constructor function
function Task(title, comment, date = new Date().toLocaleString())
{
    this.title = title,
    this.date = date,
    this.isCompleted = false,
    this.comment = comment,

    toString()
    {
        return `[Title: ${this.title}, Date: ${this.date}, Comment: ${this.comment}]`
    }
}

//task array
const tasks = []

//event handlers

const openModalForm = () => {
    console.log("Clicked add task button")
    modalWindow.style.display = "block"
}

const closeModalForm = () => {
    console.log("Clicked close modal button")
    modalWindow.style.display = "none"
}

const handleOnload = async () => {
    console.log("handled onload event")
    
    const response = await fetch("tasks.json")
    if( response.ok )
        console.log(response.json)
}

const handleSubmit = (e) => 
{
    e.preventDefault()
    console.log("handle submit")

    //get input title and save value
    const title = document.querySelector("#task-title-input").value

    //get input date and save value
    const date = document.querySelector("#task-date-input").value

    //get textarea and save value
    const comment = document.querySelector("#task-comment-textarea").value

    const t = new Task(title, comment, date)
    console.log("New task", t)
    tasks.push(t)
}

//events
addTaskButton.addEventListener("click", openModalForm)
closeModalButton.addEventListener("click", closeModalForm)
window.addEventListener("load", handleOnload)
form.addEventListener("submit", handleSubmit)