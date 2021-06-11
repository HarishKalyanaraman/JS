// function solution(N,A) 
//         {        
//             let arr=new Array(N).fill(0)
//             for(let i=0;i<A.length;i++)
//             {
//                 A[i]>N ? arr.fill(Math.max(...arr)) : arr[A[i]-1]+=1;        
//             }
//             return arr;   
//         }

// counter = [1,2,3,4,5]
// max = Math.max(...counter)
// console.log(max)
// console.log(solution(5,[3,4,4,5,1,3,6]))






// Write a function:

// function solution(A, B, K);

// that, given three integers A, B and K, returns the number of integers within the range [A..B] that are divisible by K, i.e.:

// { i : A ≤ i ≤ B, i mod K = 0 }

// For example, for A = 6, B = 11 and K = 2, your function should return 3, because there are three numbers divisible by 2 within the range [6..11], namely 6, 8 and 10.

// Write an efficient algorithm for the following assumptions:

// A and B are integers within the range [0..2,000,000,000];
// K is an integer within the range [1..2,000,000,000];
// A ≤ B.



function solution(S, P, Q) {
    min = [];
    geneString = [];
   for(k=0;k<P.length;k++){
       if(P[k]<=Q[k]){
           geneString = S.substring(P[k],Q[k]+1).split('')
           if(geneString.includes('A')){
                min.push(1)   
           } else if(geneString.includes('C')){
               min.push(2)
           }else if (geneString.includes('G')){
               min.push(3)
           } else { min.push(4)}
        }
        
   }
   return min 
}

solution("CAGCCTA",[2,5,0],[4,5,6])


// var S = "CAGCCTA"
// console.log(S.substring(2,5).split(''))
// let gene = {
//     A:1,
//     C:2,
//     G:3,
//     T:4
// };
// console.log(gene)

// console.log(Object.entries(map).map(o=>o[1]))
// low = Math.min(...Object.entries(map).map(o=>o[1]))
// console.log(low)
// for(i=0;i<S.length;i++){console.log(S[i])}


