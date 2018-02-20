/**
 * Created by WebStorm
 * Filename: es6-classes-1
 * User: Ryan
 * Date: 01／05／2018
 * Time: 11:42 PM
 */


//car, make, model, vin, getDescription

class Person {
    constructor(name = 'Anonymous', age = 0) {
        this.name = name;
        this.age = age;
    }
    getGreeting() {
        return `Hi, I am ${this.name}`;
    }
    getDescription() {
        return `${this.name} is ${this.age} year(s) old.`;
    }
}

class Student extends Person {
    constructor(name, age, major) {
       super(name, age);
       this.major = major;
    }

    hasMajor() {
        return !!this.major;
    }

    getDescription() {
        let description = super.getDescription();

        if (this.hasMajor()) {
            description += ` Their major is ${this.major}.`;
        }

        return description;
    }
}

const me = new Person('Ryan Zhan' , 24);
console.log(me);

const other = new Person();
console.log(other.getGreeting());
console.log(me.getDescription());

const me2 = new Student('Ryan Zhan' , 24, 'Computer Science');
console.log(me2.getDescription());
console.log(me2.hasMajor());


const other2 = new Student();
console.log(other2.getDescription());
console.log(other2.hasMajor());
