import { observable, action, computed } from 'mobx';

class TodoStore {
    filter = 'all';
    beforeEditCache = '';
    idForTodo = 3;
    todos= [
      {
        'id': 1,
        'title': 'Finish React Screencast',
        'completed': false,
        'editing': false,
      },
      {
        'id': 2,
        'title': 'Take over world',
        'completed': false,
        'editing': false,
      },
    ];
}

const store = new TodoStore();
export default store;