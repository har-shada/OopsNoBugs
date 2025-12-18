//    event propagation phases
// 1. capturing : going down (i.e root to target)
//2. target : when we are at the element that has triggred the event
//3. bubbling: down to up (i.e target to root)

//problems: 

// we unable to  add  eventlistener dyanamically so thats why there are some mehtods which helps to solve this problem /
// for example if we created 9 boxes with hard code but we give acces to the user to add somthing then we are not able to add eventlistenrs to that products which are added dynamically by user 
// so so solve this problem we have some methods

//problem1 : memory prblm:  more children more memory waste it is by  more eventlistenr more memroy waste
//prblm2 :  error changes big bcz we have more eventlisterner more chnces to get eror
//  prblm3: it is difficult  to add more eventlisterns

const person1={
    name:"Raj",
    greet(){
        console.log("hello my name is "+ this.name);
    }
};
const person2 ={
    name:"raju",
};
person1.greet.call(person2);
