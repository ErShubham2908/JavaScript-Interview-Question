// Q1. How to print hello world in JS 

// 1
// alert('hello world') // Abhik Gupta
// console.log("hello world") // Hareesware
// let a ="hello world!!"  // Ramana
// console.log(a)

// document.getElementsByClassName('h1')[0].innerHTML="Hello World"; // Mahesg

// Q2. When we do console log of Standard Date and Time , what will it give?

let time = new Date();
// console.log(time);

// Output - 2023-02-03T11:21:53.614Z

// Q3. Difference between Var,Let, Const in JS.

// Var - Gobal Scope and Function Scope 
// var a=12; //                   // Ramana
// function fun(){
//     var a=13;
//     a++
//     console.log(a)
// }
// fun()


// var count=10;        //global scope
 const func=()=>{
    var count1=20;   //function scope
    console.log(count1,count); // output 20, 10
 }

//  func();
//  console.log(count, count1); // 10, count1 not define
//

//      2. Follow Hoisting Concept.
        // console.log(a); // undefine
        // var a = 30;
//      3. Redeclear and reinit.
        // var r = 10;
        // r = 20; // reinit
        // var r = 30; // Redeclear
// let -
    // Function scope, global scope and block scope
        //Function scope, block scope
        // {
            // let v = 20
        // console.log(v);

        // }
        // console.log(v);
    // Hoisting
    // console.log(leta)
    // let leta = "EA15";
    // Redeclear and reinit
    // let B = "EA15"
    // B = "PrepBytes"; // reinit.
    // let B = "EA16" redec. is not possible

// const
    // Function scope, global scope and block scope
    // Hoisting
    // Redeclear and reinit
    // const C = 20;
    // C = 30;
    // count C =40;

// Q4. what is the difference between == and ===.
 //== - Only check value
 // === - Check value and Data type

//  == is equality operator and 
//=== is strict equality operator

// let val = 20; // Number
//  let value = "20" // String

//  console.log(val == value)  // ture 
//  console.log(val === value) //false


//  if(val == value){
//     console.log("This is == Concept")
//  }
//  if(val === value){
//     console.log("This is == Concept")
//  }
//  else{
//     console.log("This is === Concept")
//  }

// Q5. Types of Datatypes?

/* Two Datatype
        1. Premitive                        2. Non-Primitive
            A. Number                           A. Object
            B. String                               Array
            C. Boolean                              Function
            D. Null                     
            E. Undefine
            F. Symbol - (ES6)        
*/

// let arr = [1,2,3,4,5];
// console.log(typeof(arr));


// Q6. Explain Hoisting?
// Hoisting is a behavoiur in javascript, where variable and function decleration are moved to the top of the their scope.
// console.log(hoist); // undefine
// let hoist = "EA15"

// Hoist();

// function Hoist(){
//     console.log("Check Hoisting");
// }

// Q7. What is TDZ?
// Need to explain by own

// Q 8. Closure.

// A closure is the combination of function bundle together with references to its surronding state.(lexical scope)

// var a ;
// function Abc(){
//    let b = 20
//    a = b;
//   console.log(a);
// }


// function C(){
//     console.log(a);
// }

// console.log(a); // 10
// Abc();
// let globalVal = 10;
// function Outer(){
//     let outerVal = 20;
//     function Inner(){
//         let innerVal = 30;

//         console.log(globalVal)
//         console.log(outerVal)
//         console.log(innerVal)
//     }
//     Inner();
//     // return Inner
// }
// Outer()


function Outer(){
    function Inner(){
        let innerVal = 30;
        return innerVal;
    }
    // Inner();
    return Inner
}
let result =  Outer()
console.log(result())
// Diff b/w Console.log/ Return Keyword