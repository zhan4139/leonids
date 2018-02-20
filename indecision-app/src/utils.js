//This file is for import/export example for ES6
console.log('utils is running');

export const square = (x) => x*x;

export const add = (a, b) => a + b;

const substract = (a, b) => a-b;
export default (a, b) => a-b; //no need name the export default function
//main exports, name exports
// export { square, add };


//exports - default export - can only have one default

// export {substract as default};
// export default substract;