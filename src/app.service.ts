import { Inject, Injectable, OnModuleInit } from '@nestjs/common';
import { ClientGrpc } from '@nestjs/microservices';
import { Observable } from 'rxjs';

class Todo {
  todo: string
}
interface TodoContoller {
getTodo(data: {}): Observable<Todo>
setTodo(data: Todo): Observable<Todo>
}
@Injectable()
export class AppService implements OnModuleInit {
  private todoService: TodoContoller
  constructor(@Inject('TodoController') private client: ClientGrpc){}

  onModuleInit() {
    this.todoService = this.client.getService<TodoContoller>('TodoController')
  }


  getTodo(data: object = {}): Observable<Todo> {
    return this.todoService.getTodo({});
  }

  setTodo(data: Todo): Observable<Todo>{
    return this.todoService.setTodo(data);
  }

}
