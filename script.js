function addTask() {
    const input = document.getElementById('taskInput');
    const taskText = input.value.trim();

    if (!taskText) return;

    const li = document.createElement('li');
    li.innerHTML = `${taskText} <button onclick="completeTask(this)">✔</button>`;

    document.getElementById('taskList').appendChild(li);  // Removed quotes around 'li'

    input.value = '';

    updateProgress();  // Fixed function name
}

function completeTask(button) {
    const li = button.parentElement;
    li.classList.toggle('completed'); // Fixed typo: classlist → classList, toogle → toggle
    updateProgress();  // Fixed function name
}

function updateProgress() {
    const allTasks = document.querySelectorAll('#taskList li');
    const completed = document.querySelectorAll('#taskList li.completed');

    const percent = allTasks.length
        ? (completed.length / allTasks.length) * 100  // Fixed: used addTask.length (wrong), should be allTasks.length
        : 0;

    document.getElementById('progressBar').style.width = `${percent}%`;
}
