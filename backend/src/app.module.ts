import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { AuthModule } from './auth/auth.module';
import {ConfigModule,ConfigService} from '@nestjs/config';
import {TypeOrmModule} from '@nestjs/typeorm';           // 引入TypeOrmModule模块
import {UserEntity} from './user/entities/user.entity'
import { UserModule } from './user/user.module';
@Module({
  imports: [
    ConfigModule.forRoot({isGlobal:true}),
    TypeOrmModule.forRootAsync({
      inject:[ConfigService],
      useFactory:(config:ConfigService) =>({
        type:'postgres' as const,
        host:config.get<string>('POSTGRES_HOST','localhost'),
        port:config.get<number>('POSTGRES_PORT',5432),
        username:config.get<string>('POSTGRES_USER','user'),
        password:config.get<string>('POSTGRES_PASSWORD','123456'),
        database:config.get<string>('POSTGRES_DB','knowledge_hub'),
        entities:[
          UserEntity
        ],
        synchronize:true,
        logging:true    //开发时开启日志，生产环境关闭
      })
    }),
    AuthModule,
    UserModule
  ],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
