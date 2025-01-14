import mediaData from "./data/21_data.js";

/* Find All Unique Tags 

As a software dev at ScrimFlix, you're working on a feature 
to let users browse TV shows by tag. The first step is to collect all 
the tags from our data into a new array. Then we'll need 
to filter out the duplicate tags. 

Write a function that takes in the media data and returns
a flat array of unique tags.

Expected output: 
["supernatural", "horror", "drama",
"fantasy", "reality", "home improvement", "comedy", "sci-fi", "adventure"]

*/ 

// My Attempt:
function getUniqueTags(data){
    const tags= data.map(item => item.tags);
    const flattenedTags = tags.flat();
    
    const noDupes=[];
    flattenedTags.forEach(tag =>{
        if(!noDupes.includes(tag)){
            noDupes.push(tag);
        }
    })
    return noDupes;
}

// Solution: Part 1
function getUniqueTags2(data){
    // use map to loop through the data and get a new array of tags
    // flatten the tags array with .flat()
    const tags = data.map(podcast => podcast.tags).flat();
    // create a new array uniqueTags to hold the unique values
    const uniqueTags = [];
    // loop through the tags array

    tags.forEach(tag => {
         // is the element already in the uniqueTags arr? 
         if(!uniqueTags.includes(tag)){
             uniqueTags.push(tag)
         }
    })
       
    return uniqueTags;
}

// Solution: Part 2
function getUniqueTags3(data){
    const tags = data.map(podcast => podcast.tags).flat();
    const uniqueTags = {};
    
    // filter tags arr
    return tags.filter(tag => {
         // look up the tag in the uniqueTags obj
         if(!uniqueTags[tag]){
             uniqueTags[tag] = true;
            // if it's not the, we have a unique item 
            // put the item in our object with a value of true
            // return tag;
            return true;  // if filter returns true, then the item i.e. tag will go in the new array that the filter is creating
         }
         return false;
    })

}



console.log(getUniqueTags3(mediaData));
