let sentence="book book";
let regX=/(\w+)\s\1/;
//let regX=/(\w+)\s(\w+)/;

//Testing
let regXTestResult=regX.test(sentence);
console.log(regXTestResult);
//Matching
let regXMatchResult=sentence.match(regX);
console.log(regXMatchResult);

/*------------------------------------------------------------------------------------------------------------------ */
let digits="321 321 321";
let regXD=/^(\d+)\s\1\s\1$/;
//Testing
let regXDTestResult=regXD.test(digits);
console.log(regXDTestResult);

//Matching
let regXDMatchResult=digits.match(regXD);
console.log(regXDMatchResult);