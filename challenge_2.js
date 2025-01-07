/* Whispering function 
Write a function `whisper` that takes in a sentence 
and returns a new sentence in all lowercase letters with
"shh..." at the beginning. 

The function should also remove an exclamation point
at the end of the sentence, if there is one. 

Example 
input: "The KITTENS are SLEEPING!"
output: "shh... the kittens are sleeping"

Hint: endsWith and slice
*/

// Step 1: add shh... in the beginning
// Step 2: make all letters lowercase
// Step 3: remove ! at the end (if present)

// My Attempt:
function whisper(sentence){
    let ans = "shh..."+ sentence.toLowerCase();
    if(ans[ans.length-1] === "!"){
        return ans.slice(0,-1);
    }
    return ans;
}

// Solution: uses endsWith() method
function whisper2(str){
    if(str.endsWith("!")){
        // scrimba!
        return "shh... " + str.slice(0, str.length - 1).toLowerCase();
    }
    return "shh... " + str.toLowerCase();
}
console.log(whisper("PLEASE STOP SHOUTING."));
console.log(whisper("MA'AM, this is a Wendy's!"));