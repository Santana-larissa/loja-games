import { Entity, PrimaryGeneratedColumn, Column, ManyToOne } from 'typeorm';
import { Category } from '../../category/entities/category.entity';

@Entity()
export class Product {
  @PrimaryGeneratedColumn()
    id: number;

  @Column()
    nome: string;

  @Column('decimal', { precision: 10, scale: 2 })
    preco: number; 

  @Column()
    descricao: string;

  @ManyToOne(() => Category, category => category.products, { eager: true })
    category: Category;
}

