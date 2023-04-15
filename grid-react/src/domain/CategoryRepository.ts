import { Category } from "./Category";

export interface CategoryRepository {
    search(): Promise<Category[]>;
}