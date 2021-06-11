//Objective is to do inheritance

//borrow sing method for lizard object

//HINT: BIND
//-------------------------------------------------------------------------------------------------



// let dragon = {
//     name:'Tanya',
//     fire:true,
//     fight(){
//         return 9
//     },
//     sing(){
//         if(this.fire){
//             return `I am ${this.name}, the breather of fire`
//         }
//         else{
//             return `dont have fire power`
//         }
//     }
// }
// let lizard ={
//     name:"Kiki",
//     //fire:true,
//     fight(){
//         return 5
//     }
// }

// // const singLizard = dragon.sing.bind(lizard)
// // console.log(singLizard())


// lizard.__proto__ = dragon//accessing object using __proto__ if lizard is an object////// if lizard is a function -> lizard.prototype
// console.log(lizard.sing()) // gets any values not present in its own object. //// ie. it gets sing() and fire and not the name
// console.log(lizard.fire)
// console.log(lizard.fight())