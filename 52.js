//synchronous programming



// let a=prompt("what is your name :  ")
// let b=prompt("what is your age : ")
// let c=prompt("what do you do for living : ")

// console.log("My name is "+a+" and I am "+b+ " years old ,I work as "+c);

//asynchronous programming

// console.log("First")
// setTimeout(function(){
//     console.log("Hey I am Good")
// },3000);
// console.log("Second")

//callback function


function loadscript(src,callback){
    let script=document.createElement('script')
    script.src=src
    script.onload=function(){
        console.log("Loaded script with SRC: "+ src)
        callback(src);
    }
    document.body.appendChild(script);
}

function hello(src){
    alert('Hello worls!'+ src);
}

function goodmorning(src){
    alert('goodmorning' + src);
}

loadscript("https://cdn.jsdelivr.net/npm/bootstrap@5.3.3/dist/js/bootstrap.bundle.min.js",hello)

