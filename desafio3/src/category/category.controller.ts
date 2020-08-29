import { Controller, Get } from '@nestjs/common';
import { Category } from './category.entity';

@Controller('categories')
export class CategoryController {

    @Get()
    list(): Array<Category> {
        return []
    }

}
