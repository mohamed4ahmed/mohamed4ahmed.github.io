const form = document.getElementById('form');
const input = document.getElementById('input');
const todosUl = document.getElementById('todos');

 const todos = JSON.parse(localStorage.getItem('todos'));
 if(todos) { 
    todos.forEach(todo => {
        addTodo(todo)
    });

 }

form.addEventListener('submit' ,(e)=>{
e.preventDefault();

addTodo();

});

function addTodo(todo) { 
    let todoText = input.value;
    

    if  (todo) { 
         todoText = todo.text;
    }
    if (todoText) {
        const todoEL = document.createElement('li');
        if (todo && todo.complited) {
            todoEL.classList.add('complited');
        }

        todoEL.innerText = todoText;
    
        todoEL.addEventListener('click' ,()=>{
            todoEL.classList.toggle('complited');
           updateLs();
        });

        todoEL.addEventListener('contextmenu' ,(e)=>{
            e.preventDefault();
            todoEL.remove();
            updateLs();
        });
    
        todosUl.appendChild(todoEL);
        
        input.value = '';

        updateLs();
        
    }

    }
    

function updateLs() { 
 
    const todosEl = document.querySelectorAll('li');

    const todos = [];
    todosEl.forEach((todoEl) =>{
        todos.push({
            text: todoEl.innerText,
            complited: todoEl.classList.contains('complited')
        });
    });
    localStorage.setItem('todos',JSON.stringify(todos));
}




