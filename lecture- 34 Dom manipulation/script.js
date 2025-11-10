    //note 
        console.log(window.document.body);
        console.log(document.body);


        //note down the differenece between this two
        console.log(document.body.firstChild);
        console.log(document.body.firstElementChild);


        //selectors in dom
        console.log(document.querySelector("div"));
        console.log(document.querySelectorAll("div"));
        console.log(document.querySelector(".first-div-child"));
        console.log(document.querySelector("#second-div"));
        console.log(document.querySelector("div.first-div"));
        console.log(document.querySelector("div#second-div"));

        //Other  specific selectors
        //select an element based on class
        console.log(document.getElementsByClassName("first-div-child"));
         console.log(document.getElementById("second-div"));
          console.log(document.getElementsByTagName("div"));

          //changing css style using js

          const para = document.querySelector("p");
          console.log(para);
          para.style.color="red";
          para.style.backgroundColor="yellow";

          //setting,editing,and deleting n attribute value
          const imageElement = document.querySelector("img");
          //updating  the value of existing attribute
          imageElement.setAttribute("src","image2.png");//it updates image1.png to image2.png image

          //creating a new data attribute

          const newData= document.querySelector(".first-div");
          newData.setAttribute("data-price",500);
           //deleting an attribute ,by setting its value to null
           imageElement.setAttribute("data-price",null);

           //accessing and updating text of an element
           console.log(para.innerHTML);//accessing
           para.innerHTML=`<strong>${para.textContent}</strong>`;
        //accessing the text value
        const paraa1=document.querySelector(".para1");
        console.log(paraa1.textContent);//accessing
     paraa1.textContent="This is new content"   ;//updating 

     //h.w ->write the differenece b/w innerHTML & textContent
     //setAttribut use cases

     //className property
     const sectionElement = document.querySelector(".class1");

     const classes=sectionElement.className.split(" ");
        classes.splice(2,1);
        sectionElement.className=classes.join(" ");
     
        //classList
        const sectionElementCopy= document.querySelector(".class1");
        console.log(sectionElementCopy.classList);
        console.log(sectionElementCopy.classList.add("class5"));
        console.log(sectionElementCopy.classList.remove("class1"));
        console.log(sectionElementCopy.classList.replace("class4","class7"));
         console.log (sectionElementCopy.classList.toggle);


       //Hw:write differenece betwwen class list and classname