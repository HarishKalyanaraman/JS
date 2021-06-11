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
//     .finally(
//         () => {
//       console.log(
//         "This is finally() block that is " +
//         "executed after Promise is settled"
//       );
//     }
//     );

var collection = {
  "2548": {
    "album": "Slippery WHen Wet",
     "artist": "Bon Jovi",
     "tracks": ["let it rock", "you give love a bad name"]
  },
  "2468": {
    "album": "1999",
    "artist": "Prince",
    "tracks": ["Little red corvette", "1999"]
  },
  "1245": {
    "artist": "Robert Palmer",
    "tracks": []
  },
  "5349": {
    "album": "ABBA Gold" 
  }
};

var collectionCopy = JSON.parse(JSON.stringify(collection));
function updateRecords(id, prop, value){
  if (value===""){
    delete collection[id][prop];
  } else if(prop === "tracks"){
    collection[id][prop] = collection[id][prop] || [];
    collection[id][prop].push(value);
  }
  else {
    collection[id][prop] = value;
  }
  return collection
}

console.log(updateRecords(5349,"artist", "ABBA"));
console.log(updateRecords(5349,"tracks", "asd"));