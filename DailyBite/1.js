let string1 = "The Daily Byte"
let string2 = "Cat"
let string3 = "civic"


// Looping in reverse, start from array.length-1 until 0
// Iterating over index:
// Two option: 
// 1. array[index] 
// 2. array.charAt[0]

// Time complexity O(N)
var answer = function (string){
  for (let index = string.length-1; index >= 0; index--) {
    const element = string[index];
    console.log(element);
    
  }
}

// Possible solutions could be inplace replacements, see how it works
answer(string1)
answer(string2)
answer(string3)