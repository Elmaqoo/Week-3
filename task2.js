const words = ["pen","pencil", "knife", "chair"];
const nums = [30,50,20,90];

console.log(words);
console.log(nums);

//removes the first element from an array and returns the removed element
const el1 = words.shift();
console.log(el1);
console.log(words);

//removes the last element from an array and returns the element.
const el2 = words.pop();
console.log(el2);
console.log(words);

//returns a string with array values separated by commas
console.log(nums.toString());


//sorts the elements of an array in place and returns the array
nums.sort();
console.log(nums);

//sorts the array of integers in descending order
nums.reverse();
console.log(nums);
