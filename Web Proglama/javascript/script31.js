
// Prototype Tabanlı Miras Alma

let Person = function(name,yearOfBirth,job){
    this.name = name;
    this.yearOfBirth = yearOfBirth;
    this.job = job;
}

Person.prototype.calculateAge = function(){
    return 2021 - this.yearOfBirth;
}

let Teacher = function(name,yearOfBirth,job,subject){

    Person.call(this,name,yearOfBirth,job);
    this.subject = subject;
}

// Inherit the Person prototype methods

Teacher.prototype = Object.create(Person.prototype);


// set Teacher constructor

Teacher.prototype.constructor = Teacher;

let aylin = new Teacher("Aylin",1992,"Teacher","English");

console.log(aylin);
console.log(aylin.calculateAge());