/*
-password should be atleast 8 characters long
-It must contain two consecutive digits
*/

let password="cosmictech12";
let passCheck=/(?=\w{8})(?=\D*\d{2})/;
let checkStatus=passCheck.test(password);
console.log(checkStatus);

// (>=\w{8}) positive lookahead that matches 8 or more letters and digits
// (?=) a positive lookahead
// \w matches all letters and numbers and _
// {8} a quantity specifiers that is looking for exact number of occurences which is '8'
// \D* zero or more occurences of charcters that are not digits
// \d{2} two consecutive digits 