import { categories } from '../../responses';
import { Category } from '../domain/Category';
import { CategoryRepository } from '../domain/CategoryRepository';

export class InMemoryCategoryRepository implements CategoryRepository{
    byId(id: string): Promise<Category | null> {
        const category = categories.find(category => category.id === id);
        return Promise.resolve(category || null);
    }
    search(): Promise<Category[]> {
        return Promise.resolve(categories);
    }
}