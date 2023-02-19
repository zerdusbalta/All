
// Fonksiyonlar (functions)

// function merhaba (){
//     console.log("Merhaba")
// }

// merhaba();

// function merhaba(name,age){
//     console.log(`İsim: ${name} Yaş: ${age}`);
// }

// merhaba("Zerduş",37);
// merhaba("Ela",23);
// merhaba("Leyla",24);

function yasHesapla(dogumYili) {
    return 2021 - dogumYili;
}



let ageBahtiyar = yasHesapla(1985);
let ageZerduş = yasHesapla(1992);
let ageLeyla = yasHesapla(1995);

// console.log(ageBahtiyar);
// console.log(ageZerduş);
// console.log(ageLeyla);

function ehliyetAlabilmeDurumu(dogumYili, isim) { 
    let yas = yasHesapla(dogumYili);
    let ehliyet = 18 - yas;

    if (ehliyet>0){
        console.log(`${isim} ehliyet alabilmenize ${ehliyet} yıl kaldı`);
    }else{
        console.log("Ehliyet alabilirsiniz.");
    }
}

ehliyetAlabilmeDurumu(1985,"Bahtiyar");
ehliyetAlabilmeDurumu(2005,"Zerduş");
ehliyetAlabilmeDurumu(2004,"Leyla");