module.exports = function check(str, bracketsConfig) {
    if(str.length % 2 != 0) return false;

    const strToArr = str.split('');
    let a = 0;
    let aPrevious;
    while(strToArr){
        aPrevious = a;
        for(let i = 0; i < bracketsConfig.length; i++) {

            for(let j = 0; j < str.length; j++) {

                if(str[j] === bracketsConfig[i][0] && str[j+1] === bracketsConfig[i][1]) {
                    strToArr.splice(j, 2);
                    a += 1;
                    if(strToArr.length == 0){
                        return true
                    }
                }

            }


        }
        if(a == aPrevious){
            return false
        }
        // a = 0;

    }
    return true
}
