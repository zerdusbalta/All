let siparis1 = '3 30 Koza Mah. Ahmet Yılmaz';
let siparis2 = '5 15 Ceylan Mah. Derya Yalın';

let siparis3 = { siparisAdet: 3, urunFiyat: 30, adres: 'Koza Mah', musteri: 'Ahmet Yılmaz' }
let siparis4 = {
    siparisAdet: 5,
    urunFiyat: 15,
    adres: 'Ceylan Mah',
    musteri: 'Derya Yalın',
    tutarHesapla:function(){
        return this.siparisAdet * this.urunFiyat;
    }
}

console.log(siparis3.musteri)
console.log(siparis4['musteri'])
console.log(siparis4.tutarHesapla());
console.log(Math.max( 21, 34, 35, 586, 399, 241));