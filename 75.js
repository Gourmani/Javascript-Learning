let a={
    name1:'Gourmani',
    language:'Javascript',
};

console.log(a);

let p={
    run:()=>{
        alert("run")
    }
};

a.__proto__=p
a.run();


p.__proto__={
name:'Jackie',
}


console.log(a.name)