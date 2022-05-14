import React from "react";

export default function ValidParenthesis(str = ''){

    let bol = true;
    const stack = [];
    const characters = { ')': '(', '}': '{', ']': '['};
  for (const char of str) {
        
      if (!characters[char]){
         stack.push(char); 
      } 
      else if (stack.pop() !== characters[char]){
          bol = false;
          return false;
      } 
    }
    
    return stack.length === 0;
}  