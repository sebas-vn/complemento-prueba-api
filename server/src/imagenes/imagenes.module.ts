import { HttpModule, Module } from '@nestjs/common';
import { ImagenesController } from './imagenes.controller';
import { ImagenesService } from './imagenes.service';

@Module({
  controllers: [ImagenesController],
  imports: [HttpModule],
  providers: [ImagenesService],
})
export class ImagenesModule {}
