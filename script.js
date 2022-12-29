// function counter(){
//     var counter = 0;

//     function IncreaseCounter() {
//         return counter += 1;
//     };

//     return IncreaseCounter;
// }

// var counter = counter();
// alert(counter());
// alert(counter());
// alert(counter());
// alert(counter());
// let count = 0;
// (function () {
//   if (count === 0) {
//     let count = 1;
//     console.log(count); // What is logged?
//   }
//   console.log(count); // What is logged?
// })();
// for (var i = 0; i < 3; i++) {
//   setTimeout(function log() {
//     console.log(i); // What is logged?
//   }, 1000);
// }

// function lengthFunc(width){
//     function breadthFunc(breadth){
//         return width * breadth;
//     }
//     return breadthFunc(10);
// }
// console.log(lengthFunc(10));
// var a = 10;
// var x = (function () {
//   var a = 12;
//   return function () {
//     alert(a);
//   };
// })();
// x();

// var globalVar = "xyz";
// (function outerFunc(outerArg) {
//     var outerVar = 'a';
//     (function innerFunc(innerArg) {
//     var innerVar = 'b';
//     console.log("------------ Q8 --------------")
//     console.log(
//         "outerArg = " + outerArg + "\n" + //123
//         "innerArg = " + innerArg + "\n" + //456
//         "outerVar = " + outerVar + "\n" + //a
//         "innerVar = " + innerVar + "\n" + //b
//         "globalVar = " + globalVar); // xyz
//     })(456);
// })(123);

function setCount() {
  let number = 0;

  return function () {
    console.log(++number);
  };
}

const counter = setCount();
counter();
counter();
counter();
 