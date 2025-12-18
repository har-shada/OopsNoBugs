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


//“1.We can reuse a function of one object for another object using call().
//2. it calls a function with a custom this
//3.call() can pass multiple arguments
//4."In an event, this usually points to the element that triggered it. 
// But if we want it to point to an object or class, we can use call(obj, arg1, arg2,…). Here, obj becomes the new this

// function greetMe(){
//    let name="raj";
//     console.log("hello this is "+  this.name);
// }
// const obj={
//     name:"harshada"
// };
// greetMe.call(obj);

// function Greet(){
//     console.log("hello " + this.name);
// }
// const obj={
//     name:"harshada"
// };
// const newfun= Greet.bind(obj);
// newfun();

// const btn = document.getElementById("btn");
