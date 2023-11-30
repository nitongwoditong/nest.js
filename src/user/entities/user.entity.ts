import { Entity, Column, PrimaryGeneratedColumn } from 'typeorm';

@Entity()
export class User {
  // @PrimaryGeneratedColumn('uuid')
  @PrimaryGeneratedColumn()
  id: number;
  @Column()
  name: string;
  @Column()
  desc: string;
}
