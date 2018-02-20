//ES6 import export
// import './utils.js';
//default does not need to be the same as export name
// import anythingIWant, { add, square } from './utils.js';
//
// console.log('app.js is running');
//
// console.log(square(4), add(100, 23), anythingIWant(100, 81));

// import validator from 'validator';
// console.log(validator.isEmail('test@www.sss'));

// /**
//  * Created by WebStorm
//  * Filename: app
//  * User: Ryan
//  * Date: 12／27／2017
//  * Time: 11:18 PM
//  */
//

import React from 'react';
import ReactDOM from 'react-dom';
import IndecisionApp from './components/IndecisionApp';
import 'normalize.css/normalize.css';
import './styles/styles.css';

// Stateless
// const User = (props) => {
//     return (
//         <div>
//             <p>Name: {props.name}</p>
//             <p>Age: {props.age}</p>
//         </div>
//     );
// };

ReactDOM.render(<IndecisionApp/>, document.getElementById('app'));

// class OldSyntax {
//     constructor() {
//         this.name = 'Mike';
//         this.getGreeting = this.getGreeting.bind(this);
//
//     }
//     getGreeting() {
//         return `Hi. My name is ${this.name}`;
//     }
// }
//
// const oldSyntax = new OldSyntax();
// const getGreeting = oldSyntax.getGreeting;
// console.log(getGreeting()); //not bind!

//------------------

// class NewSyntax {
//     name = 'jen';
//     getGreeting = () => {
//         return `Hi. My name is ${this.name}`;
//     }
// };
// console.log(new NewSyntax().getGreeting());