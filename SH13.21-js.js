// 1 - misol
/*console.log(Array.isArray('w3resource'));
console.log(Array.isArray([1, 2, 4, 0]));*/

// 2 - misol
/*function array_Clone(arr) {
    let array = [...arr]
    array.push(1)
    return array
}
array_Clone([1, 2, 3])*/

// 3 - misol
/*function first(...arr) {
    if (Number.isInteger(arr[1])) {
        return arr[0]
    }
    return arr[0][0]
}
console.log(first([], 3));*/

// 4 - misol
/*function last(...arr) {
    if (Number.isInteger(arr[1])) {
        return arr[0]
    }
    let item = arr[0].splice(-1)
    return String(item)
}
console.log(last([7, 9, 0, -2], 3));*/

// 5 - misol
/*let array = ['Red', 'Green', 'White', 'Black']
array = array.join()
console.log(`"${array}"`);*/

// 6 - misol
/*function even(...num) {
    let arr = []
    for (let n = 0; n < num.length; n++) {
        arr.push(num[n])
        if (num[n]%2==0 && num[n+1]%2==0) {
            arr.push('-')
        }
    }
    return arr.join('')
}
console.log(even(0, 2, 5, 4, 6, 8));*/

// 7 - misol
/*let arr1 = [3, 8, 7, 6, 5, -4, -3, 2, 1, ]
arr1.sort()
let str = ''
for (n of arr1){
    str += `${n},`
}
console.log(str);*/

// 8 - misol
/*let arr1 = [3, 'a', 'a', 'a', 2, 3, 'a', 3, 'a', 2, 4, 9, 3]
let nechta = 0
let son = 0
let nima = ''
for (n = 0; n < arr1.length; n++) {
    for (a = 0; a < arr1.length; a++) {
        if (arr1[a] === arr1[n]) {
            nechta ++
        }
    }
        if (son < nechta) {
            son = nechta
            nima = arr1[n]
        }
        nechta = 0
}
console.log(`${nima} ( ${son} times)`);*/

// 9 - misol
/*let str = 'The Quick Brown Fox'
let newStr = ''
for (a of str) {
    // if (typeof a === 'string') {
    //     console.log(a);
    // }
    if (a.toUpperCase() === a) {
        newStr += a.toLowerCase()
    }
    else {
        newStr += a.toUpperCase()
    }
}
console.log(newStr);*/

// 10 - misol
/*let arr = [[1, 2, 1, 24], [8, 11, 9, 4], [7, 0, 7, 27], [7, 4, 28, 14], [3, 10, 26, 7]]
let son = 0
for (a of arr) {
    console.log(`"row ${son}"`);
    for (b of a) {
        console.log(`"${b}"`);
    }
    son ++
}*/