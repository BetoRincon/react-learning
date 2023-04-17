import { Product } from "./Product";

export interface ProductRepository {
    search(): Promise<Product[]>;
}