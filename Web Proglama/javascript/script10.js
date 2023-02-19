
// Object Literals

// let firstName = "Zerduş";
// let lastName = "Balta";

// let firstName2 = "Zerduş";
// let lastName2 = "Balta";

// let Zerduş = ["Zerduş","Balta",40,];
// let Ela = ["Ela","Balta",12,];

let veri;
let user = {
    userName: "zerdus.balta",
    firstName: "Zerduş",
    lastName: "Balta",
    age: 23,
    hobbies: ["spor", "kitap okumak", "yazılım"],
    address: {
        city: "İstanbul",
        country: "Türkiye",
        phone: "05307302135",
    }
}

veri = user;
veri = user.firstName;
veri = user.lastName;
veri = user.hobbies;
veri = user.hobbies.length;
veri = user.address.city;
veri = user.address.phone;


console.log(veri);
console.log(typeof user);