import shoppingCart from "./data/18_data.js";

/*  
Use reduce() to total the groceries. 
Then find a method that will round the total to 2 decimal places.

Example output: 73.44389877777777
*/

function total(arr){
    return arr.reduce((acc, curr)=>{
        return acc + curr.price;
    }, 0).toFixed(2);
}

// Solution:
function total(arr){
    const total = arr.reduce((acc, curr) => {
        return acc + curr.price;
    }, 0);
    
   return total.toFixed(2);
}


console.log(total(shoppingCart));
