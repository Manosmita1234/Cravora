
import React ,{lazy, Suspense}from "react"
import ReactDOM from "react-dom/client"
import Header from "./components/header"
import Main from "./components/body"
import About from "./components/about"
import  Contact  from "./components/contact"
import Error from "./components/error"
import RestaurantMenu from "./components/restaurantMenu"
import {createBrowserRouter, RouterProvider, Outlet} from "react-router"



const Lazyload = lazy(()=>import("./components/lazyloading"))
const App = () => {

    return(
        <div className = "app">
         <Header />
         <Outlet />
        </div>
    );
};

const AppRouter = createBrowserRouter([
    {
        path: "/",
        element: <App/>,
        errorElement: <Error />,
        children:[{
            path:"/",
            element:<Main />
        },
         {
        path: "/about",
        element: <About />,
    },
    {
        path: "/contact",
        element: <Contact />,
    },
{
    path:"/restaurantMenu/:resId",
    element: <RestaurantMenu />
},
{
    path: "/lazyloading",
    element: <Suspense fallback={<h1>Loading...</h1>}><Lazyload/></Suspense>,
}]
    },
]);

const root = ReactDOM.createRoot(document.getElementById("root"));
 
root.render(<RouterProvider router={AppRouter}/>);
