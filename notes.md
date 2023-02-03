## Q1. When we do console log of Standard Date and Time , what will it give?

When you log a standard JavaScript Date object to the console, it will display a string representation of the date and time stored in that object, in the format: "YYYY-MM-DDTHH:mm:ss.sssZ", where "YYYY" is the four-digit year, "MM" is the two-digit month (01-12), "DD" is the two-digit day of the month (01-31), "HH" is the two-digit hour in 24-hour format (00-23), "mm" is the two-digit minute (00-59), "ss" is the two-digit second (00-59), "sss" is the three-digit milliseconds (000-999), and "Z" is a time zone offset.

### Example - 
    let time = new Date();
    console.log(time);

    - Output - 2023-02-03T02:11:38.624Z
                YYYY-MM-DDTHH:MM:SS.614Z
        2:11:38.624 AM UTC on February 3rd, 2023.

## Q2. Difference between Var,Let, Const in JavaScript?

In JavaScript, there are three keywords to declare variables: var, let, and const.

1. var:

   The var keyword is used to declare a variable in JavaScript, and it has function scope. This means that the variable declared with var is accessible within the function where it is defined, and also within inner functions within the same function. However, it is not accessible outside the function.
   II. Var follow Hoisting
---
### Example 1- 
    function example() {
        var x = 10;
        console.log(x);  // Output: 10
    }
    console.log(x);  // Uncaught ReferenceError: x is not defined
---
 

1. let:
The let keyword is used to declare a variable in JavaScript, and it has block scope. This means that the variable declared with let is accessible only within the block in which it is defined, and not outside of the block.

### Example - 
    if (true) {
        let x = 10;
        console.log(x);  // Output: 10
    }
    console.log(x);  // Uncaught ReferenceError: x is not defined

3. const:
The const keyword is used to declare a constant in JavaScript, and it also has block scope. This means that the variable declared with const is accessible only within the block in which it is defined, and not outside of the block. The main difference between let and const is that the value of a variable declared with const cannot be changed, it is a constant.

### Example - 
    const x = 10;
        console.log(x);  // Output: 10
        x = 20;  // Uncaught TypeError: Assignment to constant variable.
