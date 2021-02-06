const taskInput = document.querySelector('#task'); 
const form = document.querySelector('#task-form');  
const filter = document.querySelector('#filter');                  
const taskList = document.querySelector('.collection'); 
const clearBtn = document.querySelector('.clear-tasks');   
//the reload button at the top right of navigation
const reloadIcon = document.querySelector('.fa');  

let tasks;
let tasksArray;



// form submit
form.addEventListener('submit', addNewTask);
// clear all tasks
clearBtn.addEventListener('click', clearAllTasks);
// filter task
filter.addEventListener('keyup', filterTasks);
// Remove task event [event delegation]
taskList.addEventListener('click', removeTask);
// Event Listener for reload 
reloadIcon.addEventListener('click', reloadPage);


function addNewTask(e) {
    e.preventDefault();

    // check empty entry
    if (taskInput.value === "") {
        taskInput.style.borderColor = "red";
        return;
    }

    taskInput.style.borderColor = "black";
    const li = document.createElement("li");
    li.className = "collection-item";
    li.appendChild(document.createTextNode(taskInput.value));

    const link = document.createElement("a");
    link.innerHTML = '<i class="fa fa-remove"></i>';
    link.className = 'delete-item secondary-content';

    li.appendChild(link);
    taskList.appendChild(li);

    addToDatabase(taskInput.value);
}

function clearAllTasks(e) {
    while (taskList.firstChild) {
        taskList.removeChild(taskList.firstChild);
    }

    clearAllTasksFromDB();
}

function filterTasks(e) {
    let inputTxt = document.querySelector("#filter").value;
    let tasksFilter = document.querySelectorAll(".collection-item");
    tasksFilter.forEach( function(task) {
        if (task.textContent.indexOf(inputTxt) == -1) {
            task.style.display = "none";
        } else {
            task.style.display = "block";
        }
    })
}

function removeTask(e) {
    if (e.target.parentElement.classList.contains('delete-item')) {
        if (confirm("Are you sure about that?")) {
            e.target.parentElement.parentElement.remove();

            removeFromDB(e.target.parentElement.parentElement);
        }
    }
}

function reloadPage() {
    //using the reload function on location object 
    location.reload();
}
