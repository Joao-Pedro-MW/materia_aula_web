const taskInput = document.getElementById('taskInput');
const addButton = document.getElementById('addButton');
const taskList = document.getElementById('taskList');

let tasks = [];

const renderTasks = () => {
    taskList.innerHTML = '';
    
    tasks.forEach((task, index) => {
        const li = document.createElement('li');
        li.dataset.index = index;

        const checkbox = document.createElement('input');
        checkbox.type = 'checkbox';
        checkbox.className = 'task-checkbox';
        checkbox.checked = task.completed;

        const span = document.createElement('span');
        span.className = task.completed ? 'task-text completed' : 'task-text';
        span.textContent = task.text;

        li.appendChild(checkbox);
        li.appendChild(span);
        taskList.appendChild(li);
    });
};

const addTask = () => {
    const text = taskInput.value.trim();
    
    if (text) {
        tasks.push({ text, completed: false });
        taskInput.value = '';
        renderTasks();
    }
};

const handleListInteraction = (event) => {
    const li = event.target.closest('li');
    
    if (!li) return;

    const index = parseInt(li.dataset.index, 10);

    if (event.target.type === 'checkbox') {
        tasks[index].completed = event.target.checked;
        renderTasks();
        return;
    }

    tasks.splice(index, 1);
    renderTasks();
};

addButton.addEventListener('click', addTask);

taskInput.addEventListener('keypress', (event) => {
    if (event.key === 'Enter') addTask();
});

taskList.addEventListener('click', handleListInteraction);