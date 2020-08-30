import { Factory, Seeder } from 'typeorm-seeding'
import { Connection } from 'typeorm'
import { Category } from '../entity/category.entity'

export default class CreateCategories implements Seeder {
  public async run(factory: Factory, connection: Connection): Promise<any> {
    await connection
      .createQueryBuilder()
      .insert()
      .into(Category)
      .values([
        { name: 'Categoria 001', url: 'https://www.dictionary.com/browse/categories' },
        { name: 'Categoria 002', url: 'https://dictionary.cambridge.org/dictionary/english/category' },
        { name: 'Categoria 003', url: 'https://en.wikipedia.org/wiki/Wikipedia:Contents/Categories' },
        { name: 'Categoria 004', url: 'https://www.wikihow.com/Special:CategoryListing' },
        { name: 'Categoria 005', url: 'https://www.flaticon.com/categories' },
        { name: 'Categoria 006', url: 'https://www.aliexpress.com/all-wholesale-products.html' },
        { name: 'Categoria 007', url: 'https://dictionary.cambridge.org/dictionary/english/category' },
        { name: 'Categoria 008', url: 'https://www.thefreedictionary.com/categories' },
        { name: 'Categoria 009', url: 'https://encyclopedia2.thefreedictionary.com/Categories' },
        { name: 'Categoria 010', url: 'https://www.mercadolivre.com.br/c/mais-categorias' },
      ])
      .execute()
  }
}