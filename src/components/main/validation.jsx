import React from "react";

// export default function ValidParenthesis(str = ''){

//     let bol = true;
//     const stack = [];
//     const characters = { ')': '(', '}': '{', ']': '['};
//   for (const char of str) {
        
//       if (!characters[char]){
//          stack.push(char); 
//       } 
//       else if (stack.pop() !== characters[char]){
//           bol = false;
//           return false;
//       } 
//     }
    
//     return stack.length === 0;
// }  

export default function ValidParenthesis(str = ''){
    const stack = []
    for(let i = 0; i < str.length; i++){
        var x = str.charAt(i);
        if(x === '(' || x === '{' || x === '['){
            stack.push(x);
            continue;
        }
        
        if(stack === []) return false;
        
        var check;
        switch(x){
            case ')':
                check = stack.pop();
                if(check === '{' || check === '[' ) return false;
                break;
            case '}':
                check = stack.pop();
                if(check === '(' || check === '[') return false;
                break;
            case ']':
                check = stack.pop();
                if(check === '{' || check === '(') return false;
                break;
        }
    }
    return (stack.length === 0);
}

export function RemoveJavaComments(value = '') { 
    var show = '';
                var txt=value.split('\r\n');
          
           
                for (var i=0,count=0; i<txt.length; i++){
            
                    if(txt[i].indexOf('/')==-1){
            
                        show=show +txt[i]+"\n";
                        
                    }
                   
                }
              
               return show;   
                
            }