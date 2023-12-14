const num_list = [30, 29, 35, 46, 70, 89];
const reversed_num=num_list.reverse();


const sorted_num = reversed_num.sort((a,b)=>b-a);

const sec_high = sorted_num[1];

console.log("Second largest number in the list "+sec_high);
