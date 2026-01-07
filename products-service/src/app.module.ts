import { Module } from '@nestjs/common';
import { MongooseModule } from '@nestjs/mongoose';
import { ProductsModule } from './products/products.module';

@Module({
  imports: [
    MongooseModule.forRoot('mongodb://localhost:27017/products_db'),
    ProductsModule,
  ],
  controllers: [],
  providers: [],
})
export class AppModule {}
