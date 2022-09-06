//selectors
const addButton = document.querySelector('.to-do-button');
const todoInput = document.querySelector('.to-do-input');
const todoList  = document.querySelector('.to-do-list');
const filter = document.querySelector('.filter-to-do');

//functions

const addTodo = (event) => {
    //prevent default behavior
    event.preventDefault();
    if (todoInput.value.includes('   ') || todoInput.value =='  ' || todoInput.value ==' ' || todoInput.value =='') return
    //created container for the to do list-item
    const todocontainer = document.createElement('div');
    todocontainer.classList.add('todo-items-container');
    
    //created li
    const li = document.createElement('li');
    //added class to li
    li.classList.add('todo-task');
    //added inner text
    li.innerText = todoInput.value;
   //added li to the list
    todocontainer.appendChild(li);
    //added complete icon
   const completebtn = document.createElement('button')
   completebtn.innerHTML=('<i class="fas fa-check"></i>');
   todocontainer.appendChild(completebtn);
   completebtn.classList.add("complete-btn");
   //added delete icon
   const deletebtn = document.createElement('button');
   deletebtn.innerHTML=('<i class="fas fa-trash"></i>');
   todocontainer.appendChild(deletebtn);
   deletebtn.classList.add("delete-btn");
   //append items container to the list
   todoList.appendChild(todocontainer); 
   //clearing todo input value
   todoInput.value = '';
}

const deleteTodo = (event) => {
    
    if (event.target.classList[0] ==='delete-btn'){
        event.target.parentElement.classList.toggle('fall');
        event.target.parentElement.addEventListener('transitionend',() =>{
        event.target.parentElement.remove();
    })
}
}
const completedTodo = (event) => {
    if(event.target.classList[0] === 'complete-btn'){
        event.target.parentElement.classList.toggle('completed');
    }
}

const filterTodo = (event) => {
    
}



//event Listeners
addButton.addEventListener('click', addTodo);
todoList.addEventListener('click',deleteTodo);
todoList.addEventListener('click',completedTodo);
filter.addEventListener('click', filterTodo);