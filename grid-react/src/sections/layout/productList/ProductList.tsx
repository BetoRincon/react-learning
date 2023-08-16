import React from "react";
import { Product } from "../../../domain/Product";
import styles from "./ProductList.module.scss"

export function ProductList( { products }: { products : Product[] }){
    return(
        <>
            <div className={styles.grid}>
                {
                    products.map((product) => (
                        <div className={`${styles.item} ${product?.type === 'star' ? styles.item_star : ''}`} key={product.id}>
                            <div className={styles.content}>
                                <h3 className={styles.name} > { product.name } </h3>
                                <p>{ product.description } </p>
                            </div>
                            <img src={product.image} alt={product.description} />
                        </div>
                    ) )
                }
            </div>
        </>
    );
}