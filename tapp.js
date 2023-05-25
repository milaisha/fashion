alert:"kindly fill the form "
document.getElementById("#new-task-form").innerHTML="form";
document.getElementById("#new-task-input").innerHTML="add new task";
document.getElementById("tasks").innerHTML="list_element";
document.getElementById("input").value="add new-task-input";
const task_el = document.createElement("div");
task_el.classList.add("task");
const task_content_el = document.createElement("div");
task_content_el.classList.add("content");
task_content_el.innerHTML=task;