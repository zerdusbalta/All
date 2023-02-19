// javascript


let saveEl = document.getElementById("save-el")
let countEl = document.getElementById("count-el")
let count = 0


function increment() {
    count += 1
    countEl.textContent = count
}

function save() {
    let countStr = count + " - "
    saveEl.textContent += countStr
    countEl.textContent = 0
    count = 0
}

console.log("Let's count people on the subway!")

/*
let myAge = 35
let humanDogRatio = 7

let myDogAge = myAge * humanDogRatio

console.log(myDogAge)
*/

/*
let bonusPoints = 50
console.log(bonusPoints)

bonusPoints = bonusPoints + 50
console.log(bonusPoints)

bonusPoints = bonusPoints - 75
console.log(bonusPoints)

bonusPoints = bonusPoints + 45
console.log(bonusPoints)
*/