
// Element Güncelleme

const cardHeader = document.querySelector(".card-header");

const h2 = document.createElement("h2");
h2.setAttribute("class","card-header");
h2.appendChild(document.createTextNode("Yeni Listeler"));

const parent = document.querySelector(".card");
parent.replaceChild(h2,cardHeader);

// Class'larda Güncelleme

const taskList = document.querySelector("#task-list");

let value;

link = taskList.children[0].children[0];

value = link.className;
value = link.classList;
// value = link.classList[0];
// value = link.classList[1];

link.classList.add("new");
link.classList.remove("new");

// Attribute Güncelleme

value = link.getAttribute("href");
value = link.setAttribute("href","http://instagram.com/zerduss.balta");

value = link.hasAttribute("href");



console.log(value);