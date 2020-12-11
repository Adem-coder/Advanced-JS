/********************Creating Objects function Constructors**************************/

var john = {
    name: 'John',
    yearOfBirth: 1998,
    job: 'student'
};

var Person = function (name, yearOfBirth, job){
    this.name = name;
    this.yearOfBirth = yearOfBirth;
    this.job = job;
}
// Inheritance
Person.prototype.calculateAge = function() {
console.log(2016 - this.yearOfBirth);
};

Person.prototype.lastName = 'Smith';

var john = new Person ('John', 1998, 'student');
var jane = new Person('Jane', 1969, 'designer');
var mark = new Person('Mark', 1948, 'retired');

john.calculateAge();
jane.calculateAge();
mark.calculateAge();

console.log(john.lastName);
console.log(jane.lastName);
console.log(mark.lastName);