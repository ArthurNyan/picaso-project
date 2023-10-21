import { createBrowserRouter, RouterProvider as ReactRouterProvider } from 'react-router-dom';
import HomePage from '../../Pages/HomePage/HomePage';
import PostPage from '../../Pages/PostPage/PostPage';

const router = createBrowserRouter([
    {
        path: '/',
        Component: HomePage,
    },
    {
        path: '/:id',
        Component: PostPage
    }
]);

export const RouterProvider = () => {
    return <ReactRouterProvider router={router} />;
};