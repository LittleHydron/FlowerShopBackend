import { Module } from '@nestjs/common';
import { ConfigService } from '@nestjs/config';
import { TypeOrmModule } from '@nestjs/typeorm';

@Module({
    imports: [
        TypeOrmModule.forRootAsync({
            useFactory: async (configService: ConfigService) => ({
                type: 'mysql',
                host: configService.getOrThrow('DB_HOST'),
                port: parseInt(configService.getOrThrow('DB_PORT'), 10),
                username: configService.getOrThrow('DB_USERNAME'),
                password: configService.getOrThrow('DB_PASSWORD'),
                database: configService.getOrThrow('DB_NAME'),
                entities: [__dirname + '/../**/*Entity{.ts,.js}'],
                autoLoadEntities: true,
                synchronize: true,
            }),
            inject: [ConfigService],
        }),
    ],
})
export class DatabaseModule {}
