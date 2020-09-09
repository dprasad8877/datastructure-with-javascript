function sumZero(arr) {
    let left = 0;
    let right = arr.length-1;
    while (left < right) {
        let sum = arr[left] + arr[right];
        if (sum === 0) {
            return [arr[left], arr[right]];

        } else if (sum > 0) {
            right--;
        } else {
            left++;
        }
    }
}

let result=sumZero([-3,-2,2,5])
console.log(result);