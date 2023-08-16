import React from "react";
import { Category } from "../../../domain/Category";
import styles from "./CategoryList.module.scss";
import { Link } from "react-router-dom";

export function CategoryList({ categories }: { categories: Category [] }) {

    function handleClick(name: string, event: any){
        console.log(event);
        alert(`Category Clicked: ${name}`);
    }
    return (
        <>
            { categories.map(category => (
                    <Link to={`/category/${category.id}`}
                        className={ styles.category } 
                        key={ category.id } >
                            { category.name }
                    </Link>
            ) ) }
        </>
    );
}