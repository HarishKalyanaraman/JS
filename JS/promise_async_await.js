function doubleAfter2Seconds(x){
    return new Promise(resolve => {
      setTimeout(() => {
        resolve(x*2)
      }, 2000);
    })
}
  
// doubleAfter2Seconds(10).then(r => {
//   console.log(r)
// })
  
// let sum = doubleAfter2Seconds(10).then(r => r) + doubleAfter2Seconds(20).then(r => r) + doubleAfter2Seconds(30).then(r => r)
// console.log(sum)
 

//--------Reasearch about these topics
//promise.all
//callback hell




//   function addPromise(x){
//     return new Promise(resolve => {
//       doubleAfter2Seconds(10).then(a => {
//         doubleAfter2Seconds(20).then(b => {
//           doubleAfter2Seconds(30).then(c => {
//             resolve (a+b+c)
//           })
//         })
//       })
//     })
//   }
  
//   addPromise().then (r => console.log(r))












// async await

//   async function addAsync(){
//       const a =await doubleAfter2Seconds(10);
//       const b =await doubleAfter2Seconds(20);
//       const c =await doubleAfter2Seconds(30);
//       return (a+b+c)
//   }
//   addAsync().then (sum => {
//       console.log(sum)
//   })







//-----------TESTING TIME FOR THE TIME TAKEN TO ExeCUTE
// function test(){
// const a = doubleAfter2Seconds(10);
// const b = doubleAfter2Seconds(20);
// const c = doubleAfter2Seconds(30);
// }
// test()











