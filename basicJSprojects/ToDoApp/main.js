// document.addEventListener("DOMContentLoaded", function() {
    let todoInput = document.querySelector(".input");
    let addTodoBtn = document.querySelector(".button");
    let todosContainer = document.querySelector(".todos-container");
    let todoText = " ";

    // let localData = JSON.parse(localStorage.getItem("todos"));
    let todos = [];

    addTodoBtn.addEventListener("click", (e) => {
        e.preventDefault();
        todoText = todoInput.value.trim();
        // if (todoText === "") return;
        if (todoText.length > 0){
            const todo = {
                id: Date.now(),
                text: todoText,
                completed: false
            };
            todos.push(todo);
        }
        console.log(todos);
        renderTodos();
        todoInput.value = "";
    });

    function renderTodos() {
        todosContainer.innerHTML = "";
        todos.forEach(todo => {
            const todoDiv = document.createElement("div");
            // todoDiv.innerHTML = `<input type="checkbox">`;
            todoDiv.classList.add("todos", "flex", "items-center", "py-2");

            const checkbox = document.createElement("input");
            checkbox.type = "checkbox";
            checkbox.checked = todo.completed;
            checkbox.addEventListener("change", () => {
                todo.completed = checkbox.checked;
                renderTodos(); 
            });
            todoDiv.appendChild(checkbox);

            const todoText = document.createElement("div");
            todoText.textContent = todo.text;
            todoText.classList.add("todo-text");
            if (todo.completed) {
                todoText.classList.add("checked-todo");
            }
            todoDiv.appendChild(todoText);

            const deleteBtn = document.createElement("button");
            deleteBtn.innerHTML = `<i class="material-icons-outlined">delete</i>`;
            deleteBtn.classList.add("del-btn", "ml-2");
            deleteBtn.addEventListener("click", function() {
                todos = todos.filter(item => item.id !== todo.id);
                renderTodos();
            });

            todoDiv.appendChild(todoText);
            todoDiv.appendChild(deleteBtn);
            todosContainer.appendChild(todoDiv);
        });
    }
// });
