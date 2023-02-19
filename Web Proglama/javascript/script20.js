

// Element Silme

const taskList = document.querySelector("#task-list");

//taskList.remove();

//taskList.childNodes[7].remove();

//taskList.children[2].remove();

//taskList.removeChild(taskList.children[0]);

// Attribute Silme

//taskList.children[0].removeAttribute("class");

for(let i=0;i<taskList.children.length;i++){
    taskList.children[i].removeAttribute("class");
}

console.log(taskList);