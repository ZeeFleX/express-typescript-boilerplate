import {
  Table,
  Column,
  Model,
  HasMany,
  HasOne,
  ForeignKey,
} from 'sequelize-typescript';
import Profile from './profile.model';

@Table
export default class User extends Model<User> {
  @Column
  email: string;

  @HasOne(() => Profile)
  profile: Profile;
}
