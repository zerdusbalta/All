
// Object.create

let personProto = {
    calculateAge : function(){
        return 2021 - this.yearOfBirth;
    }
}

let kaan = Object.create(personProto);

kaan.name = "Kaan";
kaan.yearOfBirth = 2006;
kaan.job = "Student";

let aylin = Object.create(personProto,{
       name : {value : "Aylin"},
       yearOfBirth : {value : 1993},
       job : {value : "Teacher"},
});

console.log(kaan);
console.log(kaan.calculateAge());

console.log(aylin);
console.log(aylin.calculateAge());