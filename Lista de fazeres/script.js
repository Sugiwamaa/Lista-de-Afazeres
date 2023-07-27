const form = document.getElementById('task-form');
const taskList = document.getElementById('tasks');

form.onsubmit = function (e) {
  e.preventDefault();
  const inputField = document.getElementById('task-input');
  addTask(inputField.value);
  form.reset();
};

function addTask(description) {
  const taskContainer = document.createElement('div');
  const newTask = document.createElement('input');
  const taskLabel = document.createElement('label');
  const taskDescriptionNode = document.createTextNode(description);
  const removeButton = document.createElement('button'); // New button element for removal

  newTask.setAttribute('type', 'checkbox');
  newTask.setAttribute('name', description);
  newTask.setAttribute('id', description);

  taskLabel.setAttribute('for', description);
  taskLabel.appendChild(taskDescriptionNode);

  taskContainer.classList.add('task-item');
  taskContainer.appendChild(newTask);
  taskContainer.appendChild(taskLabel);
  taskContainer.appendChild(removeButton); // Append the remove button to the task container

  removeButton.textContent = 'Está feito!'; // Set the button text

  // Add a click event to the remove button to handle removal
  removeButton.addEventListener('click', () => {
    removeTask(taskContainer);
  });

  taskList.appendChild(taskContainer);
}

function removeTask(taskContainer) {
  taskList.removeChild(taskContainer);
}
