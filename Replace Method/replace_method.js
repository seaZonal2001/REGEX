//Searching and replacing methods within strings

let sentence="My cat barks";
let regX=/barks/;
let replacementText="meows";

let replaceResult=sentence.replace(regX,replacementText);
console.log(sentence,replaceResult);

let replacement="My cat barks".replace("/barks/","meows");
console.log(replacement);