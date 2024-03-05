// let p1 = new Promise((resolve, reject) => {
//     setTimeout(() => {
//         console.log("Resolved after 2 seconds");
//         resolve(56);
//     }, 2000);
// });

// p1.then((value) => {
//     console.log(value);

//     let p2 = new Promise((resolve, reject) => {
//         resolve("Promise 2");
//     });
//     return p2;
// }).then((value)=>{
// console.log("we are done")
// }).then((value)=>{
//     console.log("Now we are pakka done")
// })


//Load script

const loadScript=(Src)=>{
    return new Promise((resolve,reject)=>{
        let script=document.createElement("script")
        script.type="text/javascript"
        script.src=srcdocument.body.appendChild(script)
        script.onload=()=>{
            resolve(1)
        }
        script.onerror=()=>{reject(0)}
    })
}

let p1=loadScript("https://code.jquery.com/jquery-3.4.1.min.js")
p1.then((value)=>{
    console.log(value)
}).catch((error)=>{
    console.log("we are having error in fetching this ")
})