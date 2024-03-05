console.log(document.cookie);

document.cookie = "name1=Gourmani";
document.cookie = "name2=Choudhary";
document.cookie = "age=25";

let key = prompt("Enter the key");
let value = prompt("Enter the Value");

// Use proper syntax to set a new cookie
document.cookie = `${encodeURIComponent(key)}=${encodeURIComponent(value)}`;

console.log(document.cookie);
