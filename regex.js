let sentence = "The 11 Quick 23 brown 45 fox 2345 jumps  over 253 the lazy dog really the %*& ( (& $$# @ ?> < |}{:? gooooooogle! yeeeeeaaahhhh";

//Example 1 : Matching a word in a sentence.(case sensitive)(The test method)
let reg1X = /dog/;
let search1Result = reg1X.test(sentence);
console.log(search1Result);

//Example 2 : Matching for multiple words (OR |). (Case Sensitive) (The test Method)
//let reg2X = /dog|fox|brown/;
//let reg2X = /dog|cat|blue/;
let reg2X = /bird|cat|blue/;
let search2Result = reg2X.test(sentence);
console.log(search2Result);

//Example 3 :Ignoring the case-Sensitiveness.(using the i flag) (The test method)
let reg3X=/quick/i;
let search3Result = reg3X.test(sentence);
console.log(search3Result);

//Example 4 : Getting the matched word. ( The match method)
//let reg4X=/fox/i;
let reg4X=/box/i;
let search4Result = sentence.match(reg4X);
console.log(search4Result);

//Example 5 : Getting the matched words. (Using the g flag) (The match method)
let reg5X=/the/ig;
let search5Result = sentence.match(reg5X);
console.log(search5Result);

//Example 6 : Getting the matched words with dot.(The match method)
//let reg6X=/.o./g;
let reg6X=/./g;
let search6Result = sentence.match(reg6X);
console.log(search6Result);

//Example 7 : Getting the matched characters with [] (The match method)
let reg7X=/[bdh]/g;
let search7Result = sentence.match(reg7X);
console.log(search7Result);

//Example 8 : Getting the matched characters of alphabet with [] (The match method)
let reg8X=/[a-z]/ig;
let search8Result = sentence.match(reg8X);
console.log(search8Result);

//Example 9 : Getting the matched numbers & character of alphabet with [] (The match method)
let reg9X=/[1-3x-z]/ig;
let search9Result = sentence.match(reg9X);
console.log(search9Result);

//Example 10 : Getting NOT the matched numbers and characters with [] (The match method)
let reg10X=/[^1-9a-v ]/ig;
let search10Result = sentence.match(reg10X);
console.log(search10Result);

//Example 11 : Getting the matched numbers or characters that occur one or more times (The match method)
let reg11X=/l+/g;
let search11Result = sentence.match(reg11X);
console.log(search11Result);

//Example 12 : Getting the matched characters that occur zero or more times (The match method)
let sentence2="goooooooogle";
let reg12X=/go*/;
let search12Result = sentence2.match(reg12X);
console.log(search12Result);

//Example 13 : Getting matched characters with lazy matching
//let reg13X=/T.*/;
let reg13X=/T.*?/;
let search13Result = sentence.match(reg13X);
console.log(search13Result);

//Example 14 : Matching beginning string pattern
let reg14X=/^The/i;
let search14Result = sentence.match(reg14X);
console.log(search14Result);

//Example 15 : Matching ending string pattern
let reg15X=/the$/i;
let search15Result = sentence.match(reg15X);
console.log(search15Result);

//Example 16 : Matching all numbers and characters
let reg16X=/\w/g;
let search16Result=sentence.match(reg16X);
console.log(search16Result);

//Example 17 : Matching NOT all numbers and letters and underscore
let reg17X=/\W/g;
let search17Result=sentence.match(reg17X);
console.log(search17Result);

//Example 18 : Matching all numbers
let reg18X=/\d/g;
let search18Result=sentence.match(reg18X);
console.log(search18Result);

//Example 19 : Matching all non numbers
let reg19X=/\D/g;
let search19Result=sentence.match(reg19X);
console.log(search19Result);

//Example 20 : MAtching all white space (space enter tab etc.)
let reg20X=/\s/g;
let search20Result=sentence.match(reg20X);
console.log(search20Result);

//Example 21 : Matching all non white space
let reg21X=/\S/g;
let search21Result=sentence.match(reg21X);
console.log(search21Result);

//Example 22 : Specifying upper and lower number of matches using quantity specifier
let reg22X=/o{2,4}/g;
let search22Result=sentence.match(reg22X);
console.log(search22Result);

//Example 23 : Specifying only the lower number of matches using quantity specifier
let reg23X=/e{2,}/g;
let search23Result=sentence.match(reg23X);
console.log(search23Result);

//Example 24 : Specifying the exact number of matches using quantity specifier
let reg24X=/o{5}/g;
let search24Result=sentence.match(reg24X);
console.log(search24Result);

//Example 25 : Check for all or none
let sentence3="color";
let reg25X=/colou?r/;
let search25Result=reg25X.test(sentence3);
console.log(search25Result);

//Example 26 : Positive lookahead
//let reg26X=/j(?=u)/;
// let reg26X=/j(?=m)/;
let reg26X=/j(?!u)/;
let search26Result=reg26X.test(sentence);
console.log(search26Result);