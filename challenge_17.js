import products from "./data/17_data.js";

/*
   It's the day after Halloween 🎃 and all the candy is on sale!
   
   To buy up all the candy, use map() and filter() to put all the
   candy into a `shoppingCart` array. 
   
   The new array should contain only the item and the price, like
   this: 
   
   Expected output: 
   [
       {item: "🍭", price: 2.99},
       {item: "🍫", price: 1.99}, 
       {item: "🍬", price: 0.89}
    ]
*/

// My Attempt:
function getSaleItems(data) {
    return data
        .filter(product => product.type === "sweet")
        .map(product => {
            return {
                item: product.item,
                price: product.price
            }
        })
};



// Solution: Part 1
function getSaleItems2(data){
    // filter the data by product.type -- only sweet
    return data
    .filter(product => product.type === "sweet")
    // loop through the data using map 
    .map(product => {
        // for every candy, return a new object with only item and price
        return {
            item: product.item,
            price: product.price
        }
    });
};

// Solution: Part 2
function getSaleItems3(data){
    // filter the data by product.type -- only sweet
    return data
    .filter(product => product.type === "sweet")
    // loop through the data using map 
    .map(({item, price}) => {
        // for every candy, return a new object with only item and price
        return {
            item:item,
            price:price
        }
    });
};

// Solution: Part 3
function getSaleItems4(data){
    // filter the data by product.type -- only sweet
    return data
    .filter(product => product.type === "sweet")
    // loop through the data using map 
    .map(({item, price}) => {
        // for every candy, return a new object with only item and price
        return {
            item,
            price
        }
    });
};



const shoppingCart= getSaleItems3(products);
console.log(shoppingCart);