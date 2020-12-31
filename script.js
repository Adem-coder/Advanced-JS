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
/*
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
*/

/******************************* First Class Functions Passing functions as Arguments ********************************************/
/*
var years = [1990, 1972, 1980, 1900, 2015];
function ArrayCalc(arr, fun){
    var resArr = [];
    for (var i = 0; i < arr.length; i++){
        resArr.push(fun(arr[i]));
    }
    return resArr;
}
function calculateAge (el){
    return 2020 - el;
}
function isFullAge(el){
    return el >= 18;
}

function maxHeartRate(el) {
    if (el >= 18 && el<= 81){
        return Math.round(206.9 - (0.67 * el));
    } else {
        return -1;
    }
    
}
var ages = ArrayCalc(years, calculateAge);
var fullAge = ArrayCalc(ages, isFullAge);
var maxRate = ArrayCalc(ages, maxHeartRate);
console.log(ages);
console.log(fullAge);
console.log(maxRate);
*/

/************************************ First Class Functions: Functions Returning Functions *******************************************/
/*
function interviewQuestion(job){
        if(job === 'designer') {
           return function (name){
            console.log(name + ', can you explain what a UX design is?');
           } 
        }else if (job === 'teacher') {
            return function(name){
                console.log('What subject do you teach, ' + name + '?');
            }
        }else {
            return function(name){
                console.log('Hello, '+ name + ' What do you do?');
            }
            
        }
    }

    var teacherQuestion = interviewQuestion('teacher');
    var desingerQuestion = interviewQuestion('designer');
    var developerQuestion = interviewQuestion('developer');

    teacherQuestion('John');
    desingerQuestion('Adem');
    developerQuestion('Sara');

    // Other method

    interviewQuestion('teacher')('Mark');
*/

/******************************************* Immediately Invoked Function Expressions (IIFE) *************************************************/
/*
function game() {
    var score = Math.random() * 10;
    console.log(score >= 5);
}
game();

// IIFE
(function(){
    var score = Math.random() * 10;
    console.log(score >= 5);
})();

(function(goodLuck){
    var score = Math.random() * 10;
    console.log(score >= 5 - goodLuck);
})(5);
*/

/**************************************** Closures *******************************************/
/*
function retirement(retirementAge){
var a = ' Years left until retirement';
    return function(yearOfBirth){
        var age = 2020 - yearOfBirth;
        console.log((retirementAge - age) + a);
    }
}

var retirementEu = retirement(65);
var retirementGermany = retirement(67);
var retirementChina = retirement(69);

retirementEu(1990);
retirementGermany(1975);
retirementChina(1992);

function interviewQuestion(job){

    return function (name){
        if(job === 'designer') {
            console.log(name + ', can you explain what a UX design is?');

        }else if (job === 'teacher') {
            console.log('What subject do you teach, ' + name + '?');
        }else {
            console.log('Hello, '+ name + ' What do you do?');

        }
    }
}

interviewQuestion('designer')('Adem');

*/

/************************** Bind Call and Apply *************************************/

var john = {
    name: 'John',
    age: 20,
    job: 'teacher',
    presentation: function(style, timeOfDay) {
        if (style === 'formal') {
            console.log('Good ' + timeOfDay + ', ladies and gentlemen! I\'m ' + this.name + ', I\'m a'+ this.job + ' and I\'m '+ this.age + ' years old.');
        
        } else if (style === 'friendly'){
console.log('Hey what\'s up? I\'m ' + this.name + ', I\'m a '+ this.job + ' and I\'m '+ this.age + ' years old. Have a nice '+ timeOfDay + '.');
        }
    }
}

john.presentation('formal', 'morning');

// call
var emily = {
    name: 'Emily',
    age: 25,
    job: 'Designer'
}

john.presentation.call(emily, 'friendly', 'afternoon');

// Bind

var johnFriendly = john.presentation.bind(john, 'friendly');
johnFriendly('morning');
johnFriendly('night');

var emilyFormal = john.presentation.bind(emily, 'formal');
emilyFormal('morning'); 

// 
var years = [1990, 1972, 1980, 1900, 2015];
function ArrayCalc(arr, fun){
    var resArr = [];
    for (var i = 0; i < arr.length; i++){
        resArr.push(fun(arr[i]));
    }
    return resArr;
}
function calculateAge (el){
    return 2020 - el;
}
function isFullAge(limit, el){
    return el >= limit;
}

var ages = ArrayCalc(years,  calculateAge);

var fullJapan = ArrayCalc(ages, isFullAge.bind(this, 20));
console.log(ages);
console.log(fullJapan);