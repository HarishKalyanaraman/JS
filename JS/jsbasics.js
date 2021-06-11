// a = "String"
// alen = a.length
// b = []
// for (i = 0; i < a.length; i++) {
//     console.log(b)
// }

// a = 'reverse'
// let front = 0
// let back = a.length - 1
// let b = a.split('')
// for (; front <= back; front++, back--) {
//     let temp = b[front]
//     b[front] = b[back]
//     b[back] = temp
// }
// console.log(b)


// let a = 'reverse'
// let b = ''
// for (let ch of a) {
//     b = ch + b
// }
// console.log(b)


// let aReverse = a.split('')
// for (i = aReverse.length - 1; i >= 0; i--) {
//     console.log(aReverse[i]);
// }

// let varmap = new Map()
// let a = {}
// let str = "aabbccc"
// for (ch of str) {
//     if (ch in a) {
//         a[ch]++;
//     }
//     else {
//         a[ch] = 1;
//     }
// }
// console.log(a)

//
let a = [1,1,1,2,2]
let hash = {};
let max = 0;
for (let i in a){
    if(i in hash){
        hash[i]++;
    }
    else{
        hash[i]=1;
    }
}
for (let j in hash){
    if(hash[j]>max){
        max=hash[j];
    }
}