import { Injectable } from '@nestjs/common';
import { Repository } from 'typeorm';
import { InjectRepository } from '@nestjs/typeorm';
import { Category } from '../entity/category.entity';

@Injectable()
export class CategoryService {

    constructor(
        @InjectRepository(Category)
        private repository: Repository<Category>,
    ) {}

    async list() {
        return await this.repository.find()
    }

    async save(category: Category) {
        return await this.repository.save(category)
    }
        
}
