var cattels =["cow", "camel", "goat", "cattling","buffalo", "yak", "sheep", "horse", "donkey", "mule"];
console.log(cattels.slice(0, 5)); // Returns the first 5 elements
console.log(cattels.slice(5)); // Returns elements from index 5 to the end
console.log(cattels.slice(2, 6)); // Returns elements from index 2 to 5
console.log(cattels.slice(-3)); // Returns the last 3 elements
console.log(cattels.slice(-5, -2)); // Returns elements from index -5 to -3 (exclusive)
console.log(cattels.slice(0, -2)); // Returns elements from index 0 to the second last element
console.log(cattels.slice(2, -2)); // Returns elements from index 2 to the second last element
console.log(cattels.slice(2, 2)); // Returns an empty array since start and end are the same
console.log(cattels.slice(5, 2)); // Returns an empty array since start is greater than end

console.log("------------------------");

const months = ["January", "February", "March", "April", "May", "June", "July", "August", "September", "October", "November", "December"];
months.splice(0, 3); // Removes the first 3 elements
console.log(months); 
months.splice(0,0, "March"); // Inserts "March" at index 1
console.log(months); // ["February", "March", "April", "May", "June", "July", "August", "September", "October", "November", "December"]
// ["April", "May", "June", "July", "August", "September", "October", "November", "December"]