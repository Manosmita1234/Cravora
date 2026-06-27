import { useEffect } from "react";

const RestaurantMenu = () => {

    

    const fetchMenu = async () => {
        try {
            const response = await fetch(
                "https://corsproxy.io/?url=https://www.swiggy.com/dapi/menu/pl?page-type=REGULAR_MENU&complete-menu=true&lat=20.4667705&lng=85.8956381&restaurantId=651010&catalog_qa=undefined&submitAction=ENTER"
            );


            const json = await response.json();
            console.log(json);

        } catch (err) {
            console.error(err);
        }
    };

    useEffect(() => {
        fetchMenu();
    }, []);

    return (
        <div>
            <h1>Res Menu</h1>
        </div>
    );
};

export default RestaurantMenu;