/* Panic function 
Write a PANIC! function. The function should take in a sentence and return the same
sentence in all caps with an exclamation point (!) at the end. Use JavaScript's
built in string methods. 

If the string is a phrase or sentence, add a 😱 emoji in between each word. 

Example input: "Hello"
Example output: "HELLO!"

Example input: "I'm almost out of coffee"
Example output: "I'M 😱 ALMOST 😱 OUT 😱 OF 😱 COFFEE!"

.split() .join()
*/

// My Attempts:
// Method 1: Using only split() method (Bruteforce approach)
function panic1(sentence){
    const words= sentence.split(" ");
    let ans= "";
    if(words.length === 1){
        ans= words[0]+"!";
    }
    else{
        for(let i=0; i<words.length-1; i++){
            ans+= words[i]+ " 😱 ";
        } 
        ans= `${ans}${words[words.length-1]}!`;
    }
    return ans.toUpperCase();
}

// Method 2: Using both split() and join() methods
function panic(sentence){
    const words= sentence.split(" ");
    return words.join(" 😱 ").toUpperCase() +"!";
}

// Solution:
function panic3(str){
    return str
        .split(' ')
        .join(' 😱 ')
        .toUpperCase() + "!";
}


// Test your function
console.log(panic("omggg"));
console.log(panic("I'm almost out of coffee")); 
console.log(panic("winter is coming"))

