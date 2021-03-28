import React from 'react';
import { observable, action, computed } from 'mobx';

class TodoStore {
    @observable todoInput = React.createRef();
    @observable filter = 'all';
    @observable beforeEditCache = '';
    @observable idForTodo = 3;
    @observable todos = [
      {
        'id': 1,
        'title': 'Finish MobX Screencast',
        'completed': false,
        'editing': false,
      },
      {
        'id': 2,
        'title': 'Take over MobX world',
        'completed': false,
        'editing': false,
      },
    ];


    @action addTodo = event => {
        if (event.key === 'Enter') {
          const todoInput = this.todoInput.current.value;
    
          if (todoInput.trim().length === 0) {
            return;
          }
          
          this.todos.push({
            id: this.idForTodo,
            title: todoInput,
            completed: false,
            editing: false
          });


        //   this.setState((prevState, props) => {
        //     let todos = prevState.todos;
        //     let idForTodo = prevState.idForTodo + 1;
    
        //     todos.push({
        //       id: idForTodo,
        //       title: todoInput,
        //       completed: false,
        //     });
    
        //     return { todos, idForTodo };
        //   });

          this.idForTodo++;
          this.todoInput.current.value = '';
        }
      }

      @action deleteTodo = (index) => {
        this.todos.splice(index, 1);

        // this.setState((prevState, props) => {
        //   let todos = prevState.todos;
    
        //   todos.splice(index, 1);
    
        //   return { todos };
        // });
      }
    
      @action checkTodo = (todo, index, event) => {
        todo.completed = !todo.completed;

        this.todos.splice(index, 1, todo);
        
        // this.setState((prevState, props) => {
        //   let todos = prevState.todos;
        //   todo.completed = !todo.completed;
    
        //   todos.splice(index, 1, todo);
    
        //   return { todos };
        // });
      }
    
      @action editTodo = (todo, index, event) => {
        todo.editing = true;
        this.beforeEditCache = todo.title;
        
        this.splice(index, 1, todo);

        // this.setState((prevState, props) => {
        //   let todos = prevState.todos;
        //   todo.editing = true;
    
        //   todos.splice(index, 1, todo);
    
        //   return { todos, beforeEditCache: todo.title };
        // });
      }
    
      @action doneEdit = (todo, index, event) => {
        todo.editing = false;

        if (event.target.value.trim().length === 0) {
            todo.title = this.beforeEditCache;
        } else {
            todo.title = event.target.value;
        }

        this.todos.splice(index, 1, todo);
    
        // this.setState((prevState, props) => {
        //   let todos = prevState.todos;
        //   todo.editing = false;
    
        //   if (event.target.value.trim().length === 0) {
        //     todo.title = prevState.beforeEditCache;
        //   } else {
        //     todo.title = event.target.value;
        //   }
    
        //   todos.splice(index, 1, todo);
    
        //   return { todos };
        // });
      }
    
      @action cancelEdit = (todo, index, event) => {
        todo.title = this.beforeEditCache;
        todo.editing = false;

        this.todos.splice(index, 1, todo);

        // this.setState((prevState, props) => {
        //   let todos = prevState.todos;
    
        //   todo.title = prevState.beforeEditCache;
        //   todo.editing = false;
    
        //   todos.splice(index, 1, todo);
    
        //   return { todos };
        // });
      }


}

const store = new TodoStore();
export default store;