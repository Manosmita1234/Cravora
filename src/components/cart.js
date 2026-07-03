import { useSelector } from "react-redux";
import { useDispatch } from "react-redux";
import { clearCart } from "../../utils/cartSlice";

const Cart = ()=>{

    const cartItems = useSelector((store)=>store.cart.items);
    const dispatch = useDispatch();
    const handleClearCart = ()=>{
        dispatch(clearCart());
    };

    return(
        <div><h1 className="text-3xl text-center font-bold">Cart</h1>
        <button className="p-4 border-2 m-2 bg-gray-200 "
        onClick={handleClearCart}>clear cart</button>
        <div>
            {cartItems.length === 0 ? (
                <p>your cart is empty</p>
            ):(
                cartItems.map((item,index)=>(
                    <div key={`${item.id}${index}`}
                    className= "flex justify-between border-b py-4">
                        <span>{item.name}</span>
                        <span>{item.price}</span>
                    </div>
                ))
            )}
            
            </div>
            
            </div>
        
    )
}

export default Cart;