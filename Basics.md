\* : 0 or more matches <br/>
\+ : 1 or more matches <br/>
\? : 0 or 1 match <br/>
\^ : match the start of the string or line <br/>
\$ : match the end of the string or line <br/>
\\ : signifies a escape sequence <br/>
\. : match any single character except newline <br/>
\( ): capturing group. Save to reuse later. <br/>
\| : used as a logic OR inside a capturing group <br/>
\[abc] : character set.Matches one the things in the bracket <br/>
\[^abc] : negated character set. Matches anything except <br/>
\[a-zA-Z] : all uppercase and lowercase letters.You can specify any range <br/>
\{1} : exact number of matches.Comes after a set or group <br/>
\{1,5} : inclusive range of number of matches <br/>
\{1,} : minimum number of matches <br/>
\{,5} : maximum number of matches <br/>
\\s : any whitespace character <br/>
\\S : any non whitespace character <br/>
\\d : any digit. Same as [0-9] <br/> 
\\D : any non digit <br/>
\\w : any word character. Same as [a-zA-Z0-9_] <br/>
\\W : any non word character. Same as [^a-zA-Z0-9_]
