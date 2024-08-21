import { Column, Entity, PrimaryColumn } from 'typeorm';

@Entity({ name: 'user_activities' })
export class UserActivity {
  @PrimaryColumn()
  id: number;

  @Column()
  productId: number;

  @Column()
  userId: string;

  @Column()
  activityType: string;

  @Column()
  timestamp: Date;

  @Column({ nullable: true })
  duration: number;
}
