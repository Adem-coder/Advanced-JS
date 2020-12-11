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
    this.calculateAge = function(){
        console.log(2016 - this.yearOfBirth);
    }
}

var john = new Person ('John', 1998, 'student');

john.calculateAge();

var jane = new Person('Jane', 1969, 'designer');
jane.calculateAge();