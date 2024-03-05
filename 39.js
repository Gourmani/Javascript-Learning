let user=prompt("Enter S, W or G")

let cpuI=Math.floor(Math.random()*3)

let cpu=["S","W","G"][cpuI]// the value is maped b/w 0 ,  1 and 2

const match=((cpu,user)=>{
if(cpu==user){
    return "Nobody is winner, match is Tied";
}
else if(cpu=='S' && user=='W'){
    return "cpu";
}
else if(cpu=='S' && user=='G'){
    return "user";
}
else if(cpu=='G' && user=='W'){
    return "user";
}
else if(cpu=='G' && user=='S'){
    return "user";
}
else if(cpu=='W' && user=='S'){
    return "user";
}
else if(cpu=='W' && user=='G'){
    return "cpu";
}
})
let result=match(cpu,user);
alert("The winner is : "+ result );