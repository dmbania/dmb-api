import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { DmbController } from './dmb/dmb.controller';
import { RedisService } from './redis/redis.repository';
import { RedisModule } from './redis/redis.module';

@Module({
  imports: [RedisModule],
  controllers: [AppController, DmbController],
  providers: [AppService, RedisService],
})
export class AppModule {}
