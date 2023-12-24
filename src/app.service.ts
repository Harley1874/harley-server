import { Injectable } from '@nestjs/common';

@Injectable() // 修饰器, 用于标记类, 使其成为 Nest 可以管理的 provider, 也就是可以被依赖注入的对象
// 修饰后，通过appModule注册，就可以在其他地方使用了
export class AppService {
  getHello(): string {
    return 'Hello World!';
  }
}
