// var todos = ['item 1', 'item 2', 'item 3'];
// //this function displays todos
// function displayTodos() {
//   console.log('My todos:', todos);
// }
// //this function adds todos and displays the new list
// function addTodo(todo) {
//   todos.push(todo);
//   displayTodos();
// }

// //addTodo('add new here');
// //displayTodos();

// //this function changes a todo item at position and displays the new list
// function changeTodo(position, newValue) {
//takes todo item in array and overides it with newValue. 
//   todos[position] = newValue; 
//   displayTodos();
// }

// //changeTodo(0, 'changed');


//this function deletes to do at position


// //deleteTodo(0);




//********************VERSION 3 - Objects***********************

var todoList = {
  todos: ['item 1', 'item 2', 'item 3'],
  displayTodos: function () {
    console.log('My todos:', this.todos); //changed to this
  },
  addTodo: function (todo) {
    this.todos.push(todo); //changed to this
    this.displayTodos();
  },
  changeTodo: function (position, newValue) {
    this.todos[position] = newValue; //changed to this
    this.displayTodos(); //changed to this
  },
  deleteTodo: function (position) {
    this.todos.splice(position, 1); //changed to this
    this.displayTodos(); //changed to this
  }
};


// //this function deletes to do at position
// function deleteTodo(position) {
//   todos.splice(position, 1);
//   displayTodos();
// }



//***************Version 4 - Booleans****************


//************Modify - addTodo should add objects, plus boolean for completed
var todoList = {
  todos: [],
  displayTodos: function () {
    console.log('My todos:', this.todos);
  },
  addTodo: function (todoText) { //updated parameter to take user text
    this.todos.push({ //add object
      todoText: todoText, //create object, user text passes in
      completed: false // create boolean, default is not completed
    });
    this.displayTodos();
  },
  changeTodo: function (position, newValue) {
    this.todos[position] = newValue;
    this.displayTodos();
  },
  deleteTodo: function (position) {
    this.todos.splice(position, 1);
    this.displayTodos();
  }
};

//************changeTodo should change the todoText property

var todoList = {
  todos: [],
  displayTodos: function () {
    console.log('My todos:', this.todos);
  },
  addTodo: function (todoText) {
    this.todos.push({
      todoText: todoText,
      completed: false
    });
    this.displayTodos();
  },
  //changed second parameter to todoText
  changeTodo: function (position, todoText) {

    //this.todos[position] = newValue; //no longer works

    //needs to point to todoTextObject
    this.todos[position].todoText = todoText;

    this.displayTodos();
  },
  deleteTodo: function (position) {
    this.todos.splice(position, 1);
    this.displayTodos();
  }
};

//***toggleCompleted should flip the completed property****


var todoList = {
  todos: [],
  displayTodos: function () {
    console.log('My todos:', this.todos);
  },
  addTodo: function (todoText) {
    this.todos.push({
      todoText: todoText,
      completed: false
    });
    this.displayTodos();
  },
  changeTodo: function (position, todoText) {
    this.todos[position].todoText = todoText;
    this.displayTodos();
  },
  deleteTodo: function (position) {
    this.todos.splice(position, 1);
    this.displayTodos();
  },
  //needs position so it knows which todo we need to modify 
  toggleCompleted: function (position) { //add new method
    //create variable todo to make it easier to read
    var todo = this.todos[position]; //position = specific todo
    todo.completed = !todo.completed;
    this.displayTodos();
  }
};

123