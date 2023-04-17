import { useEffect, useState } from "react";
import { Category } from "../../domain/Category";
import { CategoryRepository } from "../../domain/CategoryRepository";

export function useGetCategories(
    repository: CategoryRepository
) : { categories: Category [] } {

    const [categories, setCategories] = useState<Category[]>([])

    useEffect(() => {
        repository
            .search()
            .then(categories => setCategories (categories))
    }, [categories])

    return { categories }
}