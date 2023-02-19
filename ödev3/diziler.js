/*
let isim = "Ersoy";

let personel = {
    isim: "Ersoy",
    soyad: "Yılmaz",
    hizmetYiliHesapla: function () {
        //...
        //return ...;
    }
}

let isimler = ['Ersoy', 'Veli', 'Özlem'];
//let isimler1 = new Array( 'Ersoy', 'Veli', 'Özlem');

console.log(isimler[2]);

isimler[1] = "Yılmaz";

console.log(isimler[1]);
*/

let isimler = [
    'Ersoy',
    'Veli',
    'Özlem',
    'Derya'
];

isimler.unshift( 'Kaan', 'Eda' );
console.log(isimler);

let isim1 = isimler.shift()
console.log(isimler);

/*
dizinin sonuna ekleme veya dizinin sonundan eleman kaldırma
isimler.push( 'Okan', 'Eda' );
console.log(isimler);
isimler.pop();
console.log(isimler);
*/
//isimler.lenght = toplam eleman sayısı
/*
for (sayac= 0; sayac < isimler.length; sayac++ ){
 console.log("***" + isimler[sayac] + "***");
}
*/

/*

lenght = toplam eleman sayısı
push() = sona eleman ekleme
pop() = sondan eleman kaldırma
unshift() = başa eleman ekleme
shift() = baştan eleman kaldırma ve ekleme
*/