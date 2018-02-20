/**
 * Created by WebStorm
 * Filename: es6-let-const
 * User: Ryan
 * Date: 12／28／2017
 * Time: 10:17 PM
 */

var nameVar = 'Ryan';
nameVar = 'Mike';
console.log('nameVar', nameVar);

let nameLet = 'Jet';
nameLet = '123';
console.log('nameLet', nameLet);

var x = 1;
plusOne();
function plusOne() {
    x = 3;
    x++;
    console.log(x);
}

console.log(x);