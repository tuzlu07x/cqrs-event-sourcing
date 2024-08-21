import { Column, Entity, PrimaryColumn } from 'typeorm';

@Entity({ name: 'products' })
export default class Product {
  @PrimaryColumn()
  id: number;

  @Column()
  name: string;

  @Column()
  description: string;

  @Column()
  price: number;
}
