import { Injectable } from '@nestjs/common';
import { CreateUserDto } from './dto/create-user.dto';
import { UpdateUserDto } from './dto/update-user.dto';
// 连接数据库
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { User } from './entities/user.entity';

@Injectable()
export class UserService {
  constructor(
    @InjectRepository(User) private userRepository: Repository<User>,
  ) {}
  create(createUserDto: CreateUserDto) {
    // 创建一个用户
    const user = new User();
    user.username = createUserDto.username;
    user.password = createUserDto.password;
    user.email = createUserDto.email;
    // 保存到数据库
    return this.userRepository.save(user);
  }

  login(params) {
    console.log('params', params);
    // 登录
    return new Promise((resolve, reject) => {
      setTimeout(() => {
        resolve({
          code: 200,
          data: {
            username: 'admin',
            token: '1234567890',
          },
          success: true,
          message: '登录成功',
        });
      }, 100);
    });
  }

  getUserInfo() {
    const obj = {
      code: 200,
      data: {
        userId: '1',
        username: 'admin',
        realName: 'Admin',
        avatar: '',
        desc: 'manager',
        password: 'mima',
        token: '1234567890',
      },
      success: true,
      message: '',
    };
    return Promise.resolve(obj);
  }

  findAll() {
    return `This action returns all user`;
  }

  findOne(id: number) {
    return `This action returns a #${id} user`;
  }

  update(id: number, updateUserDto: UpdateUserDto) {
    return `This action updates a #${id} user`;
  }

  remove(id: number) {
    return `This action removes a #${id} user`;
  }
}
