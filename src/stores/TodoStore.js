import { observable, action, computed } from 'mobx';

class TodoStore {
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
}

const store = new TodoStore();
export default store;