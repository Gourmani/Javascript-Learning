// function fun(){
//     var name='Gorrila';
//     function displayName(){
//         console.log(name);
//         displayName();
//     }
// }

// fun()




const x=()=>{
    let a=1
    console.log(a)

    const y=()=>{
        let a=2
        console.log(a)
        const z=()=>{
            let a=3
            console.log(a)
        }
    }
    y()

}
x()
