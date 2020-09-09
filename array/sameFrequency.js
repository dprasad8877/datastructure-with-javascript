function sameFrequency(num1, num2) {
    let strNum1 = num1.toString();
    let strNum2 = num2.toString();
    let len1 = strNum1.length;
    let len2 = strNum2.length;
    if (len1 !== len2) return false;
    let countNum1 = {};
    let countNum2 = {};
    for (let i = 0; i < len1; i++) {
        countNum1[strNum1[i]] = (countNum1[strNum1[i]] || 0) + 1;
        countNum2[strNum2[i]] = (countNum2[strNum2[i]] || 0) + 1;
    }
    
    for (const key in countNum1) {
        if (countNum1[key] !== countNum2[key])
            return false;
    }
    return true;
}

let result=sameFrequency([1,2,3], [1,2,3,5]);
console.log(result);