import { observable, action } from 'mobx';
export default class TodosStore {
    @observable
    todos = [{id: 'id01', todoInfo: '我要做的事情', completed: false}]
    @action
    addTodo(todoInfo){
        this.todos.push({
            id: new Date().getTime(),
            todoInfo: todoInfo,
            completed: false
        });
    }
}