
let a=document.getElementsByTagName('div')[0]

//a.innerHTML=a.innerHTTML+'<h1>This is an H1 Heading</h1>'


let div=document.createElement('div');
div.innerHTML='<h1>Hello world!</h1>';
a.appendChild(div);

a.append('pagala');
a.prepend('ghummakar----------------/n');
a.before('div')
a.after('gourmani')

a.replacewith('div')