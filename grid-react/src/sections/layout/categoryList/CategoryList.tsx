import React from "react";
import { Category } from "../../../domain/Category";
import styles from "./CategoryList.module.scss";
import { Link } from "react-router-dom";

export function CategoryList(
        {
            categories,
            onChangeCategory
        }:
        {
            categories: Category [],
            onChangeCategory: (categoryId: string) => void,
        }
    ) {

    // function handleClick(name: string, event: any){
    //     console.log(event);
    //     alert(`Category Clicked: ${name}`);
    // }
    return (
        <>
        <header className={styles.header}>
            <nav>
                <ul>
                    { categories.map(category => (
                            // <Link to={`/category/${category.id}`}
                            //     className={ styles.category }
                            //     key={ category.id } >
                            //         { category.name }
                            // </Link>
                            <li className={styles.category}
                                key={ category.id } >
                                <a
                                    onClick={(e) => onChangeCategory(category.id)}
                                    className={ styles.category }
                                    >
                                        { category.name }
                                </a>
                            </li>
                    ) ) }
                </ul>
            </nav>
        </header>
        </>
    );
}