import { Injectable } from '@nestjs/common';
import { createUser } from './services/users';

@Injectable()
export class AppService {
  getHello(): object {
    return { status: 200, message: 'OK' }
  }
  async createUser(input : any): Promise<any> {
    let res = await createUser(input);
    return res;
  }
}
