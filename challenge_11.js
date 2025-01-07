/* 
How often do the letters in your name repeat? 

Write a function that counts how many times each letter of your name
occurs. Your function should take in your first and last name and return
an object where the keys are each character in your name, and the value
is how many times that character appears in your name. 

Example input: "Peggy Porth"
Example output: {p: 2, e: 1, g: 2, y: 1, o: 1, r: 1, t: 1, h: 1}

Your function should NOT count spaces and should not be case sensitive (a
lowercase t and a capital T should be considered the same character).

*/

// My Attempt:
function countChars(str) {
    const chars = {};
    str = str.toLowerCase();

    for (let i = 0; i < str.length; i++) {
        if (str[i] == " ") {
            continue;
        }

        if (chars[i]) {// if it's a truthy value
            chars[i]++;
        }
        else {
            chars[i] = 1;
        }
    }
    return chars;
}

// Solution:
function countChars2(str){
    // initialize a new empty object to hold the letter counte
    const count = {};
    // remove all spaces and lowercase all characters of the input str
    const name = str.toLowerCase().split(" ").join("");
    // loop through the letters of the string
    for(let i = 0; i < name.length; i++){
         // if the character is not the obj, add it, give it a value of 1
         if(!count[name[i]]){
             count[name[i]] = 1; 
         } else {
           // if the character is already in the object, increment that char's value
           count[name[i]] += 1;
         }
    }
 
    return count
 }

console.log(countChars("Peggy Porth"));