// DOM load event
document.addEventListener('DOMContentLoaded', loadTasksFromDB);


function addToDatabase(newTask) {
    let listOfTasks;
    if (localStorage.getItem('tasks') == null) {
        listOfTasks = [];
    } else {
        listOfTasks = JSON.parse(localStorage.getItem('tasks'));
    }
    listOfTasks.push(newTask);
    localStorage.setItem('tasks', JSON.stringify(listOfTasks));
}

function loadFromDB() {
    let listOfTasks;
    if (localStorage.getItem('tasks') == null) {
        listOfTasks = [];
    } else {
        listOfTasks = JSON.parse(localStorage.getItem('tasks'));
    }
    return listOfTasks;
}

function loadTasksFromDB() {
    let listOfTasks = loadFromDB();
    if (listOfTasks.length != 0) {
        listOfTasks.forEach(function(eachTask) {
            const li = document.createElement('li');
            li.className = 'collection-item';
            li.appendChild(document.createTextNode(eachTask));
            const link = document.createElement('a');
            link.className = 'delete-item secondary-content';
            link.innerHTML = '<i class="fa fa-remove"></i>';
            li.appendChild(link);
            taskList.appendChild(li);
        })
    }
}

function clearAllTasksFromDB() {
    localStorage.clear();
}

function removeFromDB(taskItem) {
    let listOfTasks;
    if (localStorage.getItem('tasks') == null) {
        listOfTasks = [];
    } else {
        listOfTasks = JSON.parse(localStorage.getItem('tasks'));
    }

    listOfTasks.forEach(function(task, index) {
        if (taskItem.textContent.trim() === task.trim()) {
            listOfTasks.splice(index, 1); // deletes item at index
        }
    });
    localStorage.setItem('tasks', JSON.stringify(listOfTasks));
}