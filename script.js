var todoList = {
  todos: [],
  addTodo: function (todoText) {
    this.todos.push({
      todoText: todoText,
      completed: false
    });
  },
  changeTodo: function (position, todoText) {
    this.todos[position].todoText = todoText;
  },
  deleteTodo: function (position) {
    this.todos.splice(position, 1);
  },
  toggleCompleted: function (position) {
    var todo = this.todos[position];
    todo.completed = !todo.completed;
  },
  toggleAll: function () {
    var totalTodos = this.todos.length;
    var completedTodos = 0;
    //get number of completed todos.
    this.todos.forEach(function (todo) {
      if (todo.completed === true) {
        completedTodos++;
      }
    });

    this.todos.forEach(function (todo) {
      if (completedTodos === totalTodos) {
        todo.completed = false;
      } else {
        todo.completed = true;
      }
    });
  }
};

var handlers = {
  addTodo: function () {
    var addTodoTextInput = document.getElementById('addTodoTextInput');
    todoList.addTodo(addTodoTextInput.value);
    addTodoTextInput.value = '';
    view.displayTodos();
  },
  changeTodo: function () {
    var changeTodoPositionInput = document.getElementById('changeTodoPositionInput');
    var changeTodoTextInput = document.getElementById('changeTodoTextInput');
    todoList.changeTodo(changeTodoPositionInput.valueAsNumber, changeTodoTextInput.value);
    changeTodoPositionInput.value = '';
    changeTodoTextInput.value = '';
    view.displayTodos();
  },
  deleteTodo: function (position) {
    todoList.deleteTodo(position)
    view.displayTodos();
  },
  toggleCompleted: function () {
    var toggleCompletedPositionInput = document.getElementById('toggleCompletedPositionInput');
    todoList.toggleCompleted(toggleCompletedPositionInput.valueAsNumber);
    toggleCompletedPositionInput.value = '';
    view.displayTodos();
  },
  toggleAll: function () {
    todoList.toggleAll();
    view.displayTodos();
  }

};

var view = {
  displayTodos: function () {
    var todosUl = document.querySelector('ul');
    todosUl.innerHTML = ''; //clears out list before displayig

    todoList.todos.forEach(function (todo, position) {
      var todoLi = document.createElement('li');
      var todoTextWithCompletion = '';
      //build up a string to display the todo
      if (todo.completed === true) {
        todoTextWithCompletion = '(x)' + todo.todoText;
      } else {
        todoTextWithCompletion = '( )' + todo.todoText;
      }
      todoLi.id = position;
      todoLi.textContent = todoTextWithCompletion;
      todoLi.appendChild(this.createDeleteButton());
      todosUl.appendChild(todoLi); //to insert todo Li into todoUl
    }, this);
  },
  createDeleteButton: function () {
    var deleteButton = document.createElement('button');
    deleteButton.textContent = 'Delete';
    deleteButton.className = 'deleteButton'
    return deleteButton;
  },
  setUpEventListeners: function () {
    var todosUl = document.querySelector('ul');
    todosUl.addEventListener('click', function (event) {
      //get the element that was clicked on
      var elementClicked = event.target;
      //check if elementClicked is a delete button
      if (elementClicked.className === 'deleteButton') {
        //run deleteTodo, as a number, point to elementClicked
        //reference li element, which is parentNode, then id
        handlers.deleteTodo(parseInt(elementClicked.parentNode.id));
      }
    });
  }
};

view.setUpEventListeners();