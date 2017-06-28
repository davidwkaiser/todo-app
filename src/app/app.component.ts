import { Component, OnInit } from '@angular/core';
import {Todo} from './todo'
import {TodoDataService} from './todo-data.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
  providers: [TodoDataService]
})
export class AppComponent implements OnInit {
  todos: Todo[] = [];
  // newTodo: Todo = new Todo();

  constructor(private todoDataService: TodoDataService){
  }

  public ngOnInit(){
    this.todoDataService.getAllTodos()
    .subscribe(
      (todos) => {
        this.todos = todos;
      }
    );
  }

  // addTodo(){
  // this.todoDataService.addTodo(this.newTodo);
  // this.newTodo = new Todo();
  // }

  onAddTodo(todo){
    this.todoDataService
    .addTodo(todo)
    .subscribe(
      (newTodo) => {
        this.todos = this.todos.concat(newTodo);
      }
    );
    // this.newTodo = new Todo();
  }

  onToggleTodoComplete(todo){
    this.todoDataService
    .toggleTodoComplete(todo)
    .subscribe(
      (updatedTodo) => {
        todo = updatedTodo;
      }
    );
  }

  onRemoveTodo(todo){
    this.todoDataService
    .deleteTodoById(todo.id)
    .subscribe(
      (_) => {
        this.todos = this.todos.filter((t)=>t.id !==todo.id);
      }
    );
  }

  // get todos(){
  // return this.todoDataService.getAllTodos();
  // }
}
