function maxSubArraySum(arr, num) {
    let maxSum = 0;
    let temSum = 0;
    let len = arr.length;
    if (len < num) return null;
    for (let i = 0; i < num; i++) {
        maxSum += arr[i];

    }
    temSum = maxSum;
    for (let i = num; i < len ;i++) {
        temSum = temSum - arr[i - num] + arr[i];
        maxSum = Math.max(maxSum, temSum);

    }
    return maxSum;

}

const max=maxSubArraySum([2,6,2,5,6,9,2],2)
console.log(max);