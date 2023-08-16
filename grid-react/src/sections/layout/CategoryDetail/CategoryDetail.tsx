import React from "react";
import { useParams } from "react-router-dom";
import { CategoryRepository } from "../../../domain/CategoryRepository";

export function CategoryDetail({
    categoryRepository
}: { categoryRepository :  CategoryRepository }){
    const { categoryId } = useParams();
    return(
        <>
            { categoryId }
        </>
    )
}