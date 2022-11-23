import React, { useContext } from "react";
import OrderContext from "./OrderContext";

export default function OrderSummary() {
    const [order, setOrder] = useContext(OrderContext);
    const removeItem = (e, item) => {
        let updatedOrder = order.filter((element) => {
            return element !== item;
        });
        setOrder(updatedOrder);
    };
    return (
        <div>
            <h2>Your Order</h2>
            <ul>
                {order.map((item, index) => (
                    <li key={index} onClick={(e)=> removeItem(e, item)}>
                        {item}
                    </li>
                ))}
            </ul>
        </div>
    );
}