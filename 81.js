class Animal{

    constructor(name){
        this.name=name
    }

    walk(){
        console.log(`${Animal.capitalize(this.name)} is walking`)
    }

    static capitalize(name){
        return name.charAt(0).toUpperCase() + name.substr(1,name.length)
    }
}

a=new Animal("elephant")
a.walk()