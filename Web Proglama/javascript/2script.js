// Tarayıcıların Depolama Alanları

// Local Stroge


// SetItem

localStorage.setItem("programlama","javascript");
localStorage.setItem("bilgisayar",7000);


// GetItem

// const value = localStorage.getItem("bilgisayar");
// console.log(value);
// console.log(typeof value);

// Clear Local Storage

// localStorage.clear();

//console.log(localStorage.getItem("klavye"));

if (localStorage.getItem("bilgisayar") === null){
    console.log("Sorgulanan veri bulunamadı!");
}
else{
    console.log("Sorgulanan veri bulundu.");
}
 