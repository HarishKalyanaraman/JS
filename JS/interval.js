var setRef;
// setRef = setTimeout(() => {
//    console.log('Timed out') 
// }, 3000); // execute something after specific time
// // the arrow fn will be a callback. settimeout starts and waits for 3 secs, while the next line of code is executed and when the settimeout is finished executing, callback is executed
// //but the clear timeout is executed and the timeout is stopped
// clearTimeout(setRef)

setRef = setInterval(
    ()=>console.log(new Date().getSeconds()), 1000
)

// clearInterval(setRef)

// console.log(new Date().getMinutes())

//can you declare and define the setRef in one line - yes we can


