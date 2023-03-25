import { Controller, Get, Param } from '@nestjs/common';
import { AppService } from './app.service';

@Controller()
export class AppController {
  constructor(private readonly appService: AppService) {}

  @Get()
  getHello() {
    return this.appService.getTodo();
  }

  @Get('set/:todo')
  setTodo(@Param('todo') todo: string){
    return this.appService.setTodo({todo});
  }
}
