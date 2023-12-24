import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';

@Module({
  imports: [], // 导入模块,使用其他模块的服务,比如数据库,缓存等,
  controllers: [AppController], // 控制器,处理请求和响应,返回数据
  providers: [AppService], // 服务提供者
})
export class AppModule {}
