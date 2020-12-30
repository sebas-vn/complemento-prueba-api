import { Controller, Get, Post, Put, Delete, Res, HttpStatus, Body, Param, NotFoundException, } from '@nestjs/common';

import { CreateGatoDTO } from './dto/gatos.dto';

import { GatosService } from './gatos.service';

@Controller('gatos')
export class GatosController {
  constructor(private gatosService: GatosService) {}

  @Post('/')
  async createGato(@Res() res, @Body() createGatoDTO: CreateGatoDTO) {
    const gato = await this.gatosService.createGato(createGatoDTO);

    //console.log(createGatoDTO);
    return res.status(HttpStatus.OK).json({
      message: 'Gato Creado!',
      gato,
    });
  }

  @Get('/')
  async getGatos(@Res() res) {
    const gatos = await this.gatosService.getGatos();
    res.status(HttpStatus.OK).json({
      gatos,
    });
  }

  @Get('/:id')
  async getGato(@Res() res, @Param() id) {
    const gato = await this.gatosService.getGato(id.id);
    if (!gato) throw new NotFoundException('Gato No Existe');
    return res.status(HttpStatus.OK).json(gato);
  }

  @Delete('/:id')
  async deleteGato(@Res() res, @Param() id) {
    const gato = await this.gatosService.deleteGato(id.id);
    if (!gato) throw new NotFoundException('Gato no existe');
    return res.status(HttpStatus.OK).json({
      message: 'Gato Eliminado!',
      gato,
    });
  }

  @Put('/:id')
  async updateGato(@Res() res, @Body() body, @Param() id) {
    const gato = await this.gatosService.updateGato(id.id, body);
    if (!gato) throw new NotFoundException('Gato no existe');
    return res.status(HttpStatus.OK).json({
      message: 'Gato Actualizado!',
      gato,
    });
  }
}
