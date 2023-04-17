import React from "react";
import styles from "./Layout.module.scss"
import { InMemoryCategoryRepository } from "../../infrastructure/InMemoryCategoryRepository";
import { InMemoryProductRepository } from "../../infrastructure/InMemoryProductRepository";
import { useGetCategories } from "./useGetCategories";
import { useGetProducts } from "./useGetProducts";


// eslint-disable-next-line no-empty-pattern
export function Layout({
        inMemoryCategoryRepository,
        inMemoryProductRepository
    } : {
        inMemoryCategoryRepository : InMemoryCategoryRepository,
        inMemoryProductRepository : InMemoryProductRepository
}){

    const { categories } = useGetCategories(inMemoryCategoryRepository);
    const { products } = useGetProducts(inMemoryProductRepository);

    return (
        <>
            <header className={styles.header}>
                { categories.map(category => (
                    <div className={styles.category} key={category.id} >
                        <strong>{category.name}</strong>
                    </div>
                ) ) }
            </header>
            <div className={styles.grid}>
                {
                    products.map((product) => (
                        <div className={styles.item} key={product.id}>
                            <strong> { product.name } </strong>
                            <p>{ product.description } </p>
                            <img src={product.image} alt={product.description} />
                        </div>
                    ) )
                }
            </div>
        </>
    );
};