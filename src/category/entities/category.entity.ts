import { Entity, PrimaryGeneratedColumn, Column, OneToMany } from 'typeorm';
import { Product } from '../../product/entities/product.entity';

@Entity()
export class Category {
  @PrimaryGeneratedColumn()
    id: number;

  @Column()
    nome: string;

  @Column()
    descricao: string;

  @OneToMany(() => Product, product => product.category)
    products: Product[];
}