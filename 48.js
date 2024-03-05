




let x = function(e) {
    alert("Hello world1");
};

let y = function(e) {
    alert("Hello world2");
};

var btn = document.getElementById('btn'); // Replace 'btn' with the actual ID of your button

btn.addEventListener('click', x);
btn.addEventListener('click', y);

let a = prompt("Enter your favourite number");
  if (a=="2"){
    btn.removeEventListener('click',x);
  }
