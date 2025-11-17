const addBtn=document.querySelector(".add-btn");
const todoItemSection=document.querySelector("#todo-items");

addBtn.addEventListener("click",(e)=>{
    e.preventDefault();

    const todoElement=document.querySelector("#todo");
     if(todoElement.value.trim() === ""){
        alert("Please enter a todo!");
        return;
    }

    
    const todoItem=document.createElement("div");
    todoItem.className="todo-item";
    todoItem.innerHTML=` <p>
                ${todoElement.value} 
                </p>
                <div class="todo-buttons">
                    <button id="edit-btn">Edit</button>
                    <button id="delete-btn">Delete  </button>
                </div>`
                todoItemSection.appendChild(todoItem);
               todoElement.value="";//it is kind of resetting   
                
                const deleteBtn=todoItem.querySelector("#delete-btn");
                deleteBtn.onclick= ()=>todoItem.remove();
                const editBtn=todoItem.querySelector("#edit-btn");
                editBtn.addEventListener("click",()=>{
                    if(editBtn.textContent==="Save"){

                    }else{
                        editBtn.textContent="Save";

                        const pElement= todoItem.querySelector("p");
                        pElement.style.display="none";

                        const newInputElement = document.createElement("input");
                        newInputElement.value= pElement.textContent.trim();

                        const  todoButtons= todoItem.querySelector(".todo-buttons");
                        todoItem.insertBefore(newInputElement,todoButtons);
                
                        
                    }
                })
                todoElement.value ="";

    


// const divElement= document.createElement("div");
// divElement.className="todo"
// divElement.innerHTML=
// todoItem.innerHTML= `
//                 <p>
//                    ${todoItemSection.value}
//                 </p>
                
//                 <div class="todo-buttons">
//                     <button>Edit</button>
//                     <button>Delete  </button>
//                 </div>` 
//                 todoItemSection.appendChild(divElement);
// todoItemSection.value="";
});


