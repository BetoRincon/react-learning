import { useEffect, useState } from "react";
import { ProductRepository } from "../../../domain/ProductRepository";
import { Product } from "../../../domain/Product";

export function useGetProductById(
	repository: ProductRepository,
	productId?: string
): { product: Product | null} {
	const [product, setProduct ] = useState<Product | null >(null);

	useEffect(() => {
		if(!productId) return setProduct(null)
		repository
			.searchById(productId)
			.then(setProduct)
	}, []);

	return { product }

}