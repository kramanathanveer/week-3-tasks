function addTask(){
    const task = prompt("Enter the new task:");
    if(task){
        if(task.trim() != ""){
            const listObj = document.createElement("li");
            const listText = document.createTextNode(task);
            const checkBox = document.createElement("input");
            checkBox.type = "checkbox";
            checkBox.class = "select";
            listObj.appendChild(checkBox);
            listObj.appendChild(listText);
            const ul = document.querySelector("#task-container");
            ul.appendChild(listObj);
        }
        
    }
    
}
function completeTask(){
    const selectedTasks =  document.querySelectorAll('input[type="checkbox"]:checked');
    if(selectedTasks.length == 0){
        alert("No task selected");
    }
    else{
        selectedTasks.forEach(task =>{
            let listItem = task.parentElement;
            listItem.remove();
        });
    }
    
}