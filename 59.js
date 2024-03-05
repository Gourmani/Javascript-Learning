async function harry(){

let delhiweather=new Promise((resolve,reject)=>{
    setTimeout(()=>{
      resolve("20 Deg")
    },1000)
})


let bangaloreweather=new Promise((resolve,reject)=>{
    setTimeout(()=>{
      resolve("27 Deg")
    },2000)
})
// delhiweather.then(alert)
// bangaloreweather.then(alert)

console.log("Fetching bangalore weather....")
let delhiW= await delhiweather
console.log("delhi weather is fetched "+ delhiW)



console.log("Fetching bangalore weather.....")
let bangaloreW= await bangaloreweather
console.log("Bangalore Weather is Fetched ...."+bangaloreW)

return [delhiW,bangaloreW]
}
console.log("The weather details od bangalore and delhi is diplayed")
let a=harry()
console.log(a)




