
// PROTOTYPE

let Person = function (name, yearOfBirth, job) {
    this.name = name;
    this.yearOfBirth = yearOfBirth;
    this.job = job;


}

let aylin = new Person("Aylin", 1992, "Teacher");
let kaan = new Person("Kaan",2007,"Student");

Person.prototype.calculateAge = function () {

    return 2021 - this.yearOfBirth;
}

Person.prototype.getName = function(){
    return this.name;
}

console.log(aylin.calculateAge());
console.log(aylin);
console.log(aylin.getName());

console.log("---------------");

console.log(kaan.getName());
console.log(kaan);
console.log(kaan.calculateAge());