
class Animal{

    constructor(name){
   this.name=name
    }

    fly(){
        console.log("Birds are flying")
    }

    get name(){
        return this._name
    }

    set name(newName){
        this._name=newName
    }
} 

class rabbit extends Animal{
    eatCarrot(){
        console.log("Rabbits are eating carrots")
    }
}

let a= new Animal("Hungry")
a.fly() // Error because we didn'
a.name="Jack"
console.log(a.name)


let c=57
console.log(a instanceof Animal)

console.log(a instanceof rabbit)//false


console.log(c instanceof Animal)//false


