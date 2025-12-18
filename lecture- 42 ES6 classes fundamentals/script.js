 function Cars(name,model,speed){//this is constructor
    this.name= name;
    this.model= model;
    this.speed=0;

 };

 Cars.prototype.isRunning=function(){
  this.speed >0 ?console.log("running") : console.log("Not running");
};
 

 Cars.prototype.changeSpeed =function(newSpeed){
   this.speed=newSpeed;
 };

 const car1= new Cars("Bmw","m5");
 car1.isRunning();
 car1.changeSpeed(30);
 car1.isRunning();

 //class :
 //class are used for group constructor and protytpe methods
 // - objects made by class are all instances
 //- like constructor it also return "this"
 //this refers  to the class 
//class are not hoisted so we should decalred first and then call functions are hoisted so we can call directly  before declaration but not in class 

class Car{
    constructor(name,model){
        this.name=name;
        this.model=model;
        this.speed=0;
    }
    changeSpeed(newSpeed){
        this.speed= newSpeed;//the function chnagespeed  are in prototype 

    }
    isRunning(){
        this.speed>0 ? console.log("Running"): console.log("Not Running");//in this case the "this" keyword refers to creta i.e obj
    }
 }
 const creta = new Car("creta","CR-1223");
 console.log({creta});
 creta.changeSpeed();

 creta.isRunning();


 //no. of days increse
 //method: absent present 

 class attendenceCalculator{
    constructor(name,grade){
       this.name=name;
       this.grade=grade;
       this.present=0;
       this.totalDays=0;
     

    }
    
    markAbsent(){
        this.totalDays++;
    }


    
    markPresent(){
        this.present++;
        this.totalDays++;

    }
    printAttendance(){
        const {name,present,totalDays}= this;
        console.log("Attendence percentage of " + name +" is "+ ((present/totalDays)*100).toFixed(2));
    }

}


const att= new attendenceCalculator("Raju",10);
att.markPresent();
att.markPresent();
att.markPresent();
att.markPresent();
att.markAbsent();
att.printAttendance();
//===============================================================================


//getter and setter in class

// geeter and setter are used to implement  encapsulation
// getter :we cannot change data it is read only it goes into infinite recursion 
// setter: it is chnageable 
// set cannot return anything if we  try to print set then it returns undefine
//set always required exactly one parameter if we are not pass any paramenter then is give red line error bcz  the meaning of set itself is to change
class Student{
    constructor({id,name,dob,grade}){
        this.id = id;// Note:this are data protperty
        this.name=name;
        this._dob= dob;
        this.grade=grade;
        this.marks=0;
    }
    get dob(){       //using get and  set this are accesser properties
        return this._dob;//if we are not giving undescore it goes into infinite recuression so to solve this problem we just add _ before dob
    }
set marks(newMarks){
    this._marks = newMarks;
}
get marks(){
    return this._marks;
}
}

const mukesh= new Student({
    id:"ST-1234",
    name:"mukesh",
    dob:"24-12-2000",
    grade:10,


});
console.log(mukesh.dob);// this is accesing how to access get
mukesh.marks=30;
console.log(mukesh.marks);
//

//static method 
// static are not object based they are only for class or it belongs to class not object
///it is acces using class name
//static always call first
//static method
class User{
    constructor(username,role){
        this.username = username;
        this.role=role;

    }
    static guest(){
        return new User("guest","guest");

    }

}
const guestUser= User.guest();//accesing static method here User is classname and guest is static mehtod

///private proterty 
//whenever we want some peroperties which are not accessing out of the class then we use private property
//while descrtucing we have obj in both side

//private usgae: sensitive infromation ,some function which are not neccesary to user we kepp it in private

class Bank{
    #pin=1234;
    constructor(firstPin){
 this.#pin=firstPin;



    }
    deposite(money){
        this.balance += money;

    }
    withdraw(userPin,money){
        return userPin=== this.#pin && this.balance >= money
         ?(this.balance-= money)
         : null;
    }
    checkBalance(userPin){
        return userPin === this.#pin ? this.balance : null;
    }
}

const sbi=  new Bank(4321);
sbi.deposite(150);
console.log(sbi.checkBalance(4321));
sbi,withdraw(431,10);


// console.log(sbi.#pin); //throws error
console.log(sbi["#pin"]); //unable to access the value of PIN -> prints undefined
console.log(sbi.pin); //unable to access the value of PIN -> prints undefined
console.log(sbi.checkBalance(4321));