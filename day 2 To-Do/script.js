const inputArea = document.querySelector("#input-area")
const listContainer = document.querySelector("#list-container")

function addTask(){
    if(inputArea.value == ''){
        alert("Must enter a task!")
    }
    else{
        let li = document.createElement("li")
        let todoInput = inputArea.value
        li.innerHTML = todoInput[0].toUpperCase() + todoInput.slice(1)
        listContainer.appendChild(li)
        let span = document.createElement('span')
        span.innerHTML = '\u00d7' //is the icon code for an x
        li.appendChild(span)
    }
    inputArea.value = ''
    saveData()
}

inputArea.addEventListener('keyup', (e) => {
    if(e.keyCode === 13) addTask()
})  // used to see if the enter key was pressed. 
    // keyup is if a key is pressed and each key has a keycode which enter is 13


function doneWithTask(tag){
    if(tag.target.tagName == 'LI'){ //checks if we clicked an li
        tag.target.classList.toggle("checked") // toggles the class called "checked"
        saveData()
    }
    else if(tag.target.tagName == "SPAN"){
        tag.target.parentElement.remove()
        saveData()
    }
}


listContainer.addEventListener("click", doneWithTask, false) //False to capture so we use bubble which is the most inside element in this case span is seen first
// we use event listeners when we arent using an html button
// if we use the button we make a normal funciton like above and call it in the onClick in the button

function saveData(){
    localStorage.setItem("data", listContainer.innerHTML)
    // stores the tasks in the browser so that itll save and stores it in the name data
    // you have to run the function everytime something changes so it is ran  when something is marked complete, removed, or added
}
function showTask(){
    listContainer.innerHTML = localStorage.getItem("data")
    // sets the container to have the list of items from local storage
}
showTask()