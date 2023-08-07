function addToZero(arr){
    for (let i = 0; i < arr.length; i++){
        for (let j = i + 1; j < arr.length; j++){
            if (arr[i] + arr[j] === 0){
                return true
            }
        }
    }
    return false
}

//Runtime of addToZero: Probably like a few microseconds. Super-duper fast.

function uniqueChars(str){
    for (let i = 0; i < str.length; i++){
        for (let j = i + 1; j < str.length; j++){
            if (str[i] === str[j]){
                return false
            }
        }
    }
    return true
}

//Runtime of uniqueChars: Built almost identically to addToZero, so probably the same?

function pangramCheck(str){
    let alphabet = [`a`, `b`, `c`, `d`, `e`, `f`, `g`, `h`, `i`, `j`, `k`, `l`, `m`, `n`, `o`, `p`, `q`, `r`, `s`, `t`, `u`, `v`, `w`, `x`, `y`, `z`];
    let lowerCaseStr = str.toLowerCase();
    let check = alphabet.every(letter => lowerCaseStr.includes(letter));
    return check
}

//Runtime of pangramCheck: Still just iterating through one string, so probably similar to the above functions.

function longestWord(arr){
    let longest = arr[0].length;
    for (let i = 1; i < arr.length; i++){
        if (arr[i].length > longest){
            longest = arr[i].length;
        }
    }
    return longest
}

//Runtime of longestWord: Same as the others.