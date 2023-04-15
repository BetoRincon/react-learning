import React from 'react';

import {
    createBrowserRouter,
    RouterProvider
} from 'react-router-dom';
import { LayoutFactory } from './LayoutFactory';


const router = createBrowserRouter([{
    path:"/",
    element: <LayoutFactory />
}]);

export function Router(){
    return <RouterProvider router={router} />;
}