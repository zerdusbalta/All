/*
console.log("Hoş Geldiniz.")
alert("Siteye Hoşgeldiniz !")
console.error("Hata oluştu !")
console.warn("Bir uyarı aldınız..")

console.clear()
*/

// Değişkenler

/*
var password;
console.log(password)

password = "zerdusblt"
console.log(password)

yas = 25
console.log(yas)

// Değişken Tanımlama Kuralalrı

// Değişken isimleri rakam ile başlayamaz.
// Değişken isimlerinde komut isimleri kullanılamaz.
// Değişken isimlerinde türkçe karakter kullanılmamalı.

yas1 = 30;

var adSoyad;
adSoyad = "Zerdus Balta"
console.log(adSoyad)

const email = "1234@gmail.com"
console.log(email)

email = "5678@gmail.com"
console.log(email)
*/

// Değişken Türleri

// Primitive Types

// String


/*
let firstName = "Zerdus";
console.log(typeof firstName)

// Number

let age = 30;
console.log(typeof age)

// Boolean

let kredi_kullanimi = false;
console.log(typeof kredi_kullanimi)

// undefined

let phone ;
console.log(typeof phone)

// Reference Types : Object

// Array

let liste = ["Aslı","Sertaç","Kerem"]
console.log(typeof liste)

// Object Literals

let address = {
    city: "İstanbul",
    country: "Türkiye",

}

console.log(typeof address)

var hesapla = function(){
    return 0;
}

console.log(typeof hesapla)
*/


/*
// Operatörler


let veri;
const a=20;
const b=10;
const c=5;
let d=3;

// 1. Aritmatik Operatörler

veri = a+b;
veri = a-b;
veri = a*b;
veri = a/b;
veri = ++d;
veri = --d;
veri = a%b;

// 2. Atama Operatörleri

veri = a;
veri +=a; // veri = veri + a;
veri -=a; // veri = veri - a;
veri *=a; // veri = veri * a;
veri /=a; // veri = veri / a;
veri %= a; // veri = veri % a;

// 3. Karşılaştırma Operatörleri

veri = a==b;
veri = b==c;
veri = 5===5;
veri = a!=b;
veri = a!==b;
veri = a>b;
veri = b<c;
veri = 5 >= 5 ;
veri= b <= c;

// 4. Mantıksal Operatörler

// && (and)

veri = (a>b) && (a>c)

// || (or)

veri = (b>a) || (a>c)

 // ! (not)

 veri = !(a<b)

console.log(veri);
console.log(typeof veri);
*/

/*
// Date Object

let zaman = new Date();
let birthday = new Date(1999,13.25)

// Set Methods

zaman.setDate(31);
zaman.setMonth();
zaman.setFullYear(2023);
zaman.setHours(7);
zaman.setMinutes(25);


// Get Methods

console.log(zaman.getMonth());
console.log(zaman.getDate());
console.log(zaman.getFullYear());
console.log(zaman.getDay());
console.log(zaman.getHours());
console.log(zaman.getMinutes());
console.log(zaman.getSeconds());
console.log(zaman.getMilliseconds());

console.log(zaman.getFullYear() - birthday.getFullYear());

console.log(zaman);
console.log(typeof zaman);

*/
/*
// Numbers

let veri ;

// veri = Number("5");
// veri = parseInt("5");
// veri = parseFloat("5.5");
// veri = parseInt("5c");
// veri = parseInt("c5");
// veri = isNaN("c5");
// veri = isNaN("5");

var sayi = 15.42356345;
veri = sayi.toPrecision(3);
veri = sayi.toFixed(4);

veri = Math.PI;
veri = Math.round(3.5);
veri = Math.round(3.2);
veri = Math.ceil(4.2);
veri = Math.floor(5.8);
veri = Math.pow(3,4);
veri = Math.sqrt(196);
veri = Math.abs(-50);
veri = Math.min(2,4,6,7,3,2,1,6,8);
veri = Math.max(2,4,6,7,3,2,1,6,8);
veri = Math.floor(Math.random()*120+1);

console.log(veri);
console.log(typeof veri);
*/

/*
// Strings

const firstName = "Zerdus";
const lastName = "Balta";
const age = "23";
let hobbies = "drift sinema kitap yazılım";

let veri ;

// string concatenations (birleştirme)

veri = firstName+" "+lastName;
veri = "Zerdus";
veri +=" Balta"

veri = 'Benim adım '+firstName+ ' '+lastName+' yaşım '+ age + ' ve İstanbul\'da yaşıyorum.'

veri = firstName.concat(' ', lastName);

veri = veri.toUpperCase();
veri = veri.toLowerCase();

// veri = veri.substring(3,6);

//veri = veri.slice(1,8);

// veri = veri.indexOf("j")

// veri = veri.replace('zerdus','Ateş');

// veri = veri.length;

veri = hobbies.split(' ');

console.log(veri);
console.log(typeof veri);
*/

/*
// Arrays

let names = ["Zerdus", "Arda", "Kerem", "Aslı"];
let years = [1994, 1992, 1997, 1996];
let mix = ["Zerdus", "Balta", 1999, null, undefined, ["Programlama", "Cs"]];


console.log(names);
console.log(names, length);
console.log(typeof names);

console.log(years);
console.log(mix);

// get array item

console.log(names[3]);

// set array item

names[1] = "Levent";
names[names.length] = "Mehmet";
console.log(names);

// add item

names.push("Zafer");
names.unshift("Zeki");
console.log(names);

// remove item

years.pop();
console.log(years);

years.shift();
console.log(years);

// indexOf

let index = names.indexOf("Zerdus")
console.log("index:" + index);

names.reverse()
console.log(names);

years.sort();
console.log(years);

let veri = names.concat(years);
console.log(veri);

names.splice(2,1,"Kader");
console.log(names);
*/

// Koşullu Durumlar ( if- else )

const firstName = "Çağla";
const userName = "caglayilmaz";
const age = 20;
const isStudent = true;
const school = "university";

if (userName == "caglayilmaz"){
  console.log("Merhaba Çağla");
} else {
    console.log("Kullanıcı Sistemde Bulunamadı.")
}

if (age === 20){
    console.log("Yaşınız : 20");
}