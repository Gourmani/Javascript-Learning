function onePlusAvg(x,y){
    console.log("Done");
    return 1+(x+y)/2;
   
}

let a=1;
let b=2;
let c=3;

console.log("Before calling the function:" ,onePlusAvg(a,b));
console.log("Before calling the function:" ,onePlusAvg(a,c));
console.log("Before calling the function:" ,onePlusAvg(c,b));


//PRINT OBJECT USNG FOR LOOP

let marks={
    harry:"87",
    shubham:"78",
    rohit:"89",
    ritik:"67"
}

for(let i=0;i<Object.keys(marks).length;i++){
    console.log(Object.keys(marks)[i]+":"+marks[Object.keys(marks)[i]]);
}


//make a function to find the mean of 4 numbers 

function mean(a,b,c,d){
    return((a+b+c+d)/4);
}
console.log(mean(5,10,15,20));

//uisng arrow function

const mean=(a,b,c,d)=>{
    return ((a+b+c+d)/4);
}

console .log(mean(5,10,15,20));