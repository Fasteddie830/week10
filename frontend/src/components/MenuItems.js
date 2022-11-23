import React, { useState } from "react";
import OrderSummary from "./OrderSummary";
import OrderContext from "./OrderContext";
import SubmitOrder from "./SubmitOrder";

const MenuItems = ({ items }) => {
    const [selectedItems, setSelectedItems] = useState([]);
    const handleClick = (e, selectedItem) => {
        let newState = [...selectedItems, selectedItem];
        setSelectedItems(newState);
        console.log(selectedItems);
    };
    return (
        <>
            <div className="container-fluid">
                <div className="row">
                    <div className="col-2 submenu">
                        <h2>Menu</h2>
                        <ul>
                            {items.map((item) => (
                                <li key={item.id} onClick={(e) => handleClick(e, item.name)}>
                                    {item.name}
                                </li>
                            ))}
                        </ul>
                    </div>
                    <OrderContext.Provider value={[selectedItems, setSelectedItems]}>
                        <div className="col-4" ><OrderSummary/></div>
                        <div className="col-6"><SubmitOrder></SubmitOrder></div>
                    </OrderContext.Provider>
                </div>
            </div>
        </>
    );
};
export default MenuItems;