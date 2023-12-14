const numbers = [30, 29, 35, 46, 70, 89];
const reversed_num=numbers.reverse();
// Sort the numbers in descending order

const sortedNumbers = reversed_num.sort((a,b)=>b-a);

// The second largest number will be at index 1 (indexing starts from 0)
const secondLargest = sortedNumbers[1];

console.log(secondLargest);
