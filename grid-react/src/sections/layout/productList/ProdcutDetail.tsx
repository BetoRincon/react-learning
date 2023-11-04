import React from "react";
import styles from "./ProductDetail.module.scss"
import { useParams } from "react-router-dom";
import { ProductRepository } from "../../../domain/ProductRepository";
import { useGetProductById } from "./useGetProduct";


export function ProductDetail(
    { productRepository } : { productRepository: ProductRepository }
){

    const { productId } = useParams() || null;
    const { product } = useGetProductById(productRepository, productId);
    console.log(product)
    return(
        <>
            <div className={styles.product_detail}>
                <div className={styles.product_card}>
                    <img
                        className={styles.product_image}
                        src={product?.image}
                        alt="100"
                        />
                    <h2 className={styles.product_title} >
                        { product?.name }
                    </h2>
                </div>
                <div>
                    {product?.description}
                </div>
            </div>
        </>
    )
}