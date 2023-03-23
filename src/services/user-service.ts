import create from './http-service';
export interface User {
  id: number;
  name: string;
  address: object;
}

export default create('/users');
