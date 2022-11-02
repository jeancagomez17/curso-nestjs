import { Injectable } from '@nestjs/common';
import { ITask } from './interfaces/task';
import {InjectModel} from '@nestjs/mongoose'
import { Model } from 'mongoose';
import { creatingTask } from './dto/ejemplo.dto';
@Injectable()
export class TaskService {
   constructor(@InjectModel('Task') private taskModel: Model<ITask>){}

   async getTasks(){
    return await this.taskModel.find()
   }
   async getTask(id: string){
    return await this.taskModel.findById(id)
   }
   async createTask(createTask:creatingTask){
    const newTask = new this.taskModel(createTask)
    console.log(newTask)
    return await newTask.save()
    
   }

}
