const eleman1 = document.querySelector("p")

//alert(eleman1.dataset["puan"])

/*
buton1.addEventListener(  "click", () => {  
    const buton1 = document.querySelector("button");
    let sayi = buton1.dataset.sayac;
    let guncelSayi= parseInt ( sayi ) + 1;
    buton1.dataset.sayac = guncelSayi;
  } )
  */

const buton1 = document.querySelector("button");
buton1.addEventListener("click", (olay) => {
    const buton1 = olay.target;

    let sayi = buton1.dataset.sayac;
    let guncelSayi = parseInt(sayi) + 1;
    buton1.dataset.sayac = guncelSayi;

    let sayi2 = buton1.dataset.puan;
    let guncelSayi2 = parseInt(sayi2) - 10;
    buton1.dataset.puan = guncelSayi2;
})