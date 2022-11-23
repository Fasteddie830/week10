import React, { useContext, useState } from "react";
import OrderContext from "./OrderContext";

const SubmitOrder = () => {
    const [nameField, setNameField] = useState("");
    const [tableField, setTableField] = useState("");
    const [message, setMessage] = useState("");
    const submitOrder = () => {
        const [order, setOrder] = useContext(OrderContext);
    }
    const addOrder = () => {
        let newOrder = [nameField, tableField, ...order];
        const orderString = JSON.stringify(newOrder);
        fetch(`http://localhost:3001/addOrder`, {
            method: "POST",
            headers: {
                Accept: "application/json, text/plain, */* ",
                "Content-Type": "application/json",
            },
            body: orderString,
        })
            .then(() => {
            setMessage(
                "Hi " +
                nameField +
                " Thank you for your order of: " +
                order
            );
        setORder([]);
        setNameField("");
        setTableField("");
    })
        .catch ((err) => {
    console.log(err);
});
    };
return (
    <div>
        <h2>Submit Order</h2>
        <label>Enter your name:</label>
        <input
            className="form-control"
            type="text"
            placeholder="Enter your name here..."
            value={nameField}
            onChange={(e) => setNameField(e.target.value)}>
        </input>
        <label>Enter your table number:</label>
        <input classname="form-control"
            type="text"
            placeholder="enter your table number here"
            value={tableField}
            onChange={(e) => setTableField(e.target.value)}>
        </input>
        <button onClick={addOrder}>Submit Order</button>
    </div>
);
};

export default SubmitOrder;