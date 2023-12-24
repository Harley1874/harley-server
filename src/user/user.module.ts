import { Module } from '@nestjs/common';
import { UserService } from './user.service';
import { UserController } from './user.controller';

import { TypeOrmModule } from '@nestjs/typeorm';
import { User } from './entities/user.entity';

@Module({
  imports: [TypeOrmModule.forFeature([User])], // 导入模块,使用其他模块的服务,比如数据库,缓存等,
  controllers: [UserController],
  providers: [UserService],
})
export class UserModule {}
