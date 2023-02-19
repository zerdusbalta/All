
// Elementlerin Seçilmesi

// -- Tek Element Seçimi --

// documents.getElementById() metodu

let veri;

// veri = document.getElementById("header");
// veri = document.getElementById("header").id;
// veri = document.getElementById("header").className;

// veri = document.getElementById("header");

// // veri = veri.id;
// //veri = veri.className;

// veri.style.color = "red";
// veri.style.fontSize = "50px";
// //veri.style.fontWeight = "bold";
// //veri.style.display = "none";

// document.getElementById("header").innerText = "Yapılacaklar";

// document.getElementById("header").innerText = "<b> ToDo List<b>";

// document.getElementById("header").innerHTML = "<b> ToDo List<b>";

// console.log(veri);


// document.querySelector() metodu

//console.log(document.querySelector("#header"));

//console.log(document.querySelector(".card-header"));

//console.log(document.querySelector("div"));

// document.querySelector("li").style.color = "blue";
// document.querySelector("li:last-child").style.color = "red";
// document.querySelector("li:nth-child(2)").style.color = "green";
// document.querySelector("li:nth-child(3)").style.color = "yellow";

document.querySelector("li").className = "list-group-item list-group-item-primary";

documenü.querySelector("li").classList.add("active");