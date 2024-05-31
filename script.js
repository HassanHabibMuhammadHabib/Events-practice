document.addEventListener('DOMContentLoaded', () => {
    const taskInput = document.getElementById('taskInput');
    const addTaskBtn = document.getElementById('addTaskBtn');
    const taskList = document.getElementById('taskList');

    addTaskBtn.addEventListener('click', () => {
        const taskText = taskInput.value.trim();
        if (taskText) {
            addTask(taskText);
            taskInput.value = '';
            taskInput.focus();
        }
    });

    taskList.addEventListener('click', (event) => {
        if (event.target.tagName === 'BUTTON') {
            const taskItem = event.target.closest('.task');
            if (taskItem) {
                taskList.removeChild(taskItem);
            }
        } else if (event.target.tagName === 'LI') {
            event.target.classList.toggle('completed');
        }
    });

    function addTask(taskText) {
        const taskItem = document.createElement('li');
        taskItem.className = 'task';
        taskItem.textContent = taskText;

        const removeBtn = document.createElement('button');
        removeBtn.textContent = 'Remove';
        taskItem.appendChild(removeBtn);

        taskList.appendChild(taskItem);
    }
});
