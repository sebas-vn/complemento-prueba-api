import { Controller, Get, Post, HttpModule, Res, HttpStatus, Body, Param, Query } from '@nestjs/common';
import { ImagenesService } from './imagenes.service';

@Controller('imagenes')
export class ImagenesController {
  constructor(private imagenesService: ImagenesService) {}

  @Get('/')
  async getImagenes(@Res() res) {
    const imagenes = await this.imagenesService.getImagenes();
    return res.status(HttpStatus.OK).json({
      imagenes,
    });
  }

  @Post('/')
  async favoriteImagen(@Res() res, @Body() body) {
    const imagenes = await this.imagenesService.favoriteImagen(body);
    return res.status(HttpStatus.OK).json({
      imagenes,
    });
  }

  @Get('/favourite')
  async getFavorite(@Res() res, @Query('sub_id') id) {
    const imagenes = await this.imagenesService.getFavoritos(id);
    return res.status(HttpStatus.OK).json({
      imagenes,
    });
  }
}
