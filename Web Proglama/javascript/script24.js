
// Keyboard Eventleri

const text = document.getElementById("txtTaskName");

// Focus
// text.addEventListener("focus",run);

// // Blur
// text.addEventListener("blur",run);

// Paste
// text.addEventListener("paste",run);

// // Copy
// text.addEventListener("copy",run);

// // Cut
// text.addEventListener("cut",run);

// Select
// text.addEventListener("select",run);

// KeyDown
// text.addEventListener("keydown",run);

// KeyUp
text.addEventListener("keyup",run);









function run(e){
    console.log(e.type);
    console.log(e.target.value);
}
