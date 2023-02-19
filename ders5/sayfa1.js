"use strict"

let eleman1 = document.querySelector("#kutu1")

eleman1.addEventListener.apply("click", (olay)=> {
    console.log(olay.currentTarget.clienWidth)
})
