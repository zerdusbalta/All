
// Elementleri Üzerinde Gezinme

let value;

const todoList = document.querySelector(".list-group");
const todo = document.querySelector(".list-group-item:nth-child(2)");
const card = document.querySelector(".card");

value = todoList;
value = todo;
value = card;

// Child Nodes

value = todoList.childNodes;

value = todoList.children;
value = todoList.children[0];
value = todoList.children[todoList.children.length - 1];
value = todoList.children[1].textContent = "değişen madde";

value = card;
value = card.children;
value = card.children[1].children[0].textContent = "merhaba";

value = todoList;
//value = todoList.children[0];
value = todoList.firstElementChild;
value = todoList.lastElementChild;

value = todoList.children.length;
value = todoList.childElementCount;

value = card;
value = card.parentElement;
value = card.parentElement.parentElement;

value = todo;
value = todo.previousElementSibling;
value = todo.nextElementSibling;

value = todo.nextElementSibling.nextElementSibling;

value = todo.previousElementSibling.previousElementSibling;


console.log(value);