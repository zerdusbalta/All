
function ucgenAlan( taban, yukseklik){
 let alan = taban * yukseklik / 2;
 return alan;
}

let sonuc = ucgenAlan( 20, 30);

console.log(sonuc);

/*
function tutarHesapla(sa, bf, KDV = 0.08) {
    let siparisAdet = sa;
    let birimFiyat = bf;


    let KDVsizTutar = siparisAdet * birimFiyat;
    let KDVliTutar = KDVsizTutar + (KDVsizTutar * KDV);

    console.log("KDVsiz tutar: " + KDVsizTutar);
    console.log("KDVli tutar: " + KDVliTutar);
}

tutarHesapla(5, 35, 0.18);
tutarHesapla(5, 35 );
*/
/*
function merhabaYazdir(){
    console.log('Merhaba');
}

merhabaYazdir();
*/