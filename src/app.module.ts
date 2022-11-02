import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { TaskModule } from './task/task.module';
import { MongooseModule } from '@nestjs/mongoose';
import { PruebaModule } from './prueba/prueba.module';




@Module({
  imports: [TaskModule, MongooseModule.forRoot('mongodb+srv://root:root@clusterprueba.v1lkh.mongodb.net/?retryWrites=true&w=majority'), PruebaModule],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
