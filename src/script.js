
import React ,{lazy, Suspense}from "react"
import ReactDOM from "react-dom/client"
import Header from "./components/header"
import Main from "./components/body"
import About from "./components/about"
import  Contact  from "./components/contact"
import Error from "./components/error"
import RestaurantMenu from "./components/retaurantMenu";
import {createBrowserRouter, RouterProvider, Outlet} from "react-router"
import { Provider } from "react-redux";
import appStore from "../utils/appStore";
import Cart from "./components/cart";



const Lazyload = lazy(()=>import("./components/lazyloading"))
const App = () => {

    return(
        <Provider store ={appStore}>

        <div className = "app">
         <Header />
         <Outlet />
        </div>
        </Provider>
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
        path: "/cart",
        element: <Cart/>
    },
{
    path: "/restaurant/:resId",
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
