import { Module } from '@nestjs/common';
import { RedisRepository } from './redis.repository';

@Module({
    imports: [
        CacheModule.registerAsync({
            imports: [AppConfigModule],
            useClass: CacheConfigService
        })
    ],
    providers: [RedisRepository],
    exports: [RedisRepository]
})
export class RedisModule {}
