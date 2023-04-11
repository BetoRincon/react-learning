import React from 'react';
import App from './App'
import {
    createBrowserRouter,
    RouterProvider
} from 'react-router-dom';



const router = createBrowserRouter([{
    path:"/",
    element: <App />
}]);

export function Router(){
    return <RouterProvider router={router} />;
}