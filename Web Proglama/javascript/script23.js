
// Mouse Eventleri

const btn = document.querySelector("#btnAddNewTask");
const ul = document.querySelector("#task-list");

// click event

// btn.addEventListener("click",run);
// ul.addEventListener("click",run);

// double click event

// btn.addEventListener("dblclick",run);

// mouse down event

// btn.addEventListener("mousedown",run);


// // mouse up event

// btn.addEventListener("mouseup",run);

// mouseenter event

// ul.addEventListener("mouseenter", run);

// // // mouse leave event

// ul.addEventListener("mouseleave",run);

// // mouseover 

// ul.addEventListener("mouseover",run);

// // mouse out event

// ul.addEventListener("mouseout",run);

// mouse move event

ul.addEventListener("mousemove",run);






function run(event) {
    console.log(`event type: ${event.type}`);
}