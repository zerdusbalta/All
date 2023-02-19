
// STRINGS

const firstname = "Zerduş"
const lastname = "Balta"
const age = "23"
let hobbies = "yarış drift sinema spor kitap yazılım";

let veri;

//string concatenations

veri = firstname+" "+lastname;
veri = "Zerduş";
veri +=" Balta";

veri = 'Benim adım '+firstname+' '+lastname+' yaşım ' + age + ' ve İstabul\'da yaşıyorum.';

veri = firstname.concat(' ',lastname);

veri = veri.toUpperCase();
veri = veri.toLowerCase();

// veri = veri.substring(3,11);

// veri = veri.slice(1,8);

// veri = veri.indexOf("h");

// veri = veri.replace('zerduş','Ateş');

// veri = veri.length;

veri = hobbies.split(' ');


console.log(veri);
console.log(typeof veri);