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
    
          this.setState((prevState, props) => {
            let todos = prevState.todos;
            let idForTodo = prevState.idForTodo + 1;
    
            todos.push({
              id: idForTodo,
              title: todoInput,
              completed: false,
            });
    
            return { todos, idForTodo };
          });
    
          this.todoInput.current.value = '';
        }
      }




}

const store = new TodoStore();
export default store;