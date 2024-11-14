document.getElementById('taskForm').addEventListener('submit', function(e) {
    e.preventDefault();
    const taskInput = document.getElementById('taskInput');
    const taskText = taskInput.value.trim();

    if (taskText !== '') {
        addTask(taskText);
        taskInput.value = ''; 
    }
});

function addTask(taskText) {
    const taskList = document.getElementById('taskList');

    const taskItem = document.createElement('li');
    taskItem.className = 'list-group-item d-flex justify-content-between align-items-center todo';
    taskItem.innerText = taskText;

    const actionsDiv = document.createElement('div');

    const btnTodo = createStatusButton('To Do', 'todo', taskItem);
    const btnDoing = createStatusButton('Doing', 'doing', taskItem);
    const btnDone = createStatusButton('Done', 'done', taskItem);

    actionsDiv.appendChild(btnTodo);
    actionsDiv.appendChild(btnDoing);
    actionsDiv.appendChild(btnDone);
    taskItem.appendChild(actionsDiv);

    taskList.appendChild(taskItem);
}

function createStatusButton(text, statusClass, taskItem) {
    const button = document.createElement('button');
    button.innerText = text;
    button.className = 'btn btn-sm mx-1 btn-outline-secondary';

    button.addEventListener('click', function() {
        taskItem.className = `list-group-item d-flex justify-content-between align-items-center ${statusClass}`;
    });

    return button;
}