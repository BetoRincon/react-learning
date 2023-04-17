import { useEffect, useState } from "react";
import { Product } from "../../domain/Product";
import { ProductRepository } from "../../domain/ProductRepository";

export function useGetProducts(
    repository: ProductRepository
): { products: Product[] } {

    const [products, setProducts] = useState<Product[]>([]);

    useEffect(() => {
        repository
            .search()
            .then(products => setProducts(products));
    }, [products])

    return { products };
}