import { Entity, Column, PrimaryGeneratedColumn } from 'typeorm';
@Entity()
export class Wangxin {
  @PrimaryGeneratedColumn()
  id: number;

  @Column()
  name: string;
}
