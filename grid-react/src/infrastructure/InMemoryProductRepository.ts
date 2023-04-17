import { Product } from "../domain/Product";
import { ProductRepository } from "../domain/ProductRepository";
import { products } from "../../responses";

export class InMemoryProductRepository implements ProductRepository {
    search(): Promise<Product[]> {
        return Promise.resolve(products)
    }

}