let p1= new Promise(function(resolve,reject){
console.log("Promise P1 is pending")
setTimeout(()=>{
    console.log("I am a promise and I am fullfilled")
    resolve(true)

    //reject(new Error("I am an Error"));
},5000)
});
let p2= new Promise(function(resolve,reject){
    console.log("Promise P2 is pending")
    setTimeout(()=>{
        console.log("I am a promise and I am rejected")
        //resolve(true)
    
        reject(new Error("I am an Error"));
    },5000)
    });

    p1.then((value)=>{
        console.log(value)
    });


    p2.catch((error)=>{
        console.log("Some error occured in P2")
    });