import { Module } from '@nestjs/common';
import { PruebaService } from './prueba.service';
import { PruebaController } from './prueba.controller';
import { MongooseModule } from '@nestjs/mongoose';
import { pruebaSchema } from './schema/prueba.schema';
@Module({
  imports:[MongooseModule.forFeature([
    {name:'Prueba', schema:pruebaSchema}
  ])],
  controllers: [PruebaController],
  providers: [PruebaService]
})
export class PruebaModule {}
