let marks=[45,67,87,98]
for(let i=0;i<marks.length;i++){
    console.log(marks[i]);
}


//array method

//1 toString

let num=[45,67,878,9898,77746]
console.log("toString: "+num.toString());


//.join property
let c=num.join("*");
console.log(c);

//pop method

num.pop();
console.log(num);


//push method

num.push(99);
console.log(num);

//shift method
let r=num.shift();
console.log(r,num);

//unshift method

let r=num.unshift(44);
console.log(r,num);



//concat method

let num1=[34,56,76,89,65]
let num2=[45,67,56,54,34]
let num3=num1.concat(num2);
console.log(num3);


//sort method

let x=[65,78,54,32,65,47,86]
console.log(x.sort());


//by using compare function

let compare=(a,b)=>{
    return  a-b;
}

num.sort(compare);
console.log(num);


//splice method

let spl=[43,46,76,78,98,97,99,90]

spl.splice(2,3,10,20,20);
console.log(spl);



