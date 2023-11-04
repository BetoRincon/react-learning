import React from 'react';

import {
    createBrowserRouter,
    RouterProvider
} from 'react-router-dom';
import { LayoutFactory } from './LayoutFactory';
import { CategoryDetail } from './sections/layout/CategoryDetail/CategoryDetail';
import { ProductDetailFactory } from './sections/layout/productList/ProductDetailFactory';


const router = createBrowserRouter([
    {
        path:"/",
        element: <LayoutFactory />
    },
    // {
    //     path:"/category/:categoryId",
    //     element: <CategoryDetail />
    // }
    {
            path:"/products/:productId",
            element: <ProductDetailFactory/>

    }
]);

export function Router(){
    return <RouterProvider router={router} />;
}