

class Employee{

    constructor(name, id, email){

        this.name = name;
        this.id = id;
        this.email = email;
    }

    login(){
        console.log(this.name + " is logged in.");
    }
    logout(){
        console.log(this.name + " is logged out.");
    }

    requestLeaves(leaves){
        console.log(`${this.name}  has requested  ${leaves} leaves`)
    }
}

class programmer extends Employee{
requestCoffee(x){
    console.log(`Employee has requested ${x} coffees`)
}

requestLeaves(leaves){
    super.requestLeaves(3);
    //console.log(`Employee has requested ${leaves+1} leaves (one extra) `)
}
}

let e= new Employee("John Doe",123456,"john@gmail.com");



let p= new programmer("Johny sins",1236,"johnsins@gmail.com");
e.login();
e.requestLeaves(3);


p.login();
p.requestLeaves(3);