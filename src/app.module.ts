import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { Category } from './category/entities/category.entity';
import { Product } from './product/entities/product.entity';
import { CategoryModule } from './category/category.module';
import { ProductModule } from './product/product.module';


@Module({
  imports: [
    TypeOrmModule.forRoot({
      type: 'mysql',
      host: 'localhost',
      port: 3306,
      username: 'root',
      password: '1705',
      database: 'loja_games',
      entities: [Category, Product],
      synchronize: true,
    }),
    CategoryModule,
    ProductModule,
  ],
})
export class AppModule {}

