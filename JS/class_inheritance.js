//CLASS Inheritance
// super, constructor and extends keyword usage
class Animal{
    constructor(name, height){
        this.name = name;
        this.height = height;
    }
    hello(){
        console.log(`Hi I am ${this.name} from the animal kingdom`)
    }
}

console.log(Animal)
//create an object
let king = new Animal('Lion King', 4.5)
console.log(king)
king.hello()

class Lion extends Animal{
    constructor(name,height,color){
        super(name,height) //since name and height are of super class, the child class cannot initialize it, so it sends these variables to super class constructor to make them initialized
        this.color=color
    }
    callParentHello(){
        super.hello()
    }
    hello(){
        console.log("From child")
    }

}

let l = new Lion("Tiger",5,"Stripes")
l.hello() // child hello
l.callParentHello() //parent hello since super is used 




// class A {
//     constructor(x){
//         this.a=x
//     }
// }

// class B extends A{
//     constructor(x,y){
//         super(x)
//         this.b=y
//     }
// }

// class  C extends B {
//     constructor(x,y,z){
//         super(x,y)
//         this.c=z
//     }
// }

// obj = new C(11)
// console.log(obj)