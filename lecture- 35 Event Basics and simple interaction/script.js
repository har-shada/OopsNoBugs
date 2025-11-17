//creating an element
const h3Element= document.createElement("h3");
 h3Element.textContent="I'm h3 element";

 const div1 = document.querySelector("div");
 div1.appendChild(h3Element);//if the element is already present in dom and if appendchild then that element gets move to last position

 const h3Element1 = document.querySelector("h3");

 //Events in DOM
 const para1= document.querySelector("p");
 para1.addEventListener("click",(event)=>{
             para1Clicked(event);
 });
  para1.addEventListener("mousedown",(event)=>{
        para1.style.backgroundColor="yellow";
     //    para1Clicked(event);
     });
           para1.addEventListener("mouseup",(event)=>{
        para1.style.backgroundColor="green";
        // para1Clicked(event);
           });
        para1.addEventListener("mouseover",(event)=>{
        para1.style.backgroundColor="red";
        // para1Clicked(event);
           });
document.addEventListener("keydown",(event)=>{//we apply keydown on docuemnt not on variable name (i.e here para1 (variable name))
        para1.style.backgroundColor="purple";
         //para1Clicked(event);
           });

    
  //  para1.addEventListener("mouseup",(event))
    

 function para1Clicked(event){
    h3Element1.remove();
    console.log("You've clicked a para",event.type);    
 }


 //mouseover
 //mouseup
 //mousedown
 //keyup
 //keydown