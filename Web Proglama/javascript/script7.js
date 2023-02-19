
// Arrays

let names = ["Zerduş", "Ateş", "Devrim", "Yılmaz"];
let years = [1999, 1998, 1997, 1996];
let mix = ["Zerduş", "Balta", 1990, null, undefined, ["Programlama", "Basketbol"]];

console.log(names);
console.log(names.length);
console.log(typeof names);


console.log(years);

console.log(mix);

// get array item

console.log(names[3]);

// set array item 

names[1] = "Bahtiyar"

names[names.length] = "Ahmet"
console.log(names);

// add item

names.push("Leyla");


names.unshift("Ela");
console.log(names);

// remove item

years.pop();
console.log(years);

years.shift();
console.log(years);

// indexOf

 let index= names.indexOf("Leyla")
 console.log("index :" + index);

 names.reverse();
 console.log(names);

 years.sort();
 console.log(years);

 names.sort();
 console.log(names);

 let veri = names.concat(years);
 console.log(veri);

 names.splice(2,0,"Kadri");
 console.log(names);

 names.splice(0,1,"Selin");
 console.log(names);