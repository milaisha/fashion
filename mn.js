//selectors
const todoinput=document.getElementbyId("todo-input");
const todoButton=document.getElementbyId("todo-button");
const todoList=document.getElementbyId("todo-list");

// Eventlisteners
todoButton.addEventlistener('click', addTodo);


//function
function addTodo(Event){

//prevent form from submitting
    Event.preventDefault();
}

//todo Div
const todoDiv=document.createElement("Div");
todoDiv.classList.add('todo');

//create LI
const newTodo=document.createElement('li');
newTodo.innerText= todoInput.value;
newTodo.classList.add('todo-item');
todoDiv.appendChild(newTodo);

// CHECK BUTTON
const completedButton=document.createElement('Button');
completedButton.innerHTML= '<i> class= "fa fas-check"</i>';
completedButton.classList.add('completed-btn');
todoDiv.appendChild(completedButton);

// CHECK BUTTON
const trashButton=document.createElement('Button');
trashButton.innerHTML= '<i> class= "fa fas-trash"</i>';
trashButton.classList.add('trash-btn');
todoDiv.appendChild(trashButton);

//Append to List
todoList.appendChild(todoDiv);

//Clear todo INPUT VALUE
todoInput.value="";