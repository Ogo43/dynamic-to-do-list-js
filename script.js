// Run this code only after the DOM has fully loaded

document.addEventListener("DOMContentLoaded", function () {

    // Load saved tasks from localStorage when the page loads
  loadTasks();

  
  const addButton = document.getElementById("add-task-btn");
  const taskInput = document.getElementById("task-input");
  const taskList = document.getElementById("task-list");
  
  // Load tasks from localStorage and render them
  function loadTasks() {
    const storedTasks = JSON.parse(localStorage.getItem('tasks') || '[]');
    storedTasks.forEach(taskText => addTask(taskText, false)); // Don't save again
  }
  // Function to add a task to the list

  function addTask(taskText = null, save = true) {
    let taskText = taskInput.value.trim();

    if (taskText === "") {
      alert("Please enter a task");
      return; // Stop if input is empty
    }

    // Create new <li> element
    let li = document.createElement("li");
    li.textContent = taskText;
    li.classList.add("task-item");

    // Create remove button
    let removeBtn = document.createElement("button");
    removeBtn.textContent = "Remove";
    removeBtn.classList.add("remove-btn");
    
    // Add event listener to remove button
    removeBtn.onclick = function () {
        taskList.removeChild(li);
        removeTaskFromStorage(text);
    };
    
    // Append button to list item and list item to task list
    taskList.appendChild(li);
    li.appendChild(removeBtn);

    // Clear input field
    taskInput.value = "";

    // Save to Local Storage if applicable
    if (save) {
      const storedTasks = JSON.parse(localStorage.getItem('tasks') || '[]');
      storedTasks.push(taskText);
      localStorage.setItem('tasks', JSON.stringify(storedTasks));
    }
  };

   // Remove task from localStorage
  function removeTaskFromStorage(taskText) {
    let storedTasks = JSON.parse(localStorage.getItem('tasks') || '[]');
    storedTasks = storedTasks.filter(task => task !== taskText);
    localStorage.setItem('tasks', JSON.stringify(storedTasks));
  }
   
  // Event listener for Add button
  addButton.addEventListener("click", addTask);

    taskInput.addEventListener("keypress", function (event) {
      if (event.key === "Enter") {
        addTask();
      }
    });
});




