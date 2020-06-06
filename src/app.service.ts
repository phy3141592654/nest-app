import { Injectable } from '@nestjs/common';
import { createUser, getUser } from './services/users';

@Injectable()
export class AppService {
  healthCheck(): object {
    return { status: 200, message: 'OK' }
  }
  async createUser(input : any): Promise<any> {
    let res = await createUser(input);
    return res;
  }
  async getUser(query : any): Promise<any> {
    let res = await getUser(query);
    return res;
  }
}
