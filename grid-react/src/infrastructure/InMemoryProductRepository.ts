import { Product } from "../domain/Product";
import { ProductRepository } from "../domain/ProductRepository";
import { products } from "../../responses";

export class InMemoryProductRepository implements ProductRepository {

    searchById(productId: string): Promise<Product | null> {
        const product = products.find(product => product.id === productId);
        return Promise.resolve(product || null)
    }
    search(): Promise<Product[]> {
        return Promise.resolve(products)
    }

}