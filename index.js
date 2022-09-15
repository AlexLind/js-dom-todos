todoList = document.querySelector('#todo-list')


addEventListener('submit', (event) => {
    event.preventDefault()
    console.log(document.getElementById('addTodo').value)
    fetch('http://localhost:3000/todos', {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json'
        },
        body: JSON.stringify({
            title: document.getElementById('addTodo').value,
            completed: false
        })
     })
     renderTodoList(document.getElementById('addTodo').value)
     document.getElementById('addTodo').value = ''
})




fetch('http://localhost:3000/todos')
 .then(function (response) {
   return response.json()
 })
 .then(function (todos) {
    for (let i = 0; i < todos.length; i++) {
        console.log(todos[i]);
   renderTodoList(todos[i].title, todos[i].completed);
    }
 })

 const renderTodoList = (name, completed) => {
    const todoItem = document.createElement('li')
    todoItem.innerHTML = name;
    todoItem.className = `completed-${completed}`
    todoList.append(todoItem);
 }




 console.log(todoList)