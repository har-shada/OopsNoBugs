const outerDiv= document.querySelector("outer-div");
const innerDiv=document.querySelector("inner-div");
const div1=document.querySelector("p");
 


outerDiv.addEventListener("click",()=>{
      console.log("outerdiv clicked ");

});
innerDiv.addEventListener("click",()=>{
      console.log("you've clicked  inner-div");

});
div1.addEventListener("click",()=>{
      console.log("you've clicked p");

});
Form





/*function eventClicked(event){
    console.log("you've clicked ");
}*/



//target phase:only elemt we target (event happend)
//capturing phase:(when we pass true )we are using capturing phase(anscestor to targeted eleemnmt)
//bubbling:opposite order(from target to parent) it is bydefault
//by default: value is false
//event propagtion: means how it goes from one event to another

//stop propagation