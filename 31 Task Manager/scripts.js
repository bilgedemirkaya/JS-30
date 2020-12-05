
const form = document.querySelector("#taskForm");
let tasks = JSON.parse(localStorage.getItem('tasks')) || [];
const taskList =  document.getElementById("taskList"); 

const hours = new Date().getHours();
let hoursLeft;

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
  showTaskList()
  localStorage.setItem('tasks', JSON.stringify(tasks))
}

function showTaskList () {
    taskList.innerHTML = tasks.map((task, i) => {
        if (task.deadline == "today") {
            hoursLeft = 24 - hours;
        }
        else if (task.deadline == "tomorrow") {
            hoursLeft = 48 - hours;
        }
        else {
            hoursLeft = 72 - hours;
        }
        return `<li class="list"> 
        <div class="jumbotron"> 
        <p> <span class="label ${task.done === true ? "label-success" : "label-danger" }"> ${task.done == true ? `Done! ✔️ Worked for ${task.hours} hours` : "not completed"} </span></p>
        <div class="task"><h6> Task ID: ${task.id} </h6> <h2> <span style="font-weight:bold;"> Task : </span> ${task.taskName} </h2> 
        <h5> <span style="font-weight:bold;"> Description: </span>  ${task.description} </h3>
        </div>
        <div id="${task.done === true ? "rmv" : "" }">
        <p><span class="glyphicon glyphicon-time"></span>  ${task.deadline} ~ <span style="opacity:0.8; font-size:16px;" > ${hoursLeft} hours left </span> </p> 
        <button type="button" class="rm-btn btn btn-danger" data-index=${i}> Cancel Task </button> 
        <button type="button" class="done-btn btn btn-success" data-index=${i}> Set Task as Finished </button>
        </div>
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
    showTaskList()
}


function doneTask (e) {
    if(e.target.classList[0] !== 'done-btn') return; // select only done button
    //console.log(taskList.getElementsByTagName("li")[index]) // will grab whichever task you are clicking

    // create elements 
    const index = e.target.dataset.index;
    const target = taskList.getElementsByTagName("li")[index];
    const label = document.createElement('label');
    const inpt = document.createElement('input');
    const done = document.createElement("button");

    // add style to elements
    done.innerHTML = "OK"  
    done.style.backgroundColor = "green";
    done.style.color = "white";

    inpt.type = 'number'; 
    inpt.id = 'hour';
    label.textContent = 'How many hours you worked for it? '
    label.for = "hour";

    // append it to the target element
    target.appendChild(label);
    target.appendChild(inpt);
    target.appendChild(done);
    done.addEventListener("click",() => {
        if (inpt.value == "") {inpt.value = "0"; }
        tasks[index]["done"] = true;
        tasks[index]["hours"] = inpt.value;
        // console.log(tasks[index]);
        localStorage.setItem('tasks', JSON.stringify(tasks));
        showTaskList()
    });
}

// alert before deadline
if (hoursLeft == "1") {
    alert("You only have one hour to finish your task.")
}
// remove all
function removeAll () {
tasks = tasks.filter(function(task){
    return task.done == false;
});
localStorage.setItem('tasks', JSON.stringify(tasks));
showTaskList()
}

// event listeners
form.addEventListener("submit",addNewTask);
taskList.addEventListener("click",removeTask);
taskList.addEventListener("click",doneTask);
showTaskList()
