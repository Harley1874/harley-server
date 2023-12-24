import { Entity, Column, PrimaryGeneratedColumn, BeforeInsert } from 'typeorm';
import { Exclude } from 'class-transformer';

@Entity()
export class User {
  @PrimaryGeneratedColumn('uuid')
  id!: number;

  @Column()
  username!: string;

  @Column()
  email!: string;

  @Exclude()
  @Column()
  password!: string;

  @BeforeInsert()
  async hashPassword() {
    this.password = this.password + 'hash';
  }
}
