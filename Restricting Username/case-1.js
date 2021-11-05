/*
-Atleast 2 characters
-Numbers should be at the end if any
-letters can be either uppercase or lowercase
-If there are 2 letters they cannot contain  numbers
*/

let userName='surjit_2001';
let usernameCheck=/^[A-Za-z_]{2,}\d*$/;
let checkStatus=usernameCheck.test(userName);
console.log(checkStatus);
