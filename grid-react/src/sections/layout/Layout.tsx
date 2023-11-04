import React, { useState } from "react";
import styles from "./Layout.module.scss";
import { useGetCategories } from "./useGetCategories";
import { useGetProducts } from "./useGetProducts";
import { CategoryRepository } from "../../domain/CategoryRepository";
import { ProductRepository } from "../../domain/ProductRepository";
import { CategoryList } from "./categoryList/CategoryList";
import { ProductList } from "./productList/ProductList";
import { ProductsGrid } from "../../domain/ProductsGrid";


// eslint-disable-next-line no-empty-pattern
export function Layout({
        categoryRepository,
        productRepository
    } : {
        categoryRepository : CategoryRepository,
        productRepository : ProductRepository
}){

    const [category, setCategory] = useState('')
    const { categories } = useGetCategories(categoryRepository);
    const { products } = useGetProducts(productRepository);
    const productsGrid = new ProductsGrid(products)
    const productList = productsGrid.getProducts(category)
    console.log('productList: ', productList )


    return (
        <>
            <h1 className={styles.title}>El Menú</h1>
            <header className={styles.header} >
                < CategoryList
                    categories={ categories }
                    onChangeCategory={(categoryId: string) => setCategory(categoryId)}
                />
            </header>
            <ProductList
                products={productList}
            />
        <hr />
    </>
    );
};