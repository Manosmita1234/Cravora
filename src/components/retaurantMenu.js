import { menu} from "../../utils/mockData";
import { useState } from "react";
import {useParams} from "react-router";
import { useDispatch } from "react-redux";
import { addItem } from "../../utils/cartSlice";

const MenuCategory = ({category})=>{
    const [showItems, setShowItems]= useState(false);

    const dispatch = useDispatch();
    const handleAddItem = (item) =>{
        dispatch(addItem(item));
    }

    return(
        <div className="border-b-8 border-gray-100 p-4">
            <div className="flex justify-between font-bold text-lg cursor-pointer"
            onClick={() =>setShowItems(!showItems)}>
                <span>
                 {category.title} ({category.items.length})
                 </span>

                <span>{showItems ? "▲" : "▼"}</span>
            </div>
            {showItems && (
                <div className = "mt-2">
                    {category.items.map((item) =>(
                        <div key= {item.id}
                        className = "py-5 border-b border-gray-200 flex justify-between" >
                            <p>{item.name}</p>
                            <button className ="border px-4 py-3 font-bold cursor-pointer hover:bg-gray-200"
                            onClick={()=>handleAddItem(item)}>ADD</button>
                            </div>
                    ))}
                    </div>
            )}
           
        </div>
    )
} 

const RestaurantMenu = () => {
    const {resId} = useParams();
    const restaurant = menu[resId];

    if(!restaurant){
        return(
        <h1>Menu not found...</h1>
        )
    }

  return (
    <div className="mt-6">

      <h1 className="text-2xl font-bold text-center">
        {restaurant.info.name}
      </h1>

      {restaurant.categories.map((category) => (
        <MenuCategory
          key={category.title}
          category={category}
        />
      ))}

    </div>
  );
};

export default RestaurantMenu;