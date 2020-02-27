// Mutations
// https://www.freecodecamp.org/learn/javascript-algorithms-and-data-structures/basic-algorithm-scripting/mutations

function mutation(arr) {
    let strFirst = arr[0]
    let strSecond = arr[1]
    strFirst = strFirst.toUpperCase()
    strSecond = strSecond.toUpperCase()
    let flage = false

    for (let i = 0; i < strSecond.length; i++) {
        flage = false
        for (let ii = 0; ii < strFirst.length; ii++) {
            if (strSecond[i] == strFirst[ii]) flage = true
        }
        if (flage == false) return false
    }
    return true
}

console.log(mutation(["hello", "he"]))
