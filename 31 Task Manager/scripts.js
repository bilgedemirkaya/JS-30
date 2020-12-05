
const form = document.querySelector("#taskForm");
const tasks = JSON.parse(localStorage.getItem('tasks')) || [];
const taskList =  document.getElementById("taskList"); 

function addNewTask (e) {
    e.preventDefault();
    // select input values
    const taskName = document.getElementById("taskName").value;
    const description = document.getElementById("description").value;
    const deadline = document.getElementById("deadline").value;
    const assigned = document.getElementById("owner").value;
   
    function generateId () {
        return Math.random().toString(9).substring(2);
    }

   // console.log(taskName,description,deadline,assigned);
   const task = {
    id : generateId(),
    taskName,
    description,
    deadline,
    assigned,
    done : false,
    hoursToComplete: 0,
  }
  console.log(task);
  tasks.push(task);
 // console.log(tasks);
  addTaskToDom()
  localStorage.setItem('tasks', JSON.stringify(tasks))
}

function addTaskToDom () {
   // console.log(tasks);
    taskList.innerHTML = tasks.map((task, i) => {
        return `<li class="list"> 
        <div class="jumbotron"> 
        <p> <span class="label ${task.done === true ? "label-success" : "label-danger" }"> ${task.done == true ? "Done! ✔️" : "not completed"} </span></p>
        <div class="task"><h6> Task ID: ${task.id} </h6> <h2> <span style="font-weight:bold;"> Task : </span> ${task.taskName} </h2> 
        <h5> <span style="font-weight:bold;"> Description: </span>  ${task.description} </h3>
         </div>
        <p><span class="glyphicon glyphicon-time"></span>  ${task.deadline} </p>
        <button type="button" class="rm-btn btn btn-danger" data-index=${i}> Cancel Task </button> 
        <button type="button" class="done-btn btn btn-success" data-index=${i}> Set Task as Finished </button>
        <p style="float:right"><span class="glyphicon glyphicon-user"></span> ${task.assigned} </p>
        </div>
        </li>`; 
      }).join('')
}

function removeTask (e) {
    if(e.target.classList[0] !== 'rm-btn') return;
    // console.log(e.target.dataset);
    const index = e.target.dataset.index;
    tasks.splice(index,1);
    localStorage.setItem('tasks', JSON.stringify(tasks));
    addTaskToDom()
}


function doneTask (e) {
    if(e.target.classList[0] !== 'done-btn') return;
    const hours = document.querySelector('#time');
    console.log(hours);
    // ask how many hours 
    const index = e.target.dataset.index;
    console.log(tasks[index]["id"]);
     //console.log(taskList.getElementsByTagName("li")[index]) // will grab whichever task you are clicking
    const target = taskList.getElementsByTagName("li")[index];
    const label = document.createElement('label');
    const inpt = document.createElement('input');
    const done = document.createElement("button");
    done.innerHTML = "OK"  
    done.style.backgroundColor = "green";
    done.style.color = "white";
    inpt.type = 'number';
    inpt.id = 'hour';
    label.textContent = 'How many hours you worked for it?'
    label.for = "hour";
    target.appendChild(label);
    target.appendChild(inpt);
    target.appendChild(done);
}

function setAsFinished () {
    const index = e.target.dataset.index;
    // console.log(tasks[index]);
    tasks[index]["done"] = true;
    console.log(tasks[index]);
    localStorage.setItem('tasks', JSON.stringify(tasks));
    addTaskToDom()
}


// event listeners
form.addEventListener("submit",addNewTask);
taskList.addEventListener("click",removeTask);
taskList.addEventListener("click",doneTask);
addTaskToDom ()