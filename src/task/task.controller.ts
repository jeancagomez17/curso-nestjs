import { Controller, Delete, Get, Post, Put, Body, Param } from '@nestjs/common';
import { creatingTask } from './dto/ejemplo.dto';
import { TaskService } from './task.service';
import { ITask } from './interfaces/task';

@Controller('task')
export class TaskController {
    constructor(private taskService: TaskService) {}
    @Get()
    getTask(): Promise<ITask[]>{
        return this.taskService.getTasks()
    }
    @Get(':id')
    getTaskById(@Param('id') id: string):Promise<ITask>{
        return this.taskService.getTask(id)
    }
    @Post()
    createTask(@Body() task:creatingTask):Promise<ITask>{
        return this.taskService.createTask(task)
    }
    @Put(':id')
    updateTask(@Body() task:creatingTask, @Param('id') id):string{
        console.log(task)
        console.log(id)
        return 'task put'
    }
    @Delete(':id')
    deleteTask(@Param('id') id):string{
        console.log(id)
        return 'task delete'
    }
}
