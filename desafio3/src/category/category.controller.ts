import { Controller, Get, Post, Request, Req } from '@nestjs/common';
import { CategoryService } from './category.service';

@Controller('categories')
export class CategoryController {

    constructor(private readonly categoryService: CategoryService) {}

    @Get()
    async list() {
        return await this.categoryService.list()
    }

    @Post()
    async create(@Req() req: Request) {
        return await this.categoryService.save(req.body as any)
    }

}
