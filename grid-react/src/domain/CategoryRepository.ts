import { Category } from "./Category";

export interface CategoryRepository {
    search(): Promise<Category[]>;
    byId(id: string): Promise<Category | null>;
}