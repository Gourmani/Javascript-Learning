let p1=new Promise((resolve,reject)=>{
    console.log("Hey I sm not resolved")
    setTimeout(()=>{
        resolve(1);

    },2000)
});

p1.then(()=>{
    console.log("congratulations your promise is resolved")
});