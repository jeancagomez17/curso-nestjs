import { Module } from '@nestjs/common';
import { taskSchema } from './schemas/task.schema';
import { TaskController } from './task.controller';
import { TaskService } from './task.service';
import { MongooseModule } from '@nestjs/mongoose';
@Module({
    imports:[MongooseModule.forFeature([
        {name:"Task",schema:taskSchema}
    ])],
    controllers:[TaskController],
    providers: [TaskService]
})
export class TaskModule {}
