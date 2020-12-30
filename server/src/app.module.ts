import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { GatoModule } from "./gatos/gatos.module";
import { MongooseModule } from "@nestjs/mongoose";
import { ImagenesModule } from './imagenes/imagenes.module';

@Module({
  imports: [GatoModule, MongooseModule.forRoot('mongodb+srv://sebas-vn:kn67CAMYYoDbcXcH@cluster0.0j6i7.mongodb.net/gatos?retryWrites=true&w=majority', { useFindAndModify: false }), ImagenesModule],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
