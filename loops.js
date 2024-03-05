let sum=0;

for(let i=0;i<5;i++){
    sum+=i;
}
console.log(sum);




//for in loop

let obj={
    gour:"45",
    mani:"67",
    choudhary:"98",

}
for(a in obj){
    console.log("marks of " +a+":"+obj[a]);
} 



//while loop


let n=prompt("enter the value of n")
n=Number.parseInt(n)
 let i=0;
 while(i<n){
    console.log(i);
    i++;
 }


 //do_while loop
let n=prompt("enter the value of n")
n=Number.parseInt(n)
 let i=0;
 do{
    console.log(i);
    i++;
 }while(i<n)