//for each method


let T_sum=(element)=>{
    if(element%2==0){
        return true;
    }
    return false;
}

let a=[1,2,3,4,5,6,7,8,]
let sum=0;
a.forEach(T_sum);

console.log(sum);



//using for each find a numver is even or odd

let numbers = [1, 2, 3, 4, 5, 6, 7, 8];
let countEven = 0;
let num = [];

numbers.forEach(function(element) {
    if (element % 2 === 0) {
        countEven++;
        num.push(element);
    }
});

console.log(`The number of even numbers is: ${countEven}`);
console.log("Even numbers: " + num);

//map method 

let arr=[43,56,76,69,78 ]

let a=arr.map((value,index,array)=>{
    console.log(value,index,array);
    return value+index;

})

console.log(a);

//filter method


let marks=[34,56,76,33,23,67,89]

let b=marks.filter((a)=>{
    return a>40;
})

console.log(b);


//reduce method

let x=[1,2,3,4,5]

let p=x.reduce((a,b)=>{
    return a*b;
})

console.log(p);








