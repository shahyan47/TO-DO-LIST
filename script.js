const taskInput = document.getElementById('taskInput');
const addTask = document.getElementById('addTask');
const taskList = document.getElementById('taskList');
const themeToggle = document.getElementById('themeToggle');
const body = document.body;

addTask.addEventListener('click', () => {
  const task = taskInput.value.trim();
  if (task) {
    createTask(task);
    taskInput.value = '';
  }
});

function createTask(text) {
  const li = document.createElement('li');
  li.innerHTML = `
    <span>${text}</span>
    <button class="delete">❌</button>
  `;

  li.addEventListener('click', () => {
    li.classList.toggle('completed');
  });

  li.querySelector('.delete').addEventListener('click', (e) => {
    e.stopPropagation();
    li.remove();
  });

  taskList.appendChild(li);
}

// Theme toggle
themeToggle.addEventListener('click', () => {
  body.classList.toggle('dark');
  if (body.classList.contains('dark')) {
    themeToggle.textContent = '☀️';
  } else {
    themeToggle.textContent = '🌙';
  }
});
