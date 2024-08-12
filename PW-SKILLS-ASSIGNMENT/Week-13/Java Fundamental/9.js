// You are given with an array of numbers and strings. Your task is to find the first string in the array. On finding the first string print “Found the First String” and its value.

const arr = [1,67,"aman",4321,"pw"];
for(let i = 2;i<arr.length;i++ ){
    console.log(`Found The First String: ${arr[i]}`);
    break;
  }
