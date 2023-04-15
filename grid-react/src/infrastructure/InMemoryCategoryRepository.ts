import { categories } from '../../responses';
import { Category } from '../domain/Category';
import { CategoryRepository } from '../domain/CategoryRepository';

export class InMemoryCategoryRepository implements CategoryRepository{
    search(): Promise<Category[]> {
        return Promise.resolve(categories);
    }

}