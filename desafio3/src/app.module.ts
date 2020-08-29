import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { CategoryController } from './category/category.controller';
import { CategoryModule } from './category/category.module';

@Module({
  imports: [CategoryModule],
  controllers: [AppController, CategoryController],
  providers: [AppService],
})
export class AppModule {}
