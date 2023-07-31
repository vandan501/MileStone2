// Load tasks from localStorage if available
var tasks = JSON.parse(localStorage.getItem('tasks') || '[]');

function addtodo() {
    var todo = document.getElementById('todo').value;
    if (todo === '') {
        alert("Please add your task");
    } else {
        // Add the new task to the tasks array
        tasks.push(todo);
        updateDisplay();
        // Save tasks to localStorage
        localStorage.setItem('tasks', JSON.stringify(tasks));
    }
    return true;
}

function removeTask(index) {
    // Remove the task from the tasks array at the given index
    tasks.splice(index,1);
    updateDisplay();
    // Save updated tasks to localStorage
    localStorage.setItem('tasks', JSON.stringify(tasks));
}

function updateDisplay() {
    var displaytodo = document.getElementById('displaytodo');

    // Clear the existing content
    displaytodo.innerHTML = '';

    // Create and append new task elements to the displaytodo
    tasks.forEach(function(task, index) {
        var todoCard = document.createElement('div');
        todoCard.className = 'todoCard'
        var taskElement1 = document.createElement('h2');
        taskElement1.textContent = "Task : "+(index+1);
        var taskElement2 = document.createElement('h2');
        taskElement2.style="font-size:35px";
        taskElement2.textContent = task;
        taskElement1.style.color="Yellow";
        taskElement1.style.display='inline';
        // taskElement2.style.display='inline-block';
        todoCard.appendChild(taskElement1);
        todoCard.appendChild(taskElement2);


    // Create a dropdown to select the status





        // uddate status 
        var updatebutton = document.createElement('button');
        updatebutton.textContent = 'Update Status';
        updatebutton.style="background-color:blue;width:300px;font-size:18px;height:30px;border:none;   cursor: pointer;color:white;"
        updatebutton.onclick = function() {
            updateTask(index);
        };
        todoCard.appendChild(updatebutton);

        displaytodo.appendChild(todoCard);




        // Create a button to remove the task
        var removeButton = document.createElement('button');
        removeButton.textContent = 'Remove';
        removeButton.style="background-color:blue;width:300px;font-size:18px;height:30px;border:none; cursor: pointer;color:white;"
        removeButton.style.marginTop='10px';
 
        removeButton.onclick = function() {
            removeTask(index);
        };
        todoCard.appendChild(removeButton);

        displaytodo.appendChild(todoCard);






    });
}

// Call updateDisplay() initially to load and display tasks from localStorage
updateDisplay();
