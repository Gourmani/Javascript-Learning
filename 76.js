class Railwayform{

    submit(){
        alert(this.name + ": Your form is submitted"+ this.trainno)
    }

    cancel(){
        alert(this.name+ ": your ticket is canceled"+ this.trainno)
    }

    fill(val,trainno){
        this.name=val
        this.trainno=trainno
    }
}

let harry=new Railwayform()

harry.fill("Gourmani",11234)
let rohan=new Railwayform()
rohan.fill("Choudhary",43564)

harry.submit()
rohan.submit()

rohan.cancel()

