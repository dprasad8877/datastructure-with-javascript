function validAnagram(first,second){
    let len1=first.length;
    let len2=second.length;
    if(len1!==len2){
return false;
    }
    const lookup={};
    for (let i = 0; i < len1; i++) {
        let letter = first[i];
        lookup[letter]?lookup[letter]+=1:lookup[letter]=1;

    }
    for (let i = 0; i < len1; i++) {
        let letter = second[i];
        if (!lookup[letter]) {
            return false;
        }else{
            lookup[letter]-=1;
        }
        
    }
    return true;
}
let result=validAnagram('abcd','cbap');
console.log(result);