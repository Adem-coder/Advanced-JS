/********************Creating Objects function Constructors**************************/
/*
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
*/
/*****************************Creating Objects Object.create*************************************/
   /*
var personProto = {
    calculateAge: function() {
        console.log(2016 - this.yearOfBirth);
    }
};

var john = Object.create(personProto);
john.name = 'John';
john.yearOfBirth = 1990;
john.job = 'teacher';

var jane = Object.create(personProto, {
    name: {value: 'Jane'},
    yearOfBirth: {value: '1990'},
    job: {value: 'Designer'}
});

*/

/************************************ Primitives Vs Objects ***************************************/

// Primitives
var a = 23;
var b = a;
a = 46;
console.log(a);
console.log(b);

// Objects
var obj1 = {
    age: 23,
    name: 'Jane'
}
var obj2 = obj1;
obj1.age = 25;
console.log(obj1.age);
console.log(obj2.age);

// Functions
var age = 23;
var obj = {
    name: 'Jonas',
    city: 'Lisbon'
};

function change(a, b) {
    a = 30;
    b.city = 'Paris';
};
change(age, obj);

console.log(age);
console.log(obj.city);