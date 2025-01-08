import podcasts from "./data/16_data.js";

/* Find Free Podcasts 

We have a list of podcasts and need the ability to filter by only
podcasts which are free.

Write a function that takes in the podcast data and returns an new
array of only those podcasts which are free.

Additionally, your new array should return only 
objects containing only the podcast title, rating, and whether or 
not it is paid. 

Expected output: 
[
    {title: "Scrimba Podcast", rating: 10, paid: false}, 
    {title: "Something about Witches", rating: 8, paid: false}, 
    {title: "Coding Corner", rating: 9, paid: false}
]
*/

// My Attempt:
function getFreePodcasts(data){
    // Create a new array of objects which contains only free podcasts
   let freePodcasts= data.filter(item => !item.paid);

   return freePodcasts.map(item => {
    return {title: item.title, rating: item.rating, paid: item.paid};
   })
}

// Solution: 
function getFreePodcasts2(data){
    // filter list by paid prop
    // use map to create a new array of objects with only the specified properties 
    return data
        .filter(item => item.paid === false)
        .map(podcast => {
            return {
                title: podcast.title,
                rating: podcast.rating,
                paid: podcast.paid
            }
        });
}


console.log(getFreePodcasts(podcasts))
