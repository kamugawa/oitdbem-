
function addTask() {
    var input = document.getElementById("taskInput");
    var task = input.value;
    if (task.trim() === "") {
        alert("Por favor, insira uma tarefa válida.")
    };
    var ul = document.getElementById("taskList");
    var li = document.createElement("li");
    li.textContent = task;
    li.onclick = function() {
        this.classList.toggle("completed")
    };
    ul.appendChild(li);
    input.value = "";
}
