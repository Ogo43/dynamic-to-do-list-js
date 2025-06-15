// Run this code only after the DOM has fully loaded

document.addEventListener("DOMContentLoaded", function () {
  const addButton = document.getElementById("add-task-btn");
  const taskInput = document.getElementById("task-input");
  const taskList = document.getElementById("task-list");

  // Function to add a task to the list

  function addTask() {
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
    };
    
    // Append button to list item and list item to task list
    taskList.appendChild(li);
    li.appendChild(removeBtn);

    // Clear input field
    taskInput.value = "";
  };
   
  // Event listener for Add button
  addButton.addEventListener("click", addTask);

    taskInput.addEventListener("keypress", function (event) {
      if (event.key === "Enter") {
        addTask();
      }
    });
});
