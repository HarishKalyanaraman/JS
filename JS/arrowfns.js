// var = sum(x,y){
//     console.log("Sum: " + x+y)
// }

// var sum = (x,y) => {
//     console.log("Sum: "+ x + y)
// }

var sum = (x,y) =>/*return (always present)*/ x*x   
/* THINGS TO REMEMBER ABOUT ARROW FN
//1. Arrow fns dont have "this" keyword, but borrows from the outer scope
//2. Arrow funs cant be used with new -- bcoz pt 1
//3. Arrow functions have no "arguments"
//4. cant be called with super
*/ 
sum(11,12)

// let group = {
//     title: "Math Group",
//     students: ["John", "Mary","Bill"],

//     showList(){
//         this.students.forEach(
//             student => console.log(this.title+ ": " +student) // this "this" points to previous (outer) "this"
//         )
//     }
// }

// group.showList()

let group = {
    title: "Math Group",
    students: ["John", "Mary","Bill"],

    showList(){
        this.students.forEach(function(student){
                console.log(this.title+":" +student)
        }
            
        )
    }
}

group.showList() //this gives undefined as o/p as normal fns dont take scope from outside