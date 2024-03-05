

// let runAgain=true;
// const candrive=((age)=>{
//     return age>18?true:false;
// })
// while(runAgain){
//     let age=prompt("Enter your age : ")
//     age=Number.parseInt(age);

//     if(age<18){
//         console.error("Please enter the valid age");
//         break;
//     }


// if(candrive(age)){
//     alert("You can drive")
// }
// else{
//     alert("You can't drive")
// }
// runAgain=confirm("Do you want to play again");
// }

//part 2

let num=prompt("Enter any number")

if(num>4){
    location.href="https://www.google.com"
}
else{
    alert("Plear enter the valid number")
}

let color=prompt("Enter the background color : ")
document.body.style.backgroundColor=color