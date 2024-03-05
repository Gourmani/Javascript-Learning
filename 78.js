class Animal{

    constructor(name,color){
        this.name=name
        this.color=color
    }


    run(){
   console.log(this.name+ " is running ")

    }

    shout(){
        console.log(this.name+ "  is shouting!")
    }
}


class Monkey extends Animal{

    eatBanana(){
        console.log(this.name+" is eating  bananas.")
    }
}

let animal=new Animal('lion', 'yellow')
animal.run() // Lion is running
animal.shout()// lion is

let m=new Monkey('Mike','black');
m.eatBanana();//
