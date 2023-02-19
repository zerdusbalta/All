
// let kaan = {
//     name:"kaan",
//     yearOfBrith: 2008,
//     job : "student",
// }

// val = kaan;
// console.log(val);
// console.log(typeof val);

// function Student(name,yearOfBrith,job){
//     this.name = name;
//     this.yearOfBrith = yearOfBrith;
//     this.job = job;
//     //console.log(this);
//     this.calculateAge = function(){
//         return 2021 - this.yearOfBrith;
//     }
// }

let Student = function (name, yearOfBrith, job) {
    this.name = name;
    this.yearOfBrith = yearOfBrith;
    this.job = job;
    //console.log(this);
    this.calculateAge = function () {
        return 2021 - this.yearOfBrith;
    }
}

let kaan = new Student("Kaan", 2008, "Student");
let aylin = new Student("Aylin", 2006, "Student");

console.log(kaan.name);
console.log(kaan.yearOfBrith);
console.log(kaan.job);
console.log(kaan.calculateAge());

console.log("----------------");

console.log(aylin.name);
console.log(aylin.yearOfBrith);
console.log(aylin.job);
console.log(aylin.calculateAge());