const id= setInterval(()=>{// it is good to store setInterval in variable so  always store setinterval
    const date=  Date.now();
    let diff=Date.now()- date;
console.log("start");
    while(diff < 5000){
      //  console.log();
      diff= Date.now- date;
    }
    console.log("end");
},1000)//we have seen here we put 1 sec time for call but it takes 5 sec so to resolve this ambiquity we use setInterval using  recursive set time out

setTimeout(()=>{
    clearInterval(id);
},2000);

function setIntervalUsingSetTimeout(){
     const date=  Date.now();
    let diff=Date.now()- date;

    console.log("start");
     
    while(diff < 5000){
      //  console.log();
      diff= Date.now- date;
    

}
console.log("end");
setTimeout(setIntervalUsingSetTimeout,1000);
}//call back means when xyz task is completed then it should run
//callback means function as a argument

function callbackfn(){}
function saveFormData(){

    //CALLBACK   HELL: 
    // code to save  all personal details set
    setTimeout(()=>{
        // code to save  all educational details set
   
       setTimeout(()=>{
            // code to save  all work experience details set
            //submit the form
      },1000);
   },1000)
}
saveFormData(callbackfn);//function as a argument



//managing callbacks to prevent Callback Hell(The pyramid of doom) it was just a design issue
function savePersonalDetails(){

    //code to save all personal  details
    setTimeout(saveEducationalDetails(),1000);
}
function saveEducationalDetails(){
//code to save all educational details
setTimeout(saveWorkExperieneceDetails(),1000)
}

function saveWorkExperieneceDetails(){
    //code to save all work experiencxe details
}

//callback function use cases : we can show error 
function callbackAsAnErrorFunction(error, data){
if(error) console.error(error);
else console.log(data);
}

function fetchUser(){
    return {id:1 , name:"Harshada"};
}

function displayUser(errorCallbackfn){
    setTimeout(()=>{
        //assume that it is fetched from an API & may also fail
        const userDetails = fetchUser();
        //if API is failing to fetch. it returns null which will be assigned to userDetails
        if(userDetails){
            errorCallbackfn(null,userDetails);
        }
        else {
            errorCallbackfn("user not found", null);
        }
    },1000);
}
displayUser(callbackAsAnErrorFunction);//we are not called function here we just passed it as function as argument

//real world callback form
//callback as an error handling 
//nestedcall backs settimeout nested 

//we create named functions to prevent call back hell

//callbacks, set interval, settimeout read doccs for this 

function callbackExecutionFlow(){
    console.log("start");
    setTimeout(()=>{
        console.log("Inside callback");
    },0);
    console.log("end");
}
callbackExecutionFlow();