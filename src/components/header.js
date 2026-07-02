import { useState, useEffect } from "react";
import foodLogo from "url:../foodLogo.png";
import { Link } from "react-router";
import useOnlineStatus from "../../utils/useOnlineStatus";
import {useSelector} from "react-redux";

const Header = () => {
    const onlineStatus = useOnlineStatus();

    const [btnName, setBtnName] = useState("login")
    useEffect(()=> console.log("rendered"));

    const cartItems = useSelector((store) =>store.cart.items);
    return(
        <div className = " flex justify-between">
            <div className = "imageContainer">
                <img className ="w-35" alt="logo" src={foodLogo}/>
            </div>
            <div className ="navbar flex justify-between items-center gap-5">
                <ul className="flex p-4 m-4">
                    <li>{onlineStatus?"🟢":"🔴"}</li>
                    <li className="px-4"><Link to="/">Home</Link></li>
                    <li className="px-4"><Link to="/about">About Us</Link></li>
                    <li className="px-4"><Link to="/contact">Contact</Link></li>
                    <li className="px-4"><Link>Cart</Link></li>
                    <li className="px-4"><Link to="/lazyloading">lazy</Link></li>
                    <li className = "px-4"><Link to="/cart"> 🛒 Cart({cartItems.length})</Link></li>
                    <button className ="loginBtn" onClick= {()=>{
                       btnName ==="login"? setBtnName("logout"): setBtnName("login")
                    }} >{btnName}
                    </button>
                </ul>
                
            </div>
        </div>
    );
};

export default Header;