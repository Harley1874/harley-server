import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { PostsModule } from './posts/posts.module';

// 链接数据库
import { TypeOrmModule } from '@nestjs/typeorm';
import { ConfigService, ConfigModule } from '@nestjs/config';
import envConfig from '../config/env';

@Module({
  imports: [
    PostsModule,
    ConfigModule.forRoot({
      isGlobal: true, // 全局模块
      envFilePath: [envConfig.path], // 环境配置文件
    }),
    TypeOrmModule.forRootAsync({
      imports: [ConfigModule],
      inject: [ConfigService],
      useFactory: async (config) => {
        const isProd = config.get('NODE_ENV') === 'production';
        return {
          type: 'mysql', // 数据库类型
          host: config.get('DB_HOST'), // 主机，默认为localhost
          port: config.get('DB_PORT'), // 端口，默认为3306
          username: 'root' || config.get('DB_USER'), // 用户名
          password: '123456' || config.get('DB_PASSWORD'), // 密码
          database: config.get('DB_DATABASE'), // 数据库名
          entities: [__dirname + '/**/*.entity{.ts,.js}'],
          synchronize: !isProd,
          timezone: '+08:00', // 服务器上配置的时区
        };
      },
    }),
  ], // 导入模块,使用其他模块的服务,比如数据库,缓存等,
  controllers: [AppController], // 控制器,处理请求和响应,返回数据
  providers: [AppService], // 服务提供者
})
export class AppModule {}
