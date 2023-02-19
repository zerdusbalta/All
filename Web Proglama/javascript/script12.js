
// Dizi ve Objelerde Döngü Kullanımı

let citys = ["İstanbul", "Ankara", "İzmir", "Eskişehir", "Bursa"];

let users = [
    { firstName: "Aslı", lastName: "Yılmaz" },
    { firstName: "Kerem", lastName: "Bilgin" },
    { firstName: "Tolga", lastName: "Mertoğlu" },
    { firstName: "Derya", lastName: "Şahin" },
]

// Arrays 

// for(let i=0;i<citys.length;i++){
//     console.log(citys[i]);
// }

//for-in metodu

// for(let i in citys){
//     console.log(`index: ${i} value: ${citys[i]}`);
// } 

// citys.forEach(function (item) {
//     console.log(item);
// })

// for (let i=0; i<users.length; i++){
//     console.log(users[i].lastName);
// }

// for( let i in users){
//     console.log(`index: ${i} value: ${users[i].firstName}`);
// }

// map: returns an array

// let veri = users.map(function (item) {
//     return item.firstName + " " + item.lastName;
// });

// console.log(veri);

let numbers = [1, 3, 5, 9, 12];

let num = numbers.map(function (n){
    return n*n;
});

console.log(num)