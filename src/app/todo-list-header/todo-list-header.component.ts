// import { Component, OnInit } from '@angular/core';
import { Component, Output, EventEmitter } from '@angular/core';
//probably need to ad EventEmitter above
import { Todo } from '../todo';

@Component({
  selector: 'app-todo-list-header',
  templateUrl: './todo-list-header.component.html',
  styleUrls: ['./todo-list-header.component.css']
})
// export class TodoListHeaderComponent implements OnInit {
export class TodoListHeaderComponent {
  newTodo: Todo = new Todo();
  @Output()
  add: EventEmitter<Todo> = new EventEmitter();

  constructor() { }

  addTodo(){
    this.add.emit(this.newTodo);
    this.newTodo = new Todo();
  }
  // ngOnInit() {
  // }

}
