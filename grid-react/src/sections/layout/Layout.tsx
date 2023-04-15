import React, { useEffect, useState } from "react";
import styles from "./Layout.module.scss"
import { InMemoryCategoryRepository } from "../../infrastructure/InMemoryCategoryRepository";
import { Category } from "../../domain/Category";



// eslint-disable-next-line no-empty-pattern
export function Layout({ inMemoryCategoryRepository } : {inMemoryCategoryRepository : InMemoryCategoryRepository}){

    const [categories, setCategories] = useState< Category[]>([]);
    useEffect(() => {
        inMemoryCategoryRepository
            .search()
            .then(categories => setCategories(categories))
    },[])

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
                <div className={styles.item}>1</div>
                <div className={styles.item}>2</div>
                <div className={styles.item}>3</div>
                <div className={styles.item}>1</div>
                <div className={styles.item}>2</div>
                <div className={styles.item}>3</div>
                <div className={styles.item}>1</div>


            </div>
        </>
    );
};