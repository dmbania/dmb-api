import { AppController } from './app.controller';
import { AppService } from './app.service';
import { ConfigModule } from '@nestjs/config';
import { DmbController } from './dmb/dmb.controller';
import { Module } from '@nestjs/common';

@Module({
  imports: [ConfigModule.forRoot()],
  controllers: [AppController, DmbController],
  providers: [AppService],
})
export class AppModule {}
