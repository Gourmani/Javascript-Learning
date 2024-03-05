let key=prompt("Enter key you want to set")

let value=prompt("Enter the value for this key")

localStorage.setItem(key,value)

console.log(`The1 value at ${key} is ${localStorage.getItem(key)}`)