const taskInput = document.getElementById("task-input");
const addBtn = document.getElementById("add-btn");
const taskList = document.getElementById("task-list");

addBtn.addEventListener("click", addTask);
taskInput.addEventListener("keypress", function(e) {
    if(e.key === "Enter") addTask();
});

function addTask() {
    const taskText = taskInput.value.trim();
    if(taskText === "") return;

    const li = document.createElement("li");
    li.textContent = taskText;

    const deleteBtn = document.createElement("button");
    deleteBtn.textContent = "×";
    deleteBtn.classList.add("delete-btn");
    deleteBtn.addEventListener("click", () => li.remove());

    li.appendChild(deleteBtn);
    taskList.appendChild(li);

    taskInput.value = "";
}
