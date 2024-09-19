import { Entity, PrimaryGeneratedColumn, Column } from 'typeorm';

@Entity()
export class UserLogin {
  @PrimaryGeneratedColumn()
  id: number;

  @Column()
  password: string;

  @Column()
  email: string;
}