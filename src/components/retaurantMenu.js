import { menu} from "../../utils/mockData";
import { useState } from "react";
import {useParams} from "react-router";
import { useDispatch } from "react-redux";
import { addItem } from "../../utils/cartSlice";


const MenuCategory = ({category,filter})=>{
    const [showItems, setShowItems]= useState(false);


    const dispatch = useDispatch();
    const handleAddItem = (item) =>{
        dispatch(addItem(item));
    }

    const filteredItems = category.items.filter((item) => {
    if(filter === "veg"){
        return item.isVeg;
    }

    if(filter === "nonVeg"){
        return !item.isVeg;
    }

    return true;
});

    return(
        <div className="border-b-8 border-gray-100 p-4 w-1/2 m-auto">
            <div className="flex justify-between font-bold text-lg cursor-pointer"
            onClick={() =>setShowItems(!showItems)}>
                <span className = "text-xl">
                 {category.title} ({category.items.length})
                 </span>

                <span>{showItems ? "▲" : "▼"}</span>
            </div>
            {showItems && (
                <div className = "mt-2">
                    {filteredItems.map((item) =>(
                        <div key= {item.id}
                        className = "py-5 border-b border-gray-200 flex justify-between" >
                          <div className = "flex  flex-col">
                            <div>{item.isVeg ? "🟢" : "🔴"}</div>
                            <p className="font-medium text-xl">{item.name}</p>
                            <p className="text-lg font-bold">{'₹'+ item.price}</p>
                            <p className="text-lg">{item.description}</p>
                          </div>
                            
                            <button className ="border border-gray-200 px-6 rounded-lg
                            transition-all duration-200 active:scale-95 text-green-600 py-1 font-bold cursor-pointer hover:bg-gray-200"
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
    const [filter, setFilter] = useState(null);

    const handleFilter = (type)=>{
      if(filter === type){
        setFilter(null)
      } else{
        setFilter(type);
      }
    }

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
      <button className="border px-3 py-2 rounded-md gap-2" 
      onClick={()=>handleFilter("veg")}>veg</button>
      <button className="border px-3 py-2 rounded-md"
      onClick={()=>handleFilter("non-veg")}>Non-veg</button>

      {restaurant.categories.map((category) => (
        <MenuCategory
          key={category.title}
          category={category}
          filter={filter}
        />
      ))}

    </div>
  );
};

export default RestaurantMenu;