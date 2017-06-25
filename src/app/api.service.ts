import { Injectable } from '@angular/core';
import { environment } from 'environments/environment';

import { Http, Response } from '@angular/http';
import { Todo } from './todo';
import { Observable } from 'rxjs/Observable';

const API_URL = environment.apiUrl;

@Injectable()
export class ApiService {

  constructor(
    private http: Http
  ) { }
//get /todos
public getAllTodos(){
  //will use this.http.get()
}

//post/todos
public createTodo(todo: Todo){
  //will use this.http.post()
}

//get /todos/:id
public getTodoById(todo: Todo){
  //will use this.http/get()
}

//put /todos/:id
public updateTodo(todo: Todo){
  //will use this.http.put()
}

//delete /todos/:id
public deleteTodoById(todo: Todo){
  //will use this.http.delete()
}
}
