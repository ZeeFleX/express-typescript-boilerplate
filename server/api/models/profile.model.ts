import {
  Table,
  Column,
  Model,
  HasMany,
  BelongsTo,
  ForeignKey,
} from 'sequelize-typescript';
import User from './user.model';

@Table
export default class Profile extends Model<Profile> {
  @Column
  firstname: string;

  @ForeignKey(() => User)
  @Column
  userId: number;

  @BelongsTo(() => User)
  user: User;
}
