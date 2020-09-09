function countUniqueValue(arr)
{
    let i=0;
    for (let j = 0; j < arr.length; j++) {
        if(arr[i]!== arr[j]){
            i++;
            arr[i]=arr[j];
        }
    }
    return i+1;
}
console.log(countUniqueValue([0,0,1,1,1,2,2,2,3,4,5,6,7]))