// script.js

function addTask() {
    const taskInput = document.getElementById('task-input');
    const taskList = document.getElementById('task-list');
    const taskText = taskInput.value.trim();

    if (taskText !== '') {
        const li = document.createElement('li');
        li.innerHTML = `<input type="checkbox" onclick="doneTask(this)"> ${taskText}<i class='bx bx-trash' onclick="deleteTask(this)"></i>`;
        taskList.appendChild(li);
        taskInput.value = '';
        updateTaskCounts();
    }
}

function doneTask(checkbox) {
    const li = checkbox.parentElement;
    if (checkbox.checked) {
        li.classList.add('checked');
    } else {
        li.classList.remove('checked');
    }
    updateTaskCounts();
}

function deleteTask(icon) {
    const li = icon.parentElement;
    li.classList.add('pop-out');
    li.addEventListener('animationend', () => {
        li.remove();
        updateTaskCounts();
    });
}

function updateTaskCounts() {
    const taskList = document.getElementById('task-list');
    const tasks = taskList.getElementsByTagName('li');
    let completedCount = 0;
    let incompleteCount = 0;

    for (let task of tasks) {
        if (task.classList.contains('checked')) {
            completedCount++;
        } else {
            incompleteCount++;
        }
    }

    document.getElementById('completed-count').innerText = completedCount;
    document.getElementById('incomplete-count').innerText = incompleteCount;
}

// Initial count update
updateTaskCounts();