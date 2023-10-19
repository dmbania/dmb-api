import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { DmbController } from './dmb/dmb.controller';

@Module({
  imports: [],
  controllers: [AppController, DmbController],
  providers: [AppService],
})
export class AppModule {}
