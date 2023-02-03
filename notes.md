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

 