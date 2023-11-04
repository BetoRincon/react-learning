import React from 'react';
import { ProductDetail } from "./ProdcutDetail";
import { InMemoryProductRepository } from '../../../infrastructure/InMemoryProductRepository';

const inMemoryProductRepository = new InMemoryProductRepository();


export function ProductDetailFactory(){
	return	(<ProductDetail
				productRepository={inMemoryProductRepository}
			/>)

}