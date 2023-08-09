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

//Runtime of addToZero: O(n^2).

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

//Runtime of uniqueChars: O(n^2)

function pangramCheck(str){
    let alphabet = [`a`, `b`, `c`, `d`, `e`, `f`, `g`, `h`, `i`, `j`, `k`, `l`, `m`, `n`, `o`, `p`, `q`, `r`, `s`, `t`, `u`, `v`, `w`, `x`, `y`, `z`];
    let lowerCaseStr = str.toLowerCase();
    let check = alphabet.every(letter => lowerCaseStr.includes(letter));
    return check
}

//Runtime of pangramCheck: O(n)

function longestWord(arr){
    let longest = arr[0].length;
    for (let i = 1; i < arr.length; i++){
        if (arr[i].length > longest){
            longest = arr[i].length;
        }
    }
    return longest
}

//Runtime of longestWord: O(n)