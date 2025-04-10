

let tasks = [];

function addTask() {
  const task = document.getElementById("taskInput").value;
  const date = document.getElementById("dateInput").value;
  const weight = parseInt(document.getElementById("weightInput").value);

  if (!task || !date || isNaN(weight)) {
    alert("Please fill out all fields correctly.");
    return;
  }

  tasks.push({ task, date, weight });
  displayTasks();

  // Clear input fields
  document.getElementById("taskInput").value = "";
  document.getElementById("dateInput").value = "";
  document.getElementById("weightInput").value = "";
}

function displayTasks() {
  const list = document.getElementById("taskList");
  list.innerHTML = "";

  tasks.forEach((t) => {
    list.innerHTML += `
      <div class="task">
        <span><strong>Task:</strong> ${t.task}</span>
        <span><strong>Date:</strong> ${t.date}</span>
        <span><strong>Weight:</strong> ${t.weight}</span>
      </div>
    `;
  });
}

function sortByWeight() {
  tasks.sort((a, b) => a.weight - b.weight);
  displayTasks();
}


