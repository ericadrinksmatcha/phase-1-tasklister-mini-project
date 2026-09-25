const form = document.getElementById("create-task-form");
        form.addEventListener("submit", (e) => {
          e.preventDefault();

          const newTask = e.target.elements["new-task-description"].value;

          buildToDo(newTask);
        });

        function buildToDo(task) {
          const li = document.createElement("li");
          li.textContent = task;

          const taskList = document.getElementById("tasks");
          taskList.appendChild(li);
        }