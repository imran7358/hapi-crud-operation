import { UserList } from '../entities/user.entity';
import { DataSource } from 'typeorm';
import { UserLogin } from '../entities/login.entity';

export const AppDataSource = new DataSource({
  type: 'postgres',
  host: 'localhost',
  port: 5432,
  username: 'mohammadimran',
  password: '',
  database: 'fkm-ltd',
  entities: [UserList,UserLogin],
  synchronize: true, // Only for development, don't use in production
});
