/**
 * Created by WebStorm
 * Filename: es6-arrow-function
 * User: Ryan
 * Date: 12／28／2017
 * Time: 11:03 PM
 */

const square = function(x) {
    return x * x;
};

// const squareArrow = (x) => {
//     return x * x;
// };
const squareArrow = (x) => x * x;
console.log(squareArrow(8));

const getFirstName = (name) => name.split(' ')[0];
console.log(getFirstName('Ryan A'));

const add = (a, b) => {
    // console.log(arguments);
    return a + b;
};
console.log(add(55, 1, 1001));


//this will be the parent object
const user = {
    name: 'Ryan',
    cities: ['Beijing', 'Shanghai', 'Seattle'],
    printPlace () {
        const cityMessage = this.cities.map((city) => this.name + ' lives in ' + city);
        // const that = this;
        // this.cities.forEach( (city) => {
        //     console.log(this.name + ' ' + city);
        // });
        return cityMessage;
    }
};

console.log(user.cities, user.printPlace());

const multiplier = {
    numbers: [10, 20, 30],
    multiplyBy: 3,
    multiply() {
        return this.numbers.map((num) => num * this.multiplyBy);
    }
};

console.log(multiplier.multiply());