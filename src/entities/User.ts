import {
  BaseEntity,
  Column, Entity, PrimaryColumn,
} from 'typeorm';
import { v4 as uuid } from 'uuid';

@Entity('users')
class User extends BaseEntity {
  @PrimaryColumn('uuid')
  id: string = uuid();

  @Column('varchar')
  name: string;

  @Column('varchar')
  email: string;

  @Column('varchar')
  city: string;
}

export { User };
