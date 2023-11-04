import React from "react";
import { Product } from "../../../domain/Product";
import styles from "./ProductList.module.scss"
import { Link } from "react-router-dom";

export function ProductList( { products }: { products : Product[] }){
    return(
        <>
            <div className={styles.grid}>
                {
                    products.map((product) => (
                        product ?
                            <Link
                                to={`/products/${product.id}`}
                                key={product.id}
                                className={`${styles.item} ${product?.type === 'star' ? styles.item_star : ''}`} >
                                    <div className={styles.content}>
                                        <h3 className={styles.name} > { product.name } </h3>
                                        <p>{ product.description } </p>
                                    </div>
                                    <img src={product.image} alt={product.description} />
                            </Link>
                        : null
                    ) )
                }
            </div>
        </>
    );
}