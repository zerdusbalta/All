
// Todo Eleman Ekleme

// Eleman Seçimi

const form = document.querySelector("form");
const input = document.querySelector("#txtTaskName");
const btnAddNewTask = document.querySelector("#btnNewTask");
const btnDeleteAll = document.querySelector("#btnDeleteAll");
const taskList = document.querySelector("#task-list");
let todos;



// load items
loadItems();


eventListeners();

function eventListeners() {
    // submit event
    form.addEventListener("submit", addNewItem)
    // delete an item
    taskList.addEventListener("click", deleteItem);
    // delete all item
    btnDeleteAll.addEventListener("click", deleteAllItems);

}

function loadItems() {
    todos = getItemsFromLS();
    todos.forEach(function (item) {
        creatItem(item);
    })

}

// get items from local storage

function getItemsFromLS() {

    if (localStorage.getItem("todos") === null) {
        todos = [];
    }
    else {
        todos = JSON.parse(localStorage.getItem("todos"));
    }
return todos;
}

// set item to local Storage
function setItemToLS(newTodo){
todos = getItemsFromLS();
todos.push(newTodo);
localStorage.setItem("todos",JSON.stringify(todos));
}



function creatItem(newTodo) {
    // li oluşturma

    const li = document.createElement("li");
    li.className = "list-group-item list-group-item-secondary";
    li.appendChild(document.createTextNode(newTodo));

    // a oluşturma

    const a = document.createElement("a");
    a.classList = "delete-item float-right";
    a.setAttribute("href", "#");
    a.innerHTML = `<i class="fas fa-times"></i>`;

    li.appendChild(a);

    taskList.appendChild(li);
}


function addNewItem(e) {
    if (input.value === ``) {
        alert("add new item");
        // console.log("submit");
    }

    // create Item

    creatItem(input.value);

    setItemToLS(input.value);


    input.value = "";



    e.preventDefault();
}

// Eleman Silme

function deleteItem(e) {

    if (e.target.className === "fas fa-times") {
        if (confirm("Silmek İstediğinize Emin Misiniz?")) {
            // console.log(e.target);
            e.target.parentElement.parentElement.remove();
            deleteTodoFromStorage(e.target.parentElement.parentElement.textContent);
        }
    }
    e.preventDefault();
}


function deleteTodoFromStorage(deletetodo){
    let todos = getItemsFromLS();
    
    todos.forEach(function(todo,index){
        if(todo === deletetodo){
            todos.splice(index,1);
        }
    });
    localStorage.setItem("todos", JSON.stringify(todos));

}

// Tüm Elemanları Silmek

function deleteAllItems(e) {

    if (confirm("Tüm Elemanları Silmek İstediğinize Emin Misiniz?")) {
    
 while(taskList.firstChild){
    taskList.removeChild(taskList.firstChild);
 }
 localStorage.clear();


    }
    //taskList.innerHTML="";
}