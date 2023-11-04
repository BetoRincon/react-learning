import { Product } from "./Product";

export interface ProductRepository {
    search(): Promise<Product[]>;
    searchById(productId: string): Promise<Product | null>;
}