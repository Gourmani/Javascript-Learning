let b1 = document.getElementById('btn1');
let b2 = document.getElementById('btn2');
let b3 = document.getElementById('btn3');
let H = document.getElementById('Home');



let x = function() {
    alert("Button 1 clicked");
}

let y = function() {
    alert("Button 2 clicked");
}

let z = function() {
    alert("440 volt");
}

let h = function() {
    let url = "//www.google.com/maps/place/Ganesh+Narayan+Choudhary+Residence/@26.1816511,86.2367744,3a,75y,90t/data=!3m8!1e2!3m6!1sAF1QipNhkLOySCHrWFvn4fWb2uTvLfnqK4kiAyzX2xNb!2e10!3e12!6shttps:%2F%2Flh5.googleusercontent.com%2Fp%2FAF1QipNhkLOySCHrWFvn4fWb2uTvLfnqK4kiAyzX2xNb%3Dw222-h100-k-no!7i1280!8i576!4m7!3m6!1s0x39edd7143f92ff49:0xfe51dfc9a9772db2!8m2!3d26.1817175!4d86.2367538!10e5!16s%2Fg%2F11v05qdfqp?entry=ttu";
    window.location = url;
    window.focus();
}




 

b1.addEventListener('click', x);
b2.addEventListener('click', y);
b3.addEventListener('click', z);

H.addEventListener('click',h)
