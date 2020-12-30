import { Injectable } from '@nestjs/common';
import { Model } from "mongoose";
import { InjectModel } from "@nestjs/mongoose";

import { Gato } from "./interfaces/gatos.interface";
import { CreateGatoDTO } from "./dto/gatos.dto";

@Injectable()
export class GatosService {
  constructor(@InjectModel('Gato') private readonly gatoModel: Model<Gato>) {}

  async getGatos(): Promise<Gato[]> {
    const gatos = await this.gatoModel.find();
    return gatos;
  }

  async getGato(id: string): Promise<Gato> {
    const gato = await this.gatoModel.findById(id);
    return gato;
  }

  async createGato(createGatoDTO: CreateGatoDTO): Promise<Gato> {
    const gato = new this.gatoModel(createGatoDTO);
    return await gato.save();
  }

  async deleteGato(id: string): Promise<Gato> {
    const deletedGato = await this.gatoModel.findByIdAndDelete(id);
    return deletedGato;
  }

  async updateGato(id: string, createGatoDTO: CreateGatoDTO): Promise<Gato> {
    const updatedGato = await this.gatoModel.findByIdAndUpdate( id, createGatoDTO, { new: true } );
    return updatedGato;
  }
}
