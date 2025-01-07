/* 
Palindromes are words that are the same forward or backward. For example, 
the words "noon" and "kayak" are a palindromes.
 
Write a function to check if a lowercased string of letters is a palindrome. 
If the word is palindrome, return true. If it isn't, return false.

Example input: "motorbike"
Example output: false

Example input: "rotator" 
Example output: true
*/

// My Attempt:
function isPalindrome(str){
    let newStr="";
    for(i=str.length-1 ; i>=0; i--){
        newStr+= str[i];
    }
    if(str == newStr){
        return true;
    }
    return false;
}

// Solution 1: for loop 
function isPalindrome1(str){
    // reverse the word using a backward for loop to create a new string
    let reverseStr = "";
    
    for(let i = str.length - 1; i >= 0; i--){
        reverseStr += str[i];
    }

    // compare the new string to the original word - are they equal? 
        // yes - return true
        // no - return false
    return reverseStr === str;
}

// Solution 2: using reverse() method
function isPalindrome3(str){
    let reverseStr= str.split("").reverse().join("");
    return str==reverseStr;
}



// Test your function
console.log(isPalindrome3("abba"));
console.log(isPalindrome3("civic"));
console.log(isPalindrome3("octopus"));
console.log(isPalindrome3("pumpkins"));
console.log(isPalindrome3("madam"));