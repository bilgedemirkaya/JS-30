
const form = document.querySelector("#taskForm");

function addNewTask (e) {
    e.preventDefault();
    // select input values
    const task = document.getElementById("taskName").value;
    const description = document.getElementById("description").value;
    const deadline = document.getElementById("deadline").value;
    const assigned = document.getElementById("owner").value;
    console.log(task,description,deadline,assigned);
}
// event listener
form.addEventListener("submit",addNewTask);