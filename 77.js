// class Railwayform{
   
// constructor(){
//     console.log("Constructor is Called")
// }


//     submit(){
//         alert(this.name + ": Your form is submitted"+ this.trainno)
//     }

//     cancel(){
//         alert(this.name+ ": your ticket is canceled"+ this.trainno)
//     }

//     fill(val,trainno){
//         this.name=val
//         this.trainno=trainno
//     }
// }

// let harry=new Railwayform()

// harry.fill("Gourmani",11234)
// let rohan=new Railwayform()
// rohan.fill("Choudhary",43564)

// harry.submit()
// rohan.submit()

// rohan.cancel()


class RailwayForm{
constructor( givenname, trainNo ,address){
    console.log("Constructor called..."+givenname+","+trainNo+" "+address);
    this.givenname = givenname
    this.trainNo = trainNo 
    this.address=address
}


submit(){
    alert(this.givenname+ ":your form is submitted for train number: "+this.trainNo)

}

cancel(){
    alert(this.givenname+ ":your form is cancelled for train number: "+this.trainNo)
}

}


let harryForm=new RailwayForm("Gourmani",12353,"420,Tumkur,Bihar")
harryForm.submit()
 