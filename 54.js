let promise= new Promise(function(resolve,reject){
    alert("I am alert in Promise")
    resolve(56)
})


console.log("Hello")

setTimeout(function(){
    console.log("Hello in 2 seconds")
},2000)


console.log("My name is "+"Gourmani")
console.log(promise)