let tasks = JSON.parse(localStorage.getItem("tasks")) || [];

displayTasks();

function addTask(){

const text=document.getElementById("taskInput").value;
const date=document.getElementById("taskDate").value;
const time=document.getElementById("taskTime").value;

if(text===""){
alert("Please enter a task");
return;
}

tasks.push({
text:text,
date:date,
time:time,
completed:false
});

saveTasks();

document.getElementById("taskInput").value="";
document.getElementById("taskDate").value="";
document.getElementById("taskTime").value="";

displayTasks();

}

function displayTasks(){

const list=document.getElementById("taskList");

list.innerHTML="";

tasks.forEach((task,index)=>{

const li=document.createElement("li");

if(task.completed){
li.classList.add("completed");
}

li.innerHTML=`

<div>

<b>${task.text}</b><br>

<small>${task.date} ${task.time}</small>

</div>

<div class="actions">

<button class="complete" onclick="toggleComplete(${index})">✓</button>

<button class="edit" onclick="editTask(${index})">Edit</button>

<button class="delete" onclick="deleteTask(${index})">Delete</button>

</div>

`;

list.appendChild(li);

});

}

function toggleComplete(index){

tasks[index].completed=!tasks[index].completed;

saveTasks();

displayTasks();

}

function editTask(index){

const newTask=prompt("Edit Task",tasks[index].text);

if(newTask!==null && newTask.trim()!==""){

tasks[index].text=newTask;

saveTasks();

displayTasks();

}

}

function deleteTask(index){

tasks.splice(index,1);

saveTasks();

displayTasks();

}

function saveTasks(){

localStorage.setItem("tasks",JSON.stringify(tasks));

}