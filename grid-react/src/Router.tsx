import React from 'react';

import {
    createBrowserRouter,
    RouterProvider
} from 'react-router-dom';
import { LayoutFactory } from './LayoutFactory';
import { CategoryDetail } from './sections/layout/CategoryDetail/CategoryDetail';


const router = createBrowserRouter([
    {
        path:"/",
        element: <LayoutFactory />
    },
    {
        path:"/category/:categoryId",
        element: <CategoryDetail />
    }
]);

export function Router(){
    return <RouterProvider router={router} />;
}