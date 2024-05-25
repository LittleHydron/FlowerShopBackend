import { Module } from '@nestjs/common';
import { TypeOrmModule, TypeOrmModuleOptions } from '@nestjs/typeorm';
import { ConfigModule, ConfigService } from '@nestjs/config';

@Module({
    imports: [
        ConfigModule.forRoot({
            isGlobal: true,
        }),
        TypeOrmModule.forRootAsync({
            imports: [ConfigModule],
            useFactory: async (configService: ConfigService): Promise<TypeOrmModuleOptions> => {
                const dbConfig: TypeOrmModuleOptions = {
                    type: 'mysql',
                    host: configService.get<string>('DB_HOST'),
                    port: configService.get<number>('DB_PORT'),
                    username: configService.get<string>('DB_USERNAME'),
                    password: configService.get<string>('DB_PASSWORD'),
                    database: configService.get<string>('DB_NAME'),
                    entities: [__dirname + '../../entities/*Entity.ts'],
                    autoLoadEntities: true,
                    synchronize: true,
                };
                console.log('Database Configuration connected');
                return dbConfig;
            },
            inject: [ConfigService],
        }),
    ],
})
export class DatabaseModule {}
