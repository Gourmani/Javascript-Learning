let arr=[1,2,3,4,5,6]

let b=prompt("Enter the number of elements you want in the array")

arr.push(b);

console.log(arr, b);

//problem 2

let arr = [];
let b;

do {
    b = prompt("Enter the number of elements you want in the array (enter 0 to stop): ");
    b = parseInt(b); // Convert input to a number
    arr.push(b);
} while (b !== 0);

console.log(arr);


//pproblem 4


let arr=[1,2,3,4,5]

let b=arr.map((x)=>{
    return x*x;
})

console.log(b);
