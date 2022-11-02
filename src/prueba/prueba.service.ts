import { Injectable } from '@nestjs/common';
import { CreatePruebaDto } from './dto/create-prueba.dto';
import { UpdatePruebaDto } from './dto/update-prueba.dto';
import { InjectModel } from '@nestjs/mongoose';
import { Model } from 'mongoose';
import { IPrueba } from './interface/prueba.interface';

@Injectable()
export class PruebaService {
  constructor(@InjectModel('Prueba') private pruebaModel: Model<IPrueba>){}
  async create(createPruebaDto: CreatePruebaDto) {
    const newPrueba = new this.pruebaModel(createPruebaDto)
    return newPrueba.save()
  }

  async findAll() {
    return await this.pruebaModel.find();
  }

  findOne(id: number) {
    return `This action returns a #${id} prueba`;
  }

  update(id: number, updatePruebaDto: UpdatePruebaDto) {
    return `This action updates a #${id} prueba`;
  }

  remove(id: number) {
    return `This action removes a #${id} prueba`;
  }
}
