let s1 = "The Daily Byte"
let s2 = "Cat"
let s3 = "civic"

// Looping in reverse, start from array.length-1 until 0
// Iterating over index:
// Two option: 
// 1. array[index] 
// 2. array.charAt[0]

// Time complexity O(N)
var answer = function (string){
  for (let i = string.length-1; i >= 0; i--) {
    const element = string[i];
    console.log(element);
  }
}

// Possible solutions could be inplace replacements, see how it works
answer(s1)
answer(s2)
answer(s3)