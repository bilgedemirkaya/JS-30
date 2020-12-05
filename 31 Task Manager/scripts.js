
const form = document.querySelector("#taskForm");
const tasks = JSON.parse(localStorage.getItem('tasks')) || [];

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
    done : false
  }
  console.log(task);
  tasks.push(task);
 // console.log(tasks);
  addTaskToDom()
  localStorage.setItem('tasks', JSON.stringify(tasks))
}

function addTaskToDom () {
   // console.log(tasks);
    const taskList =  document.getElementById("taskList"); 
    taskList.innerHTML = tasks.map((task, i) => {
        return `<li class="list"> 
        <div class="jumbotron"> 
       
        <p> <span class="label label-danger"> ${task.done === true ? "done" : "not completed"} </span></p>
        
        <div class="task"><h6> Task ID: ${task.id} </h6> <h2> <span style="font-weight:bold;"> Task : </span> ${task.taskName} </h2> 
        <h5> <span style="font-weight:bold;"> Description: </span>  ${task.description} </h3>
         </div>
        <p><span class="glyphicon glyphicon-time"></span>  ${task.deadline} </p>
        <button type="button" class="rm-btn btn btn-danger" data-index=${i}> Cancel Task </button> 
        <button type="button" class="done-btn btn btn-success" data-index=${i}> Done </button> 
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


// event listeners
form.addEventListener("submit",addNewTask);
taskList.addEventListener("click",removeTask)
addTaskToDom ()