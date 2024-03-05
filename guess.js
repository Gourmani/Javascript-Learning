let x=Math.random()*100
x=parseInt(x);
//alert(x);
let b;

let attempt=0;
while(x!==Number.parseInt(b)){
let b=prompt("Guess any number : ")
attempt++;

if(x===Number.parseInt(b)){
    alert("you find the jackpot")
    console.log("Total number of attempt made : "+ attempt)
}
else if(x<Number.parseInt(b)){
    alert(b + " is greater than ")
}
else{
    alert(b + " is smaller than ")
}
}