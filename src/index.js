module.exports = function check(str, bracketsConfig) {
    if(str.length % 2 !== 0) return false

    let stack = [];
	let brackets =  bracketsConfig.join('').replace(/,/g, '');


    for(let j = 0; j < str.length; j++){
    	let bracketIndex = brackets.indexOf(str[j]);
        if(bracketIndex % 2 == 0){
   			if(str[j] === brackets[bracketIndex + 1] && stack[stack.length - 1] === brackets[bracketIndex]){
            	stack.pop()
            }
            else if(str[j] === brackets[bracketIndex + 1] && stack[stack.length - 1] !== brackets[bracketIndex]){
                stack.push(str[j])
            }
            else{
            	stack.push(str[j])
            }
    	}
        else {
          	if(brackets[bracketIndex - 1] !== stack.pop()){
            	return false
            }
        }
    }
    return stack.length === 0
}
