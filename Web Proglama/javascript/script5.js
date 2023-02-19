
// control+k control+c işaretlediğin maddeleri yorum yapar 

// NUMBERS 

let veri;

// veri = Number("5");
// veri = parseInt("5");
// veri = parseFloat("5.5");
// veri = parseInt("5c");
// veri = parseInt("c5");
// veri = isNaN("c5");
// veri = isNaN("5");

var sayi = 15.2352351244;
veri = sayi.toPrecision(5);
veri = sayi.toFixed(4);

veri = Math.PI;
veri = Math.round(3.5);
veri = Math.round(5.2);
veri = Math.ceil(3.2);
veri = Math.floor(4.8);
veri = Math.pow(3,2);
veri = Math.pow(3,4);
veri = Math.sqrt(81);
veri = Math.abs(-50);
veri = Math.min(24,45,765,123,34,36)
veri = Math.max(24,45,56,672,2354,556,2020)
veri = Math.random()*10;
veri = Math.floor(Math.random()*11+1);

console.log(veri);
console.log(typeof veri);