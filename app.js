const descInput = document.querySelector('.desc');
const dateInput = document.querySelector('.dateInput');
const addButton = document.querySelector('.input-task button[type="submit"]');

addButton.addEventListener("click", saveTask);

function saveTask() {
  const description = descInput.value.trim();
  const dueDate = dateInput.value;
  let tasks = JSON.parse(localStorage.getItem('tasks')) || [];

  if (description && dueDate) {
    const task = {
      description,
      dueDate
    };
    tasks.push(task);
    localStorage.setItem('tasks', JSON.stringify(tasks));

    // Clear the input fields
    descInput.value = '';
    dateInput.value = '';
  }
}

function getTasks() {
  return JSON.parse(localStorage.getItem('tasks')) || [];
}

console.log(getTasks());


// Now Lets Render the task here

function renderTasks() {
  const taskTable = document.querySelector('.task-list');
  const tableBody = taskTable.querySelector('tbody');

  if(!tableBody){
    const newTableBody = document.createElement('tbody');
    taskTable.appendChild(newTableBody);
    tableBody = newwTableBody;
  }

  tableBody.innerHTML
  
}