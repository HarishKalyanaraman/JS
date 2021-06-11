// // promise is a value in the future that is returned if we have it or promise is rejected

// //-------------promise 3.144234234234


// //resolved (3.144123123123)


// //rejected  (error)


// //its a constructor fn that takes a function as arg
// // let promise = new Promise(function(resolve, reject){
// //     ///
// // }
// // )


// //1. new Promise() //state:pending
// //2. resolved // state:fulfilled
// //3. rejected //state: rejected

// //dummy promises

// //PROMISES ARE ASYNC
// let promise = new Promise(function(resolve, reject){
//     setTimeout(() => resolve("done"), 1000);
//     //reject(new Error("Rejected"))
// }
// )


// //.then
// promise
// .then(
//     (result)=>console.log(result),
//     //(error)=>console.log(error.message)
// )
// promise
// .then(
//     (result)=>console.log(result),
//     //(error)=>console.log(error.message)
// )
// .catch(
//     (error)=>console.log(error.message)
// )
// .finally(
//     console.log("Always Runs")
// )












//=============================================================

//Promise  3.1443894797492

//resolved(3.1443894797492)

//rejected(error)

// //ctr function
// let promise = new Promise(function(resolve, reject){
//     ///
// })


// 1. new Promise() // state:pending
// 2. resolved // state:fullfilled
// 3. rejected //state:


//dummy 
//Promises are async
// let v;
// let promise = new Promise(function(resolve, reject){
//     // setTimeout(()=>resolve("done"), 0)
//     // reject(new Error("Rejected"))
//     v=22;
//     console.log(v)
//     resolve("done")
// })

//.then
// promise
// .then(
//     (result)=>console.log(result),
//     // (error)=>console.log(error.message)
// )


// promise
// .then(
//     (result)=>console.log(result),
//     // (error)=>console.log(error.message)
// )
// .finally(
//     console.log("Always Runs")
// )
// .catch(
//     ()=>{v=null;console.log(error.message)}
// )











// let promise = new Promise(function(resolve, reject) {
//     setTimeout(() => resolve("done"), 1000)
//         //reject(new Error("Reject"))
// })


// var status = undefined;
// promise.then(
//         (result) => {
//             status = result;
//             console.log(result)
//         },
//         //(error) => console.log(error.message)
//     )
//     .catch(
//         (error) => console.log(error.message)
//     )
//     .finally(
//         () => {
//             while (status == undefined) {
//                 setInterval(() => {
//                     status = result
//                 }, 1000);
//             }

//             console.log("Always runs")
//         }

//     )

// Define the Promise
// let task = new Promise((resolve, reject) => {
//     setTimeout(() => {
    
//       // Reject the Promise
//       reject("Promise has been rejected!");
//     }, 2000);
//   });
    
//   task
//     .then(
//       (data) => {
//         console.log(data);
//       },
    
//       // Handle any error
      
//     )
//     .catch(
//         (error) => {
//             console.log("Error:", error);
//           }
//     )
//     // Specify the code to be executed 
//     // after the Promise is settled
//     .finally(                                         ////////////// finally should always have a function inside the block to be called (it is called onFinally method)
//         () => {
//       console.log(
//         "This is finally() block that is " +
//         "executed after Promise is settled"
//       );
//     }
//     );













